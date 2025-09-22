import React from "react";
import { useNavigate } from "react-router-dom";

function Project() {
    const navigate = useNavigate();
    return(
        <>
        <p>Hello</p>
        <button onClick={()=> navigate("/")}>Go Back to Home.</button>        
        </>
    );
    
}
export default Project;