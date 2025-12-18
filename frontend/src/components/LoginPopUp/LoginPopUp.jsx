import React, { useState, useContext } from 'react'
import './LoginPopUp.css'
import { useContext as _useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const LoginPopUp = () => {
    const { setToken, url, token } = useContext(StoreContext);
    const [mode, setMode] = useState("Sign Up");
    const navigate = useNavigate();

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
        if (mode === "Sign In") {
            newUrl += "/api/user/login"
        } else {
            newUrl += "/api/user/register"
        }
        try {
            const response = await axios.post(newUrl, {
                ...data,
                email: (data.email || '').trim().toLowerCase()
            })
            if (response.data.success) {
                setToken(response.data.token)
                localStorage.setItem("token", response.data.token)
                toast.success(response.data.message || 'Success')
                navigate('/')
            } else {
                toast.error(response.data.message || 'Operation failed')
            }
        } catch (error) {
            console.error(error)
            toast.error(error?.response?.data?.message || 'Network error')
        }
    }

    return (
        <div className='container'>
            <div className='sub-container'>

                <form onSubmit={onLogin} className='login-form'>
                    <div className='head'>
                        <h1>{mode}</h1>
                    </div>

                    <div className='input-boxes'>
                        <div className="input-box">
                            <label>Email</label>
                            <input type="email" name='email' value={data.email} onChange={onChangehandler} placeholder='Type here' required />
                        </div>
                        {mode === "Sign Up"
                            ? <div className="input-box">
                                <label>Username</label>
                                <input type="text" name='username' value={data.username} onChange={onChangehandler}  placeholder='Type here'  required/>
                            </div>
                            : null
                        }
                        <div className="input-box">
                            <label>Password</label>
                            <input type="password" name='password' value={data.password} onChange={onChangehandler} placeholder='Type here'  required/>
                        </div>
                    </div>

                    {mode === "Sign Up"
                        ? <><button type='submit' className='signup-btn'>Create an account</button></>
                        : <><button type='submit' className='signup-btn'>Sign In</button></>
                    }

                    {mode === "Sign Up"
                        ? <>
                            <p>If you have an account? <span onClick={() => setMode("Sign In")}>Sign In</span></p>
                        </>
                        : <>
                            <p>If you don't have an account? <span onClick={() => setMode("Sign Up")}>Sign Up</span></p>
                        </>
                    }


                </form>

            </div>
        </div>
    )
}

export default LoginPopUp
