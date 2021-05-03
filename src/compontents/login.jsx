import { useState } from "react";

const Login = ({ show, hide, checkUser }) => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const toggleStuff = () => {
    show();
    hide();
  };

  const sendUser = () => {
    checkUser(username, password);
    toggleStuff();
  };

  return (
    <div
      className="border rounded-md shadow-md m-2 bg-white"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <p className="font-semibold text-lg ml-4 mt-2">Login</p>
      <input
        className="px-4 py-1 m-4 shadow-md rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="px-4 py-1 m-4 shadow-md rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />
      <button
        onClick={sendUser}
        className="border rounded-md px-3 py-1 m-2 bg-gray-200 hover:bg-gray-500 font-medium text-lg"
      >
        Submit
      </button>
    </div>
  );
};

export default Login;
