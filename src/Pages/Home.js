import {React, useState} from 'react'

export default function Home() {

    const handleFind = () => {
        fetch("http://api.open-notify.org/iss-now.json", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: 'w'
            })
        })
            .then(res => {return res.json()})
            .then(data => console.log(data))
            .catch(error => console.log('error'))
    }

    return (
        <div className="main">
            <section className="sidebar">
                <h2>Where is the ISS now?</h2><button onClick={handleFind}>FIND ISS</button>
            </section>
            <section className="content"></section>
        </div>
    )
}
