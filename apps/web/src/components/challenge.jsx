/* eslint-disable react/prop-types */
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';

// eslint-disable-next-line react/prop-types
const Challenge = ({ id, name, madeby, tags, desp, point, setMachines, solved }) => {
    const [flagToSubmit, setFlagToSubmit] = useState('')
    const handleSubmit = () => {
        let data = JSON.stringify({
            "flag": flagToSubmit,
        });
        
        let config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: import.meta.env.VITE_API_URL + '/challenge/submit/' + id,
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            data : data
        };
        
        axios.request(config)
            .then((response) => {
                if (response.data.data.message === 'GG!') {
                    if(!localStorage.getItem('token')) return window.location.href = '/login';
                    toast.success('Correct Flag!', {
                        position: "bottom-right",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        draggable: true,
                    });
                    axios.get(import.meta.env.VITE_API_URL + "/challenge/progress", {
                        headers: {
                            "Authorization": "Bearer " + localStorage.getItem('token'),
                        }
                    }).then(res => {
                        if(res.data.message === 'Invalid token') return window.location.href = '/login';
                        setMachines(res.data.message);
                    })
                } else {
                    toast.error('Wrong Flag!', {
                        position: "bottom-right",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        draggable: true,
                    });
                }
            })
            .catch(() => {
                toast.error('Wrong Flag!', {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    draggable: true,
                });
            });
    }

    return (
        <>
            <div className='player-challenge-name'>
                <h1>{name}</h1>
                <h3>{madeby}</h3>
                <h4 style={{marginBottom:"3em"}}>
                   <p>
                    {tags?.split(',').map((tag, index) => (
                        <span key={index} style={{backgroundColor:"green", fontSize:"1.5em", padding:"0.5em", borderRadius:"3px", marginRight:"0.5em"}}>
                            {tag}

                            </span>
                    ))}
                    </p> 
                    <br />
                <span style={{backgroundColor:"red", fontSize:"2em", padding:"0.5em", borderRadius:"3px", marginTop:"2em"}}>
                    {point}
                </span>
                </h4>
            </div>
            <div className='player-challenge-description'>
                <p style={{fontSize:"1.5em"}}>{desp}</p>
                <br />
                <div>
                    <h3 style={{fontSize:"1.4em"}}>Submit Flag</h3>
                    <input 
                        type='text'
                        placeholder='eeCTF{}'
                        value={flagToSubmit}
                        onChange={(event) => setFlagToSubmit(event.target.value)}
                        style={{width:"40%", height:"1.3em", fontSize:"1.5em"}}
                    />
                    <button onClick={handleSubmit} disabled={solved} style={{backgroundColor:"green", color:"white", marginLeft:"1em"}}>Submit</button>
                </div>
            </div>
        </>
    )
}

export default Challenge