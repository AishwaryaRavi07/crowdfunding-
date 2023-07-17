import React,{useState} from 'react';


function ExpCamp() {
  const [features] = useState([
    {
        img: 'images/1.svg',
        title: 'Transparency and Security',
        text: ' All transactions and contributions are recorded on the blockchain, providing a transparent and immutable record of funds raised and disbursed.'
    },
    {
        img: 'images/2.svg',
        title: 'Smart Contracts and Automated Processes',
        text: 'Utilizes smart contracts to automate various processes, such as fund distribution, milestone tracking, and rewards management.'
    },
    {
        img: 'images/3.svg',
        title: 'Tokenized Contributions and Rewards:',
        text: 'Tokenized Contributions, allowing users to contribute funds in the form of cryptocurrencies'
    },
  ])
  return (
    <>
    
    <div className='contribute'>
        
        <img className="contribute-img" src='./free-crowd-funding.png' alt='crowdfund'></img>
        <div className='textstuff'>
        <h1 style={{color:"black",fontFamily:"poppins"}}>"Discover Impactful Campaigns & Lend Your Support To Make a Difference"</h1>
        <p>Let's make a difference together, You can Raise Money for your Initiatives or Make a Donation ,and our platform will let you do that effortlessly!</p>
        <div className='platform-features'>
          <div className='feature'>
            <p>Transparency and Security</p>
            <img src='./security-circle-icon.png'></img>
          </div>
          <div className='feature'>
            <p>Smart Contracts and<br/> Automated Processes</p>
            <img className="smart" src='./blockchain-smart-contracts.png'></img>
          </div>
          <div className='feature'>
            <p>Tokenized Contributions<br/> and Rewards</p>
            <img className="smart2" src='./ERC-20Token.svg'></img> 
          </div>
        </div>
        </div>

        
        
    </div>
    
    
    </>
  )
}

export default ExpCamp;