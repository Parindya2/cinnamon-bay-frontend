import React, { useEffect, useState } from 'react'
import { getRoomTypes } from '../utils/ApiFunctions'

const RoomTypeSelector = ({handleRoomInputChange, newRoom}) => {
    const[roomTypes, setRoomTypes] = useState([""])
    const[showNewRoomTypeInput, setShowNewRoomTypesInput] = useState(false)
    const[newRoomType, setNewRoomType] = useState("")

    useEffect(() => {
        getRoomTypes().then((data) => {
            console.log("Fetched room types:", data);  // ADD THIS
            setRoomTypes(data.roomTypes); // Use correct structure
        }).catch(err => console.error(err))
    }, []);
    

    const handleNewRoomTypeInputChnage = (e) => {
        setNewRoomType(e.target.value);
    }

    const handleAddNewRoomType = () => {
        if(newRoomType !== ""){
            setRoomTypes([...roomTypes, newRoomType])
            setNewRoomType("")
            setShowNewRoomTypesInput(false)
        }
    }
  return (
    <>
    {roomTypes.length >= 0 && (
        <div>
            <select
             required
             name='roomType'
             className='form-select'
             onChange={(e) => {
                if(e.target.value === "Add New"){
                    setShowNewRoomTypesInput(true)
                }else{
                    handleRoomInputChange(e)
                }
             }}
             value={newRoom.roomType}>
                <option value="">select a room type</option>
                <option value={"Add New"}>Add New</option>
                {roomTypes.map((type, index) => (
                    <option key={index} value={type}>
                        {type}
                    </option>
                ))}

             </select>
             {showNewRoomTypeInput && (
                <div className='input-group'>
                    <input
                    className='form-control'
                    type='text'
                    placeholder='Enter a new room type'
                    onChange={handleNewRoomTypeInputChnage}
                    />
                    <button className='btn btn-hotel' type='button' onClick={handleAddNewRoomType}>
                        Add
                    </button>
                    
                </div>
             )}
        </div>
    )}
    </>
  )
}

export default RoomTypeSelector
