import Navbar from "../components/navbar";
import { url } from '../libs/api.client';

function Home() {
  return (
    <>
      <Navbar pageTitle={"About"} />
      <div className='about-elements'>
        <h2>Guides</h2>
        <div className="">
            <a href="https://blog.encryptedge.in/2024/rcs-ctf-guide">RCS CTF Guide</a>
        </div>

        <h2>API URL</h2>
        <div className="">
            {url}
        </div>
      </div>
    </>
  );
}

export default Home;
