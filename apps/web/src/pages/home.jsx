import "../styles/App.css";
import "react-toastify/dist/ReactToastify.css";
// import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

function Home() {
  return (
    <div>
      <Navbar pageTitle='Welcome to eeCTF' />
      <p>hello</p>
    </div>
  );
}

export default Home;
