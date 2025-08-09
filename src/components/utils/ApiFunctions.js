import axios from "axios";
import { ca } from "date-fns/locale";

export const api = axios.create({
    baseURL : "http://localhost:9192"
})

export const getHeader = () =>{
    const token = localStorage.getItem("token");
    console.log("Token:", token);
    if(!token) {
        console.error("No token found in localStorage");
        return{};
    }
    return{
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
    }
}

//This function adds a new room to the database
export async function addRoom(photo, roomType, roomPrice) {
	const formData = new FormData()
	formData.append("photo", photo)
	formData.append("roomType", roomType)
	formData.append("roomPrice", roomPrice)

	const response = await api.post("/rooms/add/new-room", formData,{
		headers: getHeader()
	})
	if (response.status === 201) {
		return true
	} else {
		return false
	}
}


//This function gets all room types from the database
export async function getRoomTypes(){
    try{
        const response = await api.get("/rooms/room/types");
        return response.data;
    }catch(error){
        throw new Error("Error fetching room types");
    }
}

//This function gets all rooms from the database
export async function getAllRooms(){
    try {
        const result = await api.get("/rooms/all-rooms")
        return result.data
    } catch (error) {
        throw new Error("Error fetching rooms")
    }
}

//This function deletes a room by the Id
export async function deleterRoom(roomId){
    try {
        const result = await api.delete(`/rooms/delete/room/${roomId}`, {
            headers: getHeader()
        })
        return result.data
    } catch (error) {
        throw new Error(`Error deleting room ${error.message}`)
    }
}

//This function update a room
export async function updateRoom(roomId, roomData){
    const formData = new FormData()
    formData.append("roomType", roomData.roomType)
    formData.append("roomPrice", roomData.roomPrice)
    formData.append("photo", roomData.photo)
    const response = await api.put(`/rooms/update/${roomId}`, formData)
    return response
}

//This function gets a room by the id
export async function getRoomById(roomId){
    try {
        const result = await api.get(`/rooms/room/${roomId}`)
        return result.data
    } catch (error) {
        throw new Error(`Error fetching room ${error.message}`)
    }
}

// This function saves a new booking
export async function bookRoom(roomId, bookingData) {
    try {
        const response = await api.post(`/bookings/room/${roomId}/booking`, bookingData, {
            headers: getHeader() // Add this line to include auth headers
        });
        return response.data;
    } catch (error) {
        if(error.response && error.response.data){
            throw new Error(error.response.data)
        }else{
            throw new Error(`Error booking room: ${error.message}`);
        }
    }
}


// This function gets all bookings
export async function getAllBookings() {
    try{
        const result = await api.get("/bookings/all-bookings", {
            headers: getHeader()
        });  
        return result.data;
    } catch (error) {
        throw new Error(`Error fetching bookings: ${error.message}`);
    }
}

// This function gets a booking by the confirmation code
export async function getBookingByConfirmationCode(confirmationCode) {
    try {
        const result = await api.get(`/bookings/confirmation/${confirmationCode}`, {
            headers: getHeader()
        });
        return result.data;
    } catch (error) {
        if(error.response && error.response.data) {
            throw new Error(error.response.data);
        } else{
             throw new Error(`Error fetching booking: ${error.message}`);
        }
       
    }
}

// This function gets a booking by the booking id
export async function cancelBooking(bookingId) {
    try {
        console.log("Attempting to cancel booking with ID:", bookingId);
        const result = await api.delete(`/bookings/booking/${bookingId}/delete`, {
            headers: getHeader()
        });
        console.log("Booking cancellation successfully:", result.data);
        return result.data;
        return result.data;
    } catch (error) {
        throw new Error(`Error cancelling booking: ${error.message}`);
    }
}

// This function gets all available rooms based on the check-in and check-out dates and room type
export async function getAvailableRooms(checkInDate, checkOutDate, roomType) {
    try {
        const response = await api.get(
            `/rooms/available-rooms?checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&roomType=${roomType}`
        );
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching available rooms: ${error.message}`);
    }
}

export async function registration(registration){
    try {
        const response = await api.post("/auth/register-user", registration);
        return response.data;
    } catch (error) {
        if(error.response && error.response.data){
            throw new Error(error.response.data);
        }else{
            throw new Error(`User registration error: ${error.message}`);
        }
    }
}

export async function login(login){
    try {
        const response = await api.post("/auth/login", login);
    if(response.status >= 200 && response.status < 300){
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.id);
        localStorage.setItem("userRoles", JSON.stringify(response.data.roles));
        return response.data;
    } else {
        return null;
    }
    } catch (error) {
        console.error(error);
        return null;
    }
    
}

export async function getUserProfile(userId, token){
    try {
        const response = await api.get(`users/profile/${userId}`, {
            headers: getHeader()
        })
        return response.data;
    } catch (error) {
        throw error;
    }

}

export async function deleteUser(userId){
    try {
        const response = await api.delete(`/users/delete/${userId}`, {
            headers: getHeader()
        })
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function getUser(userId, token){
    try{
        const response = await api.get(`/users/${userId}`, {
            headers: getHeader()
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

/* This is the function to get user bookings by the user id */
export async function getBookingsByUserId(userId, token) {
	try {
		const response = await api.get(`/bookings/user/${userId}/bookings`, {
			headers: getHeader()
		})
		return response.data
	} catch (error) {
		console.error("Error fetching bookings:", error.message)
		throw new Error("Failed to fetch bookings")
	}
}