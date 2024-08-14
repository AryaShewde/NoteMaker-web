import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../css/signup.css"

const SignUp = (props) => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
    let history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = credentials;
        const response = await fetch(`https://in-be-dp.vercel.app/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            localStorage.setItem('token', json.authtoken);
            history("/login");
            props.showalert("Your account has been created Successfully", "success");
        }
        else {
            props.showalert("Invalied credentials", "danger");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className='mt-3 p-5 p-2 mb-2 rounded signupbody'>
            <h2>Create an NoteMaker Account</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control signupback" onChange={onChange} id="name" name="name" aria-describedby="emailHelp"  required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control signupback" onChange={onChange} id="email" name="email" aria-describedby="emailHelp"  required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control signupback" onChange={onChange} name="password" id="password" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control signupback" onChange={onChange} name="cpassword" id="cpassword" required />
                </div>
                <button type="submit" className=" btn btn-primary">Login</button>
                <Link className="btn btn-secondary btn-sm my-1" to="/login" role="button">back</Link>
            </form>
        </div>
    )
}

export default SignUp
