import React from 'react'
import './LoginPopUp.css'

const LoginPopUp = () => {
    return (
        <div className='container'>
            <div className='sub-container'>

                <form className='login-form'>
                    <div className='head'>
                        <h1>Sign up</h1>
                        <i className='bx bx-x'></i>
                    </div>

                    <div className='input-boxes'>
                        <div className="input-box">
                            <label>Email</label>
                            <input type="email" placeholder='Type here'/>
                        </div>
                        <div className="input-box">
                            <label>Username</label>
                            <input type="text" placeholder='Type here'/>
                        </div>
                        <div className="input-box">
                            <label>Password</label>
                            <input type="password" placeholder='Type here'/>
                        </div>
                    </div>

                    <button className='signup-btn'>Create an account</button>

                    <p>If you have an account? <span>Sign In</span></p>
                </form>

            </div>
        </div>
    )
}

export default LoginPopUp
