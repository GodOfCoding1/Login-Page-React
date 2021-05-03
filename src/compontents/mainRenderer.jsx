import { useState } from "react";
import DashBoard from "./dashboard";
import Register from "./register";
import Login from "./login";
import LoginOrRegister from "./loginOrRegister";

const MainRender = () => {
  const [user_data, setUser] = useState([["madhav", "12345"]]);
  const [showDashBoard, setShowDashBoard] = useState(false);
  const [showRegister, setshowRegister] = useState(false);
  const [showLogin, setshowLogin] = useState(false);
  const [showOR, setshowOR] = useState(true);
  const [username, setusername] = useState("");

  //otgleing

  const toggleDashBoard = () => {
    setShowDashBoard(!showDashBoard);
  };
  const toggleRegister = () => {
    setshowRegister(!showRegister);
  };
  const togglelogin = () => {
    setshowLogin(!showLogin);
  };
  const toggleOR = () => {
    setshowOR(!showOR);
  };

  //login

  const updateUserdata = (username, password) => {
    setUser([...user_data, [username, password]]);
    console.log(user_data);
    setusername(username);
  };

  const checkUser = (username, password) => {
    console.log([username, password]);
    console.log(user_data);
    console.log(user_data.includes([username, password]));
    if (user_data.includes([username, password])) {
      setusername(username);
      toggleOR();
      toggleDashBoard();
    } else {
      alert("invalid password or username");
    }
  };

  return showOR ? (
    <LoginOrRegister
      hideOR={toggleOR}
      showlogin={togglelogin}
      showRegister={toggleRegister}
    />
  ) : null ?? showLogin ? (
    <Login hide={togglelogin} show={toggleOR} checkUser={checkUser} />
  ) : null ?? showRegister ? (
    <Register
      hide={toggleRegister}
      show={toggleDashBoard}
      userData={updateUserdata}
    />
  ) : null ?? showDashBoard ? (
    <DashBoard hide={toggleDashBoard} show={toggleOR} username={username} />
  ) : null;
};

export default MainRender;
