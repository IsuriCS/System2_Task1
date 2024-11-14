import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  const [isUsernameActivated, setUserNameActivated] = useState(false);
  const [isPasswordActivated, setPasswordActivated] = useState(false);

  const [userNameAlert, setUserNameAlert] = useState(null);
  const [passwordAlert, setPasswordAlert] = useState(null);

  function checkUsername(userName) {
    if (userName == null) {
      setUserNameAlert("Please enter user name.");
    }
    else {
      setUserNameAlert(null);
    }
  }

  function checkPassword(password) {
    if (password == null) {
      setPasswordAlert("Please enter password.");
    }
    else if (password.length < 5) {
      setPasswordAlert("Password should be longer than 5 charactors.");
    }
    else {
      setPasswordAlert(null);
    }
  }

  function handleClick() {
    if (pwalert == null && unalert == null) {
      localStorage.setItem("UserName", userName);
      navigate("/welcome");
    }
  }

  return (
    <div className="border flex justify-center align-center items-center bg-bgColor h-screen">
      <div className="flex flex-col space-y-8 bg-white p-10   border-red w-[30rem] items-center rounded-lg drop-shadow ">
        <h1 className="text-4xl font-bold text-darkRed font-sans">Log In</h1>
        <div className="flex flex-col  space-y-4 w-full">

          <div className="w-full">
            <input
              type="text"
              placeholder="User Name"
              value={userName}
              onBlur={() => {
                setUserNameActivated(true);
                checkUsername(userName);

              }}
              onChange={(e) => setUserName(e.target.value)}
              className="border border-Gray p-1 rounded-md drop-shadow w-full"
            />

            {isUsernameActivated && (
              <div>
                <p className="text-red text-xs">{userNameAlert}</p>
              </div>
            )}

          </div>

          <div className="w-full">
            <input
              type="password"
              placeholder="Password"
              onBlur={() => {
                setPasswordActivated(true);
                checkPassword(password);
                
              }}
              className="border p-1 rounded-md border-Gray drop-shadow w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {isPasswordActivated && (
              <div>
                <p className="text-red text-xs">{passwordAlert}</p>
              </div>
            )}

          </div>
          
        </div>
        <div>   
          <button
            className="px-7 py-4 text-white  bg-button rounded-full hover:bg-buttonHover active:bg-buttonHover"
            onClick={handleClick}
          >
            Log In
          </button>
        </div>
      </div>
    </div>

  );
};
