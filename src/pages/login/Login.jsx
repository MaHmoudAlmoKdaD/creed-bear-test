import { useContext, useRef } from "react";
import "./login.scss";
import { getAuthUser } from "./../../functions/LoginUser";
import { Context } from "./../../context/Context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const email = useRef("");
  const password = useRef("");
  const { dispatch, isFetching } = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    if (password.current.value === "123456") {
      const res = await getAuthUser(email.current.value);
      
      if (res.data.status === "success") {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.user });
        navigate("/");
      } else {
        dispatch({ type: "LOGIN_FAILURE" });
        alert("Email incorrect...")
      }
    }
  };

  
  return (
    <>
      <div id="login-form-wrap">
        <div className="d-flex justify-content-center p-3">
          <h1>Enjoy in this Journey</h1>
        </div>

        <form id="login-form" onSubmit={handleSubmit}>
          <div>
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              placeholder="example@some.com"
              required
              ref={email}
            />
          </div>
          <div>
            <input
              className="input"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              ref={password}
            />
          </div>
          <div>
            <button
              className="mb-5 login-button"
              disabled={isFetching}
              type="submit"
              id="login"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
