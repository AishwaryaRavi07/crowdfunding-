import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';

function SignUp() {
    const navigate=useNavigate();
  return (
    <>
    <Navbar/>
        <div className='wrapper'>
            <div className='form-boxlogin' style={{height:"550px",width:"380px"}}>
                <form action='#'>
                    <h2>SignUp</h2>
                    <div className='input-box'>
                        <label htmlFor='username' style={{color:'black'}}>Full name</label>
                        <input type='text' name="Fullname"
                        placeholder='Enter your Name'></input>
                    </div>
                    <div className='input-box'>
                        <label htmlFor='email' style={{color:'black'}}>Email ID</label>
                        <input type='text' name="email"
                        placeholder='Enter your email'></input>
                    </div>
                    <div className='input-box'>
                        <label htmlFor='phonenumber' style={{color:'black'}}>Phone Number</label>
                        <input type='text' name="phonenumber"
                        placeholder='Enter your contact number'></input>
                    </div>
                    <div className='input-box'>
                        <label htmlFor='username' style={{color:'black'}}>Password</label>
                        <input type='text' name="password"
                        placeholder='Enter your password'></input>
                    </div>
                    
                    <div >
                            <button className='homebutton' type='submit' style={{marginTop:"60px",justifyContent:'center',width:"320px",marginLeft:"10px"}}>SignUp</button>
                        </div>
            
                    <div className="login-link" style={{marginTop:'20px',marginLeft:"10px"}}>
                        <strong> Already a member? </strong> 
                        <a href="/signin" onClick={()=>navigate("/signin")}>Login Now</a>
                        </div>

                </form>
            </div>
        </div>
    </>
  )
}

export default SignUp