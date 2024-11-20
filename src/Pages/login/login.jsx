import React from "react";
import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { InputField } from "../../Components/Input";
import loginPost from "../../API/LoginAPI";

const loginPage = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [isUsernameActivated, setUserNameActivated] = useState(false);
  const [isPasswordActivated, setPasswordActivated] = useState(false);

  const [userNameAlert, setUserNameAlert] = useState(null);
  const [passwordAlert, setPasswordAlert] = useState(null);

  const [isInputsValid, setInputsValid] = useState(false);
  const [isLoginClicked, setLoginClicked] = useState(false);
  const [isLoading, setLoading] = useState(false);

  //Remove isAuthenticated variable form localStorage
  useEffect(() => {
    localStorage.removeItem("isAuthenticated");
  }, []);

  //Check username field is not empty.
  const checkUsername = useCallback(() => {
    if (userName === "") {
      setUserNameAlert("Username is required");
    } else {
      setUserNameAlert(null);
    }
  }, [userName]);

  //Check password field is not empty.
  const checkPassword = useCallback(() => {
    if (password === "") {
      setPasswordAlert("Password is required.");
    } else {
      setPasswordAlert(null);
    }
  }, [password]);


  const handleLogin = useCallback(async () => {
    setLoginClicked(true);
    setLoading(true);

    try {
      const status = await loginPost(userName, password);
      if (status == "200") {
        setInputsValid(true);
        localStorage.setItem("isAuthenticated", "true"); 
        navigate("/welcome");
      } else {
        setInputsValid(false);
      }
    } catch (error) {
      console.error("Login failed:", error);
      setInputsValid(false);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, [userName, password, navigate]);

  return (
    <div className="border flex justify-center align-center items-center bg-bgColor h-screen">
      <div className="flex flex-col space-y-8 bg-white p-10 border-red w-[30rem] items-center rounded-lg drop-shadow">
        <h1 className="text-4xl font-bold text-darkRed font-sans">Log In</h1>
        <div className="flex flex-col space-y-4 w-full">
          <div className="w-full">
            <InputField
              type="text"
              placeholder="User Name"
              value={userName}
              onBlur={() => {
                setUserNameActivated(true);
                checkUsername();
              }}
              onChange={(e) => setUserName(e.target.value)}
            />
            {isUsernameActivated && (
              <div>
                <p className="text-red text-xs">{userNameAlert}</p>
              </div>
            )}
          </div>

          <div className="w-full">
            <InputField
              type="password"
              placeholder="Password"
              value={password}
              onBlur={() => {
                setPasswordActivated(true);
                checkPassword();
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
            {isPasswordActivated && (
              <div>
                <p className="text-red text-xs">{passwordAlert}</p>
              </div>
            )}
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center">
            <p className="text-blue text-sm">Loading...</p>
          </div>
        ) : (
          !isInputsValid &&
          isLoginClicked && (
            <div>
              <p className="text-red text-xs">Invalid Username or Password</p>
            </div>
          )
        )}

        <div>
          <button
            className="px-7 py-4 text-white bg-button rounded-full hover:bg-buttonHover active:bg-buttonHover"
            onClick={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? "Logging In..." : "Log In"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default loginPage;