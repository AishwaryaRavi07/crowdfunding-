import React,{useState,useEffect} from 'react';
import Navbar from "../components/Navbar";
import Web3 from 'web3';
import ABI from "../components/ABI.json";


const contractAddress = "0x05eDD52adE292eA0A34EBa01c068D81C8EbC7BCB";

function DonatetoCampaign() {
    const [donationAmount, setDonationAmount] = useState();
    const [campaignID,setCampaignID]=useState();
    const [isLoading,setIsLoading] = useState(false);
    const [web3, setWeb3] = useState(null);
    const [accounts, setAccounts] = useState([]);
    const [contract, setContract] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [isTransactionSuccess, setIsTransactionSuccess] = useState(false);
    const [showCrossButton, setShowCrossButton] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

    useEffect(()=>{
        async function connectToWeb3(){
          try{
            if(window.ethereum){
              const web3= new Web3(window.ethereum);
              await window.ethereum.enable();
              setWeb3(web3)
  
              const accounts= await web3.eth.getAccounts();
              setAccounts(accounts)
  
              const contract= new web3.eth.Contract(ABI,contractAddress);
              setContract(contract);
            }
          }catch (error) {
            console.error('Error connecting to Web3 provider:', error);
          }
        }
        connectToWeb3();
      },[])

    const handleDonationAmountChange = (e) => {
        setDonationAmount(e.target.value);
      };

      const handleCampaignIDChange = (e) => {
        setCampaignID(e.target.value);
      };

      const handleDonationSubmit = async (event) => {
        event.preventDefault();

        try{
            setIsLoading(true);

            const CampaignID= parseInt(campaignID);
            

            const donationInWei = web3.utils.toWei(donationAmount.toString(), 'ether');

            await contract.methods.donateToCampaign(CampaignID).send({
                from: accounts[0],
                value: donationInWei,
              });

              
              console.log('Donation successful');
              // setShowPopup(true);
              setIsTransactionSuccess(true);
              setShowCrossButton(true); 

              setTimeout(() => {
                setShowPopup(false);
                setIsTransactionSuccess(false);
                setIsLoading(false);
              }, 2000);






        }catch(error){
            console.error('Error donating:', error);
            setIsLoading(false);
        }

        }




  return (
    <>
    <Navbar/>
    <div className='campaigndetails'>
    <div className='campaignimage'>
          <img src='./crowdfund speaker.jpg'></img>
    </div>
    <div className='completeblock'>
    <div className='sideblockdata'>
            <h2>9</h2>
            <p>Days Left</p>
    </div>
    <div className='sideblockdata'>
            <h2>1.13ETH</h2>
            <p>Amount Raised</p>
    </div>
    <div className='sideblockdata'>
            <h2>1</h2>
            <p>Total Backers</p>
    </div>
    </div>
    </div>
    <div className="campaignbottom" style={{display:"flex"}}>
        
    <div className='creatorstorydonators'>
    <div className='Creator'>
        <h2>Creator: 0x34034e1e97F6eb96a8Ea62962DAa7BDb910cAE90</h2>
        <p>10 campaigns</p>
    </div>
    <div className='Story'>
        <h2>Story:</h2>
        <p>Your Description</p>
    </div>
    <div className='Donators'>
        <h2>Donators</h2>
        <p>0x34034e1e97F6eb96</p>
    </div>
    </div>
    <form onSubmit={handleDonationSubmit} style={{marginLeft:"40px",width:"440px"}}>
    <div className='campaignbottomright'>
        <div className='FundSec'>
            <h2>Fund</h2>
            <h4>Send a Donation:</h4>
            <div className='donationsec'>
            <input type='number' value={campaignID} onChange={handleCampaignIDChange} required placeholder='Enter Campaign ID'/>
            <input style={{marginTop:"10px"}} 
            value={donationAmount}
            type="number" step="0.01" min="0" max="100"
            onChange={handleDonationAmountChange}
            required
            placeholder='Enter a Donation Amount in ETH:'/><br/>
            <button type="submit" style={{marginTop:"10px"}} onClick={openPopup} disabled={isLoading} className='button'>{isLoading ? 'Processing...' : 'Fund Campaign'}</button>
            
            </div>
        </div>

    
    </div>
    </form>
    {showPopup && !isTransactionSuccess && (
        <div className="loading-modal">
        <div className="loading-content">
          <div className="loading-icon"></div>
          <h3>Transaction in Progress</h3>
          <p>Please wait while the transaction is being processed...</p>
        </div>
      </div>
      )}

      {isTransactionSuccess && (
        <div className="popup-container">
          <div className="popup">
          {showCrossButton && (
            <span className="close-btn" onClick={() => setIsTransactionSuccess(false)}>
              &times;
            </span>
          )}
            <h3>Transaction Successful</h3>
            <p>Thank You For Donating!</p>
          </div>
        </div>
      )}
    </div>
    
    

    </>
    
  )
}
  
  


export default DonatetoCampaign