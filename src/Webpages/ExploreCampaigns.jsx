import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import MyCard from '../components/Cards'
import '../App.css'
import SliderTimeline from "../components/SliderTimeline"
import expcamp from '../components/expcamp'
import ExpCamp from '../components/expcamp'


const cardData = [
  {
    id: 1,
    title: "Medical Research Fund",
    category:"Healthcare",
    metamaskwalletID:"0x7E5F4552091A69125d5DfCb7",
    raisedfund:"20ETH",
    targetfund:"100ETH",
    description: "Help advance medical research to find new treatments and cures.",
    image: "./cancer.jpg",
    items: [
      "Support groundbreaking research",
      "Make a difference in patients' lives",
      "Join the fight against diseases",
    ],
  },
  {
    id: 2,
    title: "Educational Scholarships",
    category:"Education",
    metamaskwalletID:"0x2B5AD5c4795c026514f8317c7",
    raisedfund:"10ETH",
    targetfund:"80ETH",
    description: "Provide educational opportunities for underprivileged students.",
    image: "./educational-scholarships.jpg",
    items: [
      "Empower students through education",
      "Break the cycle of poverty",
      "Invest in future generations",
    ],
  },
  {
    id: 3,
    title: "Environmental Conservation",
    category:"Environment",
    metamaskwalletID:"0x6813Eb9362372EEF6200f3b12",
    raisedfund:"20ETH",
    targetfund:"70ETH",
    description: "Protect and preserve the environment for a sustainable future.",
    image: "./environmental-conservation.jpg",
    items: [
      "Preserve natural habitats",
      "Combat climate change",
      "Promote eco-friendly practices",
    ],
  },
  {
    id: 4,
    title: "Disaster Relief Fund",
    category:"Environment",
    metamaskwalletID:"0x1F601Fd5FE6D335AFB8E6113",
    raisedfund:"30ETH",
    targetfund:"90ETH",
    description: "Support communities affected by natural disasters and provide relief efforts.",
    image: "./disaster-relief.jpg",
    items: [
      "Provide emergency supplies",
      "Rebuild affected areas",
      "Offer support to affected families",
    ],
  },
  {
    id: 5,
    title: "Animal Welfare Campaign",
    category:"Wildlife",
    metamaskwalletID:"0x56a64746e278638FFC4b4C62",
    raisedfund:"40ETH",
    targetfund:"120ETH",
    description: "Help protect and care for animals in need.",
    image: "./animal-welfare.png",
    items: [
      "Rescue and rehabilitate animals",
      "Promote responsible pet ownership",
      "Support animal shelters",
    ],
  },
  {
    id: 6,
    title: "Community Development Project",
    category:"Social Progress",
    metamaskwalletID:"0x0d1d4e623D10F9FBA5Db9583",
    raisedfund:"90ETH",
    targetfund:"160ETH",
    description: "Foster community growth and improve living conditions.",
    image: "./social-welfare.jpg",
    items: [
      "Enhance infrastructure",
      "Promote access to education",
      "Empower local businesses",
    ],
  },
  {
    id: 7,
    title: "Clean Water Initiative",
    category:"Environment",
    metamaskwalletID:"0xCe5144391B4aB80668965F",
    raisedfund:"20ETH",
    targetfund:"100ETH",
    description: "Provide clean and safe drinking water to communities in need.",
    image: "./clean-water.jpg",
    items: [
      "Install water purification systems",
      "Promote hygiene and sanitation practices",
      "Improve access to clean water sources",
    ],
  },
  {
    id: 8,
    title: "Empowering Youth",
    category:"Social Progress",
    metamaskwalletID:"0x9f1549fE489Df7b3bD2b4DF",
    raisedfund:"120ETH",
    targetfund:"190ETH",
    description: "Empower young individuals to reach their full potential and create a better future.",
    image: "./youth-empowerment.png",
    items: [
      "Offer mentorship and educational programs",
      "Equip youth with essential life skills",
      "Support entrepreneurship and innovation",
    ],
  }
];


function ExploreCampaigns() {
  const navigate=useNavigate();
   
  return (
    <>
    <Navbar/>
    <ExpCamp/>
    <h2 style={{color:"black",marginTop:"30px"}}>Our Featured Campaigns:</h2>
    <div className='card-row-container' onClick={()=>navigate('/donatetocampaign')}>
    {cardData.map((card) => (
        <MyCard
          key={card.id}
          title={card.title}
          category={card.category}
          description={card.description}
          image={card.image}
          items={card.items}
          metamaskwalletID={card.metamaskwalletID}
          targetfund={card.targetfund}
          raisedfund={card.raisedfund}
          
        />
        
      ))}
      
        
    </div>
    
    
    </>
  )
}

export default ExploreCampaigns