import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputFiled } from '../../Components/Input';

export default () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  const [isUsernameActivated, setUserNameActivated] = useState(false);
  const [isPasswordActivated, setPasswordActivated] = useState(false);

  const [userNameAlert, setUserNameAlert] = useState(null);
  const [passwordAlert, setPasswordAlert] = useState(null);

  const [isInputsValid, setInputValid] = useState(null);

  function checkUsername(userName) {
    if (userName == null) {
      setUserNameAlert("Username is required");
    } else {
      setUserNameAlert(null);
    }
  }

  function checkPassword(password) {
    if (password == null) {
      setPasswordAlert("Password is required.");
    } else {
      setPasswordAlert(null);
    }
  }

  function handleClick() {
    if (userName === "testUser" && password === "abc123") {
      setInputValid(true);
      navigate("/welcome");
    } else {
      setInputValid(false);
    }
  }

  return (
    <div className="border flex justify-center align-center items-center bg-bgColor h-screen">
      <div className="flex flex-col space-y-8 bg-white p-10   border-red w-[30rem] items-center rounded-lg drop-shadow ">
        <h1 className="text-4xl font-bold text-darkRed font-sans">Log In</h1>
        <div className="flex flex-col  space-y-4 w-full">
          <div className="w-full">
            <InputFiled
              type="text"
              placeHolder="User Name"
              value={userName}
              onBlur={() => {
                setUserNameActivated(true);
                checkUsername(userName);
              }}
              Onchange={(e) => setUserName(e.target.value)}
            />
            {isUsernameActivated && (
              <div>
                <p className="text-red text-xs">{userNameAlert}</p>
              </div>
            )}
          </div>

          <div className="w-full">
            <InputFiled
              type="password"
              placeHolder="Password"
              value={password}
              onBlur={() => {
                setPasswordActivated(true);
                checkPassword(password);
              }}
              Onchange={(e) => setPassword(e.target.value)}
            />
            {isPasswordActivated && (
              <div>
                <p className="text-red text-xs">{passwordAlert}</p>
              </div>
            )}
          </div>
        </div>

        {isInputsValid === false && (
          <div>
            <p className="text-red text-xs">Invalid Username or Password</p>
          </div>
        )}

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
