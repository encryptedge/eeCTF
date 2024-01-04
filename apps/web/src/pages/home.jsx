import "../styles/home.styles.css";
import "react-toastify/dist/ReactToastify.css";
import apiClient from "../libs/api.client";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import { LoginCard } from "../components/cards/login-card";
import { RegisterCard } from "../components/cards/register-card";

function Home() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) return;

    apiClient
      .get("/user/whoami", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        if (res.data.error) return;

        if (res.data.message === "Invalid token") return;
        setUser(res.data);
      });
  }, []);

  return (
    <div>
      <Navbar
        pageTitle={
          user ? "Welcome back, " + user.last_name : "Welcome to eeCTF"
        }
      />
      <div>
        {user === null ? (
          <div className='auht-grid'>
            <LoginCard />
            <RegisterCard />
          </div>
        ) : (
          <div className='home-card'>
            <div className='home-card-content'>
              {/* <p>
                You are currently in {user.team_name} team. Your team has{" "}
                {user.team_score} points.
              </p> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
