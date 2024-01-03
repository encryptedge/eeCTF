import { useState } from "react";
import apiClient from "../libs/api.client";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/navbar";

function Home() {
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
        if (response.data.message === "Login successful") {
          token = response.data.token;
          localStorage.setItem("token", token);
          toast.success("Login Successful!", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            draggable: true,
          });
          setTimeout(() => {
            window.location.href = "/app";
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
    <>
      <Navbar pageTitle={"Login Portal"} />
      <div className='login-card'>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <div className='form-el-container'>
              <label htmlFor='email'>Email</label>
            </div>
            <div className='form-el-container'>
              <input
                className='forminput'
                type='text'
                id='email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder='Enter your email'
              />
            </div>
          </div>
          <div className='form-control'>
            <div className='form-el-container'>
              <label htmlFor='password'>Password</label>
            </div>
            <div className='form-el-container'>
              <input
                className='forminput'
                type='password'
                id='password'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder='Enter your password'
              />
            </div>
          </div>
          <button className='btn' type='submit'>
            Sign In
          </button>
        </form>
      </div>
      <p className='read-the-docs'>
        Don&apos;t have a account, register from{" "}
        <Link to='/register'>here</Link>.
      </p>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </>
  );
}

export default Home;
