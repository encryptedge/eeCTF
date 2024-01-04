import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/navbar";

function Home() {
  return (
    <>
      <Navbar pageTitle={"About"} />
      <div className='about-elements'>
        <h2>Guides</h2>
        <div className='action-card'>
          <a href='https://www.youtube.com/watch?v=9Pzj7Aj25lw'>
            How to use the scoreboard
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
