import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {FaSearch} from 'react-icons/fa'


function Navbar() {
  const navigate= useNavigate();
    const [button,setButton] = useState(true)
  const [activeLink,setActiveLink] = useState('home')
  const [click,setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }
  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
            <div className='leftcorner' style={{display:"flex",marginLeft:"-30px",marginTop:"-12px"}}>
            <img src='./savings-investment-svgrepo-com.svg' style={{transform:"scale(0.40)",color:"#036ed3"}}/>
            <div className='navbar-title' style={{fontWeight:"bold",fontSize:"30px"}}>CryptoPursuit</div>
            </div>
            <div class="search-container">
            <input placeholder='Search for Campaigns' className='Searchbar'/>
            <span class="search-icon">
                <i class="fa fa-search"><FaSearch/></i>
            </span>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <div className='navbar-items'>

                <li className="nav-item">
                    <Link to='/' className='nav-links' onClick={() => onUpdateActiveLink('home')}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to='/startcampaign' className='nav-links' onClick={() => onUpdateActiveLink('startcampaign')}>Start A Campaign</Link>
                </li>
              </div>
            </ul>
            <div className='allbtn'>
            <button className='mybtn' onClick={()=>navigate("/explorecampaign")} style={{width:"200px"}}>Explore Our Campaigns</button>
            <button className='mybtn' onClick={()=>navigate("/signup")} style={{width:"100px"}}>Register</button>

            </div>
        </div>
    </nav>

    </>
  )
}

export default Navbar