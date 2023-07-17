import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';

function SignIn() {
    const navigate= useNavigate();
  return (
    <>
    <Navbar/>
    <div className='wrapper'>
            <div className='form-boxlogin' style={{height:"460px"}}>
                <form action='#'>
                    <h2>Login</h2>
                
                    
                    <div className='input-box'>
                        <label htmlFor='username'>Full name</label>
                        <input type='text' placeholder='Enter Your Full name'></input>
                    </div>
                    
                    <div className='input-box'>
                        <label htmlFor='username' placeholder='Password'>Password</label>
                        <input type='text' placeholder='Enter your password'></input>
                    </div>
                    <div className="checkbox" style={{marginTop:"40px",display:"flex"}}>
                            <span className="details"></span>
                            <input type="checkbox" id="remember-me"/>
                            <label for="remember-me" style={{marginTop:"5px"}}>{'\u00A0'}Remember me</label>
                    </div>

                    
                        <button className="homebutton" type="submit"style={{width:"300px",marginTop:"20px"}}>Login</button>
                    
            
                    <div className="signup-link" style={{paddingTop:"45px"}}>
                        <strong> Not a member? </strong>
                        <a onClick={()=>navigate("/signup")}>SignUp Now</a>
                    </div>

                    
                    


                </form>
            </div>
        </div>

    </>
  )
}

export default SignIn