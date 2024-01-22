import { useState } from "react";
import apiClient from "../../libs/api.client";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export const LoginCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let token = localStorage.getItem("token");

  const handleSubmit = (event) => {
    event.preventDefault();

    apiClient
      .post(
        "/user/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.data.status === 200) {
          token = response.data.message.token;
          localStorage.setItem("token", token);
          toast.success("Login Successful!", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            draggable: true,
          });
          setTimeout(() => {
            window.location.href = "/";
          }, 3000);
        } else {
          toast.error("Login Failed!", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            draggable: true,
          });
        }
      })
      .catch(() => {
        toast.error("Login Failed!", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          draggable: true,
        });
      });
  };
  return (
    <div>
      <div className="login-card">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="form-el-container">
              <label htmlFor="email">Email</label>
            </div>
            <div className="form-el-container">
              <input
                className="forminput"
                type="text"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="form-control">
            <div className="form-el-container">
              <label htmlFor="password">Password</label>
            </div>
            <div className="form-el-container">
              <input
                className="forminput"
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
              />
            </div>
          </div>
          <button className="btn" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};
