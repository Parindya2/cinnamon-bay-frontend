import React, { useEffect, useState } from 'react'
import { getRoomTypes } from '../utils/ApiFunctions'

const RoomTypeSelector = ({handleRoomInputChange, newRoom}) => {
    const[roomTypes, setRoomTypes] = useState([])
    const[showNewRoomTypeInput, setShowNewRoomTypesInput] = useState(false)
    const[newRoomType, setNewRoomType] = useState("")
    const[loading, setLoading] = useState(true)
    const[error, setError] = useState("")

    useEffect(() => {
        fetchRoomTypes();
    }, []);

    const fetchRoomTypes = async () => {
        try {
            setLoading(true);
            setError("");
            
            console.log("Attempting to fetch room types...");
            const data = await getRoomTypes();
            console.log("Fetched room types - Raw response:", data);
            
            // Handle different possible response structures
            if (Array.isArray(data)) {
                setRoomTypes(data);
                console.log("Set room types (array):", data);
            } else if (data && Array.isArray(data.data)) {
                setRoomTypes(data.data);
                console.log("Set room types (nested array):", data.data);
            } else {
                console.warn("Unexpected room types response format:", data);
                setRoomTypes([]);
            }
        } catch (err) {
            console.error("Error fetching room types:", err);
            console.error("Error details:", {
                message: err.message,
                response: err.response,
                status: err.response?.status,
                data: err.response?.data
            });
            
            // Set fallback room types if API fails
            setError("Failed to load room types from server. Using fallback options.");
            setRoomTypes(["Single", "Double", "Deluxe", "Suite"]); // Fallback room types
        } finally {
            setLoading(false);
        }
    };

    const handleNewRoomTypeInputChange = (e) => {
        setNewRoomType(e.target.value);
    }

    const handleAddNewRoomType = () => {
        if(newRoomType.trim() !== ""){
            const trimmedType = newRoomType.trim();
            
            // Check if room type already exists
            if (roomTypes.includes(trimmedType)) {
                alert("This room type already exists!");
                return;
            }
            
            setRoomTypes([...roomTypes, trimmedType]);
            setNewRoomType("");
            setShowNewRoomTypesInput(false);
            
            // Update the parent component with the new room type
            handleRoomInputChange({
                target: { name: 'roomType', value: trimmedType }
            });
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddNewRoomType();
        }
    }

    if (loading) {
        return (
            <div className="form-select d-flex align-items-center">
                <span>Loading room types...</span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="form-select d-flex align-items-center text-danger">
                <span>{error}</span>
            </div>
        );
    }

    return (
        <>
            <div style={{ width: '100%' }}>
                <select
                    name='roomType'
                    className='form-select'
                    onChange={(e) => {
                        if(e.target.value === "Add New"){
                            setShowNewRoomTypesInput(true)
                        } else {
                            handleRoomInputChange(e)
                        }
                    }}
                    value={newRoom.roomType}>
                    <option value="">Select a room type</option>
                    {roomTypes.map((type, index) => (
                        <option key={index} value={type}>
                            {type}
                        </option>
                    ))}
                    <option value="Add New">+ Add New Room Type</option>
                </select>
                
                {showNewRoomTypeInput && (
                    <div className='input-group mt-2'>
                        <input
                            className='form-control'
                            type='text'
                            placeholder='Enter a new room type'
                            value={newRoomType}
                            onChange={handleNewRoomTypeInputChange}
                            onKeyPress={handleKeyPress}
                        />
                        <button 
                            className='btn btn-success' 
                            type='button' 
                            onClick={handleAddNewRoomType}
                        >
                            Add
                        </button>
                        <button 
                            className='btn btn-secondary' 
                            type='button' 
                            onClick={() => {
                                setShowNewRoomTypesInput(false);
                                setNewRoomType("");
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}

export default RoomTypeSelector