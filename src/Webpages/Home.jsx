import React from 'react'
import Navbar from '../components/Navbar'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import About from '../components/About';


function Home() {
  const navigate=useNavigate();
  const [isLoading,setIsLoading]=useState(false);
  const [campaigns,setCampaigns]= useState([]);

  return (
    <>
    <Navbar/>
    <div className='banner'>
      {/* <img src='./free-crowd-funding.png'></img> */}
      <h1>"Fuel Dreams, Ignite Change."</h1>
      <p>Your genuine act of compassion has the power to uplift spirits, inspire hope, and ignite a chain reaction of positivity that can permeate the lives of many.<br/><br/>
       Together, we can make a difference and uplift the lives of many.<br/>
       Join CryptoPursuit in our mission to create a better future and unlock opportunities for those who need them the most.</p>
       <button className='homebutton' style={{marginLeft:"-110vh",fontSize:"20px"}} onClick={()=>(navigate("/signup"))}>Join Now</button>
       <div class="flex-container">
  <div class="flex-item">
    <h2>15K</h2>
    <p>Incredible Volunteer</p>
  </div>
  <div class="flex-item">
    <h2>100+</h2>
    <p>Successful Campaigns</p>
  </div>
  <div class="flex-item">
    <h2>600+</h2>
    <p>Monthly Donors</p>
  </div>
</div>
      <img src='./crowdfunding-platform.png'></img>
    </div>
    <About/>
    {/* <Footer/> */}
    </>
  )
}

export default Home