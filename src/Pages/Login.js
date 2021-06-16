import {React, useState, useRef} from 'react';
import {useHistory} from 'react-router-dom';

export default function Login() {
    const [details, setDetails] = useState({username:"", password:""});
    const in_user = useRef("");
    const in_pw = useRef("");
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        setDetails({username:in_user.current, password: in_pw.current});
        history.push('/', {details})
    } 

    return (
        <div className="main">
            Login
            <form onSubmit={handleSubmit}>
                <div className="form-inputs">
                    <label htmlFor='username'>Username</label>
                    <input type='text' placeholder="username..." name="username" id="username_input" ref={in_user}/>
                </div>
                <div className="form-inputs">
                    <label htmlFor='password'>Password</label>
                    <input type='password' placeholder="password..." name="password" id="password_input" ref={in_pw}/>
                </div>
                <input type="submit"/>
            </form>
        </div>
    )
}
