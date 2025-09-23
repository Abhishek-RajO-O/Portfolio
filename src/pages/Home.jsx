// dependencies
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// components
import Text from "../components/Text";
import TypeWritter from "../components/TypeWriter";

//code
function Home() {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  //Abhishek
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
//Type writter
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow2(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="h-screen bg-blue-400 flex flex-col justify-center items-center gap-5">
        <pre className="text-6xl text-white font-semibold text-center poppins-regular">
          Hello!
        </pre>
        <div className="flex flex-row items-baseline sm:h-10">
          {show && <Text text="I am Abhishek Raj" />}
        </div>
        <div className="h-10 mt-5">
          {show2 && (
            <TypeWritter arr={["A Front-end Developer", "A java Developer"]} />
          )}
        </div>
        <button onClick={() => navigate("./Projects")}>
          See Projects here.
        </button>
      </div>
    </>
  );
}
export default Home;
