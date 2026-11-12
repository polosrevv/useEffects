// Steven Gonell
// 11/9/2026
// Teacher tools component that displays gradebook access for teachers.
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

function TeacherTools() {
    
    const { user } = useContext(UserContext);
    if(!user || user.role !== "teacher"){
        return (
            <p>
                Gradebook for teachers only
            </p>
        );  
    }
    return (
        // How do I figure out if the user is a teacher?
        // We can use the UserContext to check the user's role.
        <nav>
            <a href = "#"> Grade Book</a>
        </nav>
    );
}

export default TeacherTools;