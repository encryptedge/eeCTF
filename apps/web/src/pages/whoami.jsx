import '../App.css'
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function WhoAmI() {
    const [userWhoami, setUserWhoami] = useState(null);
    const [teamWhoami, setTeamWhoami] = useState(null);
    const [teamStats, setTeamStats] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if(!token) return window.location.href = '/login';

        axios.get(import.meta.env.VITE_API_URL + "/user/whoami", {
            headers: {
                "Authorization": "Bearer " + token,
            }
        }).then(res => {
            if(res.data.message === 'Invalid token') return window.location.href = '/login';
            setUserWhoami(res.data);
        })

        axios.get(import.meta.env.VITE_API_URL + "/team/whoami", {
            headers: {
                "Authorization": "Bearer " + token,
            }
        }).then(res => {
            if(res.data.message === 'Invalid token') return window.location.href = '/login';
            setTeamWhoami(res.data);
        })

        axios.get(import.meta.env.VITE_API_URL + "/stats/team", {
            headers: {
                "Authorization": "Bearer " + token,
            }
        }).then(res => {
            if(res.data.message === 'Invalid token') return window.location.href = '/login';
            setTeamStats(res.data);
        })
    }, [])

    return (
        <>
            <div>
                <img src="/ee.png" className="logo react" alt="ee logo" />
            </div>
            <h1>WhoAmI?</h1>
            <div className="user-wrapper">
                <h2>$User</h2>
                ID: <span className="user-id">{userWhoami?.id}</span><br />
                Name: <span className="user-name">{userWhoami?.first_name} {userWhoami?.last_name}</span><br />
            </div>
            <div className="team-wrapper">
                <h2>$Team</h2>
                ID: <span className="team-id">{teamWhoami?.id}</span><br />
                Name: <span className="team-name">{teamWhoami?.name}</span><br />
            </div>
            <div className="stats-wrapper">
                <h2>$Stats</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Machine</th>
                            <th>Challenge</th>
                            <th>Flag</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teamStats?.submissions?.map((stat, index) => (
                            <tr key={index}>
                                <td>{stat.machine_name}</td>
                                <td>{stat.challenge_name}</td>
                                <td>{stat.submited_flag}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default WhoAmI
