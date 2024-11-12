import { event } from "jquery";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  const [isUsernameActivated, setUsernameActivated] = useState(false);
  const [isPasswordActivated, setPasswordActivated] = useState(false);

  const [unalert, setUnAlert] = useState(null);
  const [pwalert, setPwAlert] = useState(null);

  function handleUsername(event){
    setUserName(event.target.value);
    
    checkUsername(userName);
  
  }

  function handleUnBlur() {
    setUsernameActivated(true)
    checkUsername(userName)
  }
    function handlePwBlur() {
      setPasswordActivated(true);
      checkPassword(password)
    }

  function checkUsername(userName) {
    if (userName == null) {
      setUnAlert("Please enter user name.")
    }
    else {
      setUnAlert(null)
    }
  }

  function checkPassword(password) {
    if (password == null) {
      setPwAlert("Please enter password.")
    }
    else if (password.length < 5) {
      setPwAlert("Password should be longer than 5 charactors.")
    }
    else {
      setPwAlert(null)
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
                onBlur={handleUnBlur}
                onChange={(e) => handleUsername(e)}
                className="border border-Gray p-1 rounded-md drop-shadow w-full"
              />
              {isUsernameActivated && (
                <div>
                  <p className="text-red text-xs">{unalert}</p>
                </div>
              )}
            </div>
            <div className="w-full">
              <input
                type="password"
                placeholder="Password"
                onBlur={handlePwBlur}
                className="border p-1 rounded-md border-Gray drop-shadow w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {isPasswordActivated && (
                <div>
                  <p className="text-red text-xs">{pwalert}</p>
                </div>
              )}
            </div>
          </div>
          <div>
            {/* <button className="bg-red border p-1 rounded-full text-white text-xl py-2 px-4">Log In</button> */}
            <button className="px-7 py-4 text-white  bg-button rounded-full hover:bg-buttonHover active:bg-buttonHover" onClick={handleClick}>
              Log In
            </button>
          </div>
        </div>
      </div>
      // </div>
    );
    
    
    
};
