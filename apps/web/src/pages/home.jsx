import '../App.css'
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
        <div>
            <img src="/ee.png" className="logo react" alt="ee logo" />
        </div>
        <h1>Welcome to eeCTF</h1>
        
        <div className='actions'>
            <h2 className='action-title'>
                Actions
            </h2>
            <div className="action-card">
                <Link to="/about">About</Link>
                <Link to="/app">App</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/verify">Verify Account</Link>
                <Link to="/leaderboard">Leaderboard</Link>
                <Link to="/whoami">Whoami</Link>
            </div>
        </div>
        </>
    )
}

export default Home
