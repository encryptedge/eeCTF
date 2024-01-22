import { useState } from "react";
import apiClient from "../libs/api.client";
import { ToastContainer, toast } from "react-toastify";

function Home() {
  const [otp, setOtp] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    apiClient
      .post(
        "/user/verify",
        {
          otp,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.data.message === "User verified successfully") {
          toast.success("Email Verified!", {
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
          toast.error("Email Verification Failed!", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            draggable: true,
          });
        }
      })
      .catch(() => {
        toast.error("Email Verification Failed!", {
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
      <div>
        <img src='/ee.png' className='logo react' alt='ee logo' />
      </div>
      <h1>Auth Portal</h1>
      <div className='login-card'>
        <h2>Verify Email</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <div className='form-el-container'>
              <label htmlFor='otp'>Verification Code</label>
            </div>
            <div className='form-el-container'>
              <input
                type='text'
                id='email'
                value={otp}
                onChange={(event) => setOtp(event.target.value)}
                placeholder='EC-XXXXXX'
              />
            </div>
          </div>
          <button className='btn' type='submit'>
            Verify
          </button>
        </form>
      </div>
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
