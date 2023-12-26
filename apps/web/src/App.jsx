// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Player from './pages/app';
import Login from './pages/login';
import Register from './pages/register';
import Verify from './pages/verify';
import About from './pages/about';
import Leaderboard from './pages/leaderboard';
import WhoAmI from './pages/whoami';

const App = () => {
 return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/app" element={<Player />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/whoami" element={<WhoAmI />} />
    </Routes>
 );
};

export default App;