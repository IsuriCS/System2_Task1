import { useState } from "react";
import Wave from "../Assets/koala-hug.gif"

export default () => {
  const [name, setName] = useState(localStorage.getItem("UserName") || "There");
    return (
        <div className="w-screen h-screen bg-bgColor flex items-center justify-center flex-col">
            <h1 className="text-6xl">Hello {name}</h1>
            <img src={Wave} alt="" />
        </div>
  );
};
