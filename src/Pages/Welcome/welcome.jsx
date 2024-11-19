import { useState } from "react";
import Wave from "../../Assets/koala-hug.gif";
import { TextArea } from "../../Components/Input";

export default () => {
  const [typeText, setTypeText] = useState("");

  return (
    <div className="w-screen h-screen bg-bgColor flex items-center justify-center flex-col">
      <h1 className="text-6xl">Hi</h1>
      <p className="text-4xl ">{typeText}</p>
      <img src={Wave} alt="" />

      <TextArea
        placeHolder="Type something here"
        value={typeText}
        onChange={(e) => setTypeText(e.target.value)}
      />
    </div>
  );
};
