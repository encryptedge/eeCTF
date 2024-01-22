/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import "../styles/navbar.styles.css";

export default function Navbar(props) {
  return (
    <div>
      <div className='actions'>
        <div className='action-card'>
          <div className='left'>
            <Link to='/about'>About</Link>
            <Link to='/news'>News</Link>
            <Link to='/whoami'>Whoami</Link>
          </div>
          <Link to='/'>
            <img src='/ee.png' className='logo react' alt='ee logo' />
          </Link>
          <div className='right'>
            <Link to='/app'>App</Link>
            <Link to='/leaderboard'>Leaderboard</Link>
          </div>
          {/* <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link> */}
          {/* <Link to='/verify'>Verify Account</Link> */}
        </div>

        <h1>{props.pageTitle}</h1>
      </div>
    </div>
  );
}
