import React, { useState } from 'react'

const RoomFilter = ({data, setFilteredData}) => {
    const[filter, setFilter] = useState("")

    const handleSelectChange = (e) => {
        const selectedRoomType = e.target.value
        setFilter(selectedRoomType)
        const filteredRooms = data.filter((room) => 
            room.roomType.toLowerCase()
           .includes(selectedRoomType.toLowerCase()))
           setFilteredData(filteredRooms)
    }
    const clearFilter = () => {
        setFilter("")
        setFilteredData(data)
    }

    const roomTypes = ["", ...new Set(data.map((room) => room.roomType))]
  return (
    <div className='input-group mb-3'>
      <span className='input-group-text' id="room-type-filter">
        Filter rooms by type
      </span>
      <select 
      className='form-select'
      value={filter}
      onChange={handleSelectChange}>
        <option value={""}>select a room type to filter...</option>
        {roomTypes.map((type, index) => (
            <option key={index} value={String(type)}>
                {String(type)}
            </option>
        ))}
      

      </select>
      <button 
          type="button" 
          onClick={clearFilter}
          style={{
		         backgroundColor: "#000",
		         color: "#fff",
		         border: "none",
		         borderRadius: "1px",
		         padding: "10px 20px",
		         cursor: "pointer"
	        }}
          >Clear Filter</button>
    </div>
  )
}

export default RoomFilter
