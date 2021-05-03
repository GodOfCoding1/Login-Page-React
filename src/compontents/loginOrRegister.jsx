const LoginOrRegister = ({ hideOR, showlogin, showRegister }) => {
  const togglelogin = () => {
    hideOR();
    showlogin();
  };
  const toggleregister = () => {
    hideOR();
    showRegister();
  };
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        down: 0,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "fit-content",
        }}
        className="font-semibold text-lg border shadow-md rounded-sm bg-white my-4"
      >
        <button
          onClick={togglelogin}
          style={{ width: "200px" }}
          className="text-white  py-2 px-3 text-lg font-semibold m-3 rounded-sm bg-blue-400 hover:bg-blue-600"
        >
          Login
        </button>
        <button
          onClick={toggleregister}
          style={{ width: "200px" }}
          className="text-white py-2 px-3 text-lg font-semibold m-3 rounded-sm mt-0 bg-green-400 hover:bg-green-700"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default LoginOrRegister;
