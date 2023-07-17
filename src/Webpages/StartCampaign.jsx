import React from 'react'
import { useState,useEffect } from 'react';
import Navbar from '../components/Navbar';
import Web3 from 'web3'
import ABI from "../components/ABI.json"

const contractAddress = "0x05eDD52adE292eA0A34EBa01c068D81C8EbC7BCB";


function StartCampaign() {
    const [web3, setWeb3] = useState(null);
    const [accounts, setAccounts] = useState([]);
    const [contract, setContract] = useState(null);
    const [isTransactionSuccess, setIsTransactionSuccess] = useState(false);
    const [isLoading,setIsLoading] = useState(false);
    

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






  const [form,setForm] = useState({
    name:'',
    title:'',
    category:'',
    walletID:'',
    description:'',
    target:'',
    deadline:'',
    image:''

  })


  const handleFormFieldChange = (fieldName,e) =>{
    setForm({...form,[fieldName]: e.target.value})

  }


  const handleFormSubmit = async(event) => {
    event.preventDefault();
    

    try{
      setIsLoading(true);

      const targetUint256 = web3.utils.toWei(form.target.toString(), 'ether'); // Convert target to Wei
      const deadlineUnix = new Date(form.deadline).getTime() / 1000; // Convert deadline to Unix timestamp

      await contract.methods
      .createCampaign(form.walletID,form.title,form.category,form.description,targetUint256,deadlineUnix,form.image)
      .send({ from: accounts[0]});
       
      setForm({
        name: '',
        title: '',
        category: '',
        walletID: '',
        description: '',
        target: '',
        deadline: '',
        image: '',
      });
      

      setIsLoading(false);
      console.log("Campaign Added Successfully ")
      setIsTransactionSuccess(true);

    }catch(error){
      console.error('Error Submitting form:',error);
      setIsLoading(false);
    }

    
  }










  const [showModal, setShowModal] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };


  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

 

  return (
    <>
    <Navbar/>
    <div className='CampaignForm'>
      <h1 style={{paddingTop:"20px"}}>Create a Campaign</h1>
      <div className='topsec'>
      <div className='topnotch'>
      <img src='./rocket.svg' alt='Rocket' className='rocket-img' />
      Be a Visionary Pioneer and Lead The Way
      </div>
      </div>
      <form onSubmit={handleFormSubmit} >
        <div className='sidebyside'>
        <div className='formflex' style={{marginLeft:"45px"}}>
        <label htmlFor="name"  style={{transform:"translate(35%,0%)"}}>Your Name:</label>
        <input type="text" placeholder='Enter Your Name' onChange={(e)=> handleFormFieldChange('name',e)} value={form.name} style={{transform:"translate(11%,0%)"}} id="name" name="name" required />
        </div>

        <div className='formflex'>
        <label htmlFor="title" style={{marginLeft:"78px"}}>Campaign Title:</label>
        <input type="text" placeholder='Enter Title' onChange={(e)=> handleFormFieldChange('title',e)} value={form.title} id="title" name="title" required />
        </div>
        </div>

        <div className='sidebyside' style={{marginTop:"30px"}}>
        <div className='formflex'>
        <label htmlFor="wallet">MetaMask Wallet ID:</label>
        <input type="text" placeholder='Your Wallet ID' onChange={(e) => handleFormFieldChange('walletID', e)} id="wallet" name="wallet" required />
        </div>

        <div className='formflex'>
        <label htmlFor="category">Campaign Category:</label>
        <input type="text" placeholder='Enter Category' onChange={(e)=> handleFormFieldChange('category',e)} value={form.category} id="category" name="category" required />
        </div>
        </div>


        <div className='formflex'  style={{marginTop:"30px"}}>
        <label htmlFor="description">Description:</label>
        <textarea id="description" placeholder='Enter a description' onChange={(e)=> handleFormFieldChange('description',e)} value={form.description} name="description" required></textarea>
        </div>

        <div className='middlestuff'>
          <img src='./money-bag.svg' alt='MoneyBag' className='moneybag-img'/>
          <div style={{marginTop:"-420px"}}>The Total Amount You Raise Will Be Fully Allocated To Your Cause</div>
          </div>
  
        <div className='sidebyside'  style={{marginTop:"30px",marginLeft:"89px"}}>
        <div className='formflex'>
        <label htmlFor="goal">Funding Goal:</label>
        <input required  placeholder="2.10ETH" onChange={(e)=> handleFormFieldChange('target',e)} value={form.target} type="number" id="goal" name="goal" />
        </div>

        <div className='formflex'>
        <label htmlFor="duration">End Date:</label>
        <input type="date" placeholder='Enter Deadline' onChange={(e)=> handleFormFieldChange('deadline',e)} value={form.deadline} id="duration" name="duration" required/>
        </div>
        </div>

        <div className='formflex'  style={{marginTop:"30px"}}>
        <label htmlFor="image">Insert Campaign Image:</label>
        <input type="text" placeholder="Place the Image URL of your campaign" onChange={(e)=> handleFormFieldChange('image',e)} value={form.image} required/>
        </div>

        <div style={{marginTop:"30px",color:"black"}}>Please review the terms and conditions before proceeding:
          <button className='button' type="button" style={{marginLeft:"10px",fontSize:"15px"}} onClick={handleOpenModal}>View</button>
        </div>


        <div className='formflex'>
        <input type="checkbox" style={{marginTop:"30px",transform:"scale(1.8)"}} id="terms" name="terms" />
        <label htmlFor="terms" style={{marginTop:"30px"}}>I Acknowledge and Accept the Terms and Conditions in their entirety.</label>
        </div>

        <button className='button' type='submit' disabled={isLoading} style={{marginLeft:"500px",fontSize:"20px",marginTop:"20px"}} onClick={openPopup}>Submit Application</button>

        
      </form>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" type='button' onClick={handleCloseModal}>
              &times;
            </button>
            <h2 className="modal-title">CryptoPursuit: Terms and Conditions</h2>
            <div className="modal-body">
              <ul>
              <li><strong>Project Eligibility:</strong> Only individuals or organizations meeting the specified criteria and guidelines are eligible to create a crowdfunding project on our platform. We reserve the right to review and approve or reject project submissions at our discretion.</li>  

              <li><strong>Funding Model:</strong> By contributing to a project on our platform, you acknowledge that crowdfunding is a donation-based model. You understand that your contribution does not entitle you to any ownership, equity, or financial returns from the project creator.</li>  

              <li><strong>Project Creator Responsibilities:</strong> Project creators are responsible for fulfilling their project obligations, including delivering rewards or benefits to contributors within the stated timeframe. We do not guarantee the fulfillment of project commitments and are not liable for any issues arising between project creators and contributors.</li>

              <li><strong>Refunds and Disputes:</strong> Contributors understand that their contributions are non-refundable, except as required by applicable laws or as stated by the project creator. Any disputes or conflicts arising between project creators and contributors should be resolved directly between the parties involved.</li>
            </ul>
            
            </div>
          </div>
        </div>
      )}
      {showModal && <div className="modal-overlay-backdrop" />}

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Congratulations!</h2>
            <p>You have successfully submitted your application.</p>
            <p>Our team will thoroughly review your application and we will strive to get back to you as soon as possible with our evaluation.</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}

      {showPopup && !isTransactionSuccess && (
              <div className="loading-modal">
              <div className="loading-content">
                <div className="loading-icon"></div>
                <h3>Transaction in Progress</h3>
                <p>Please wait while the transaction is being processed...</p>
              </div>
            </div>
            )}
    </div>



    
    
    </>
  )
}

export default StartCampaign