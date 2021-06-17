import {React, useState} from 'react'

export default function Home() {

    const [mydata, setMydata] = useState({})
    const handleFind = () => {
        fetch("http://api.open-notify.org/iss-now.json")
            .then(res => {if (res.ok) {return res.json()}})
            .then(data => setMydata(data))
            .catch(error => console.log('error'))
    }

    return (
        <div className="main">
            <section className="sidebar">
                <h2>Where is the ISS now?</h2><button onClick={handleFind}>FIND ISS</button>
                <section className="data-container">
                    <div>
                    </div>
                    <ul>
                        {JSON.stringify(mydata.iss_position)}
                        {/* <li>Latitude: {mydata.iss_position.latitude}</li>
                        <li>Longitude: {mydata.iss_position.longitude}</li>
                        {console.log(mydata.iss_position.latitude)} */}
                    </ul>
                </section>
            </section>
            <section className="content"></section>
        </div>
    )
}
