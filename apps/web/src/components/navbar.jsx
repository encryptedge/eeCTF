import { Link } from "react-router-dom";
import { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="actions">
          <div className="action-card">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/app">App</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/verify">Verify Account</Link>
            <Link to="/leaderboard">Leaderboard</Link>
            <Link to="/whoami">Whoami</Link>
          </div>
        </div>
      </div>
    )
  }
}