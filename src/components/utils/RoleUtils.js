
export const getUserFromToken = () => {
    const token = localStorage.getItem("token");
    if (!token) return null;
    
    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload;
    } catch (error) {
        return null;
    }
}

export const getUserRole = () => {
    const userRole = localStorage.getItem("userRole");
    return userRole || "";
}

export const isAdmin = () => {
    const role = getUserRole();
    return role === "ROLE_ADMIN";
}

export const isUser = () => {
    const role = getUserRole();
    return role === "ROLE_USER";
}