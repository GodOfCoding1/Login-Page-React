import { useState } from "react";

const Register = ({ show, hide, userData }) => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  const toggleStuff = () => {
    show();
    hide();
  };

  const pushUser = () => {
    userData(username, password);
    toggleStuff();
  };

  return (
    <div
      className=" border rounded-md shadow-md m-2 bg-white"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <p className=" font-semibold text-lg ml-4 mt-2">Register</p>
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
        onClick={pushUser}
        className="rounded-md border px-3 py-1 m-2 bg-gray-200 hover:bg-gray-500 font-medium text-lg"
      >
        Submit
      </button>
    </div>
  );
};

export default Register;
