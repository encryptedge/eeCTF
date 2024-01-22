import { useState } from "react";
import { toast } from "react-toastify";

import apiClient from "../../libs/api.client";

export const RegisterCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    apiClient
      .post(
        "/user/register",
        {
          email,
          password,
          firstName,
          lastName,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.data.email === email) {
          toast.success("Register Successful!", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            draggable: true,
          });
          setTimeout(() => {
            window.location.href = "/verify";
          }, 3000);
        } else {
          toast.error("Register Failed!", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            draggable: true,
          });
        }
      })
      .catch(() => {
        toast.error("Register Failed!", {
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
      <div className='signup-card login-card'>
        <h2>Sign Up</h2>
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
          <div className='form-control'>
            <div className='form-el-container'>
              <label htmlFor='firstName'>First Name</label>
            </div>
            <div className='form-el-container'>
              <input
                className='forminput'
                type='firstName'
                id='firstName'
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                placeholder='Enter your firstName'
              />
            </div>
          </div>
          <div className='form-control'>
            <div className='form-el-container'>
              <label htmlFor='lastName'>Last Name</label>
            </div>
            <div className='form-el-container'>
              <input
                className='forminput'
                type='lastName'
                id='lastName'
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                placeholder='Enter your lastName'
              />
            </div>
          </div>
          <button className='btn' type='submit'>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};
