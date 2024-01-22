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
                if (response.data.message === 'GG!') {
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
                <h4>{tags} {point}</h4>
            </div>
            <div className='player-challenge-description'>
                <p>{desp}</p>
                <br />
                <div>
                    <h3>Submit Flag</h3>
                    <input 
                        type='text'
                        placeholder='eeCTF{}'
                        value={flagToSubmit}
                        onChange={(event) => setFlagToSubmit(event.target.value)}
                    />
                    <button onClick={handleSubmit} disabled={solved}>Submit</button>
                </div>
            </div>
        </>
    )
}

export default Challenge