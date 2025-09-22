import React from "react";
import { useNavigate } from "react-router-dom";

import Text from "../components/Text";
function Home() {
    const navigate = new useNavigate();

    return(
        <>
        <Text/>
        <button onClick={()=> navigate("./Projects")}>See Projects here.</button>
        </>
    );
    
}
export default Home;