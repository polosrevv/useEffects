// Steven Gonell
// 11/9/2026
import { UserContext } from "./UserContext";
import { useState } from "react";
// Here we are importing the UserContext from the Context folder.
// This component provides the user context to its children.
function UserProvider({ children }) {
    // Here we will have a vairable called user with useState
    // Because I used useState it needs to be imported from React.
    const [user, setUser] = useState(null);
    // user variable, setter, and its default value is null
    const login = (name, role) => {
        setUser({ name, role });
    };
    const logout = () => {
        setUser(null);
    };
    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;
