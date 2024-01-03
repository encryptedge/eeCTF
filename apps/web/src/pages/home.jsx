import "../styles/App.css";
import "react-toastify/dist/ReactToastify.css";
import apiClient from "../libs/api.client";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";

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
      <Navbar pageTitle='Welcome to eeCTF' />
      <p>hello</p>
    </div>
  );
}

export default Home;
