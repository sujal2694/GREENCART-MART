import React, { useState } from 'react'
import './LoginPopUp.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import toast from 'react-hot-toast'

const LoginPopUp = () => {
    const { setToken, url, token } = useContext(StoreContext);
    const [LoginPopUp, setLoginPopUp] = useState("Sign Up");

    const [data, setData] = useState({
        username: "",
        email: "",
        password: ""
    })

    const onChangehandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({...data, [name]:value}))
    }

    const onLogin = async (event) => {
        event.preventDefault();
        let newUrl = url
        if (LoginPopUp === "Sign In") {
            newUrl += "/api/user/login"
        } else {
            newUrl += "/api/user/register"
        }
        const response = await axios.post(newUrl, data)
        console.log(response);
        if (response.data.success) {
            setToken(response.data.token)
            localStorage.setItem("token", response.data.token)
        } else {
            toast.error(response.data.message)
        }
    }

    return (
        <div className='container'>
            <div className='sub-container'>

                <form onSubmit={onLogin} className='login-form'>
                    <div className='head'>
                        <h1>{LoginPopUp}</h1>
                    </div>

                    <div className='input-boxes'>
                        <div className="input-box">
                            <label>Email</label>
                            <input type="email" name='email' value={data.email} onChange={onChangehandler} placeholder='Type here' required />
                        </div>
                        {LoginPopUp === "Sign Up"
                            ? <div className="input-box">
                                <label>Username</label>
                                <input type="text" name='username' value={data.username} onChange={onChangehandler}  placeholder='Type here'  required/>
                            </div>
                            : ""
                        }
                        <div className="input-box">
                            <label>Password</label>
                            <input type="password" name='password' value={data.password} onChange={onChangehandler} placeholder='Type here'  required/>
                        </div>
                    </div>

                    {LoginPopUp === "Sign Up"
                        ? <><button type='submit' className='signup-btn'>Create an account</button></>
                        : <><button type='submit' className='signup-btn'>Sign In</button></>
                    }

                    {LoginPopUp === "Sign Up"
                        ? <>
                            <p>If you have an account? <span onClick={() => setLoginPopUp("Sign In")}>Sign In</span></p>
                        </>
                        : <>
                            <p>If you don't have an account? <span onClick={() => setLoginPopUp("Sign Up")}>Sign Up</span></p>
                        </>
                    }


                </form>

            </div>
        </div>
    )
}

export default LoginPopUp
