import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Webpages/Home';
import StartCampaign from './Webpages/StartCampaign';
import ExploreCampaigns from './Webpages/ExploreCampaigns';
import SignIn from './Webpages/SignIn';
import SignUp from './Webpages/SignUp';
import DonatetoCampaign from './Webpages/DonatetoCampaign';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/startcampaign' element={<StartCampaign/>}/>
      <Route path='/donatetocampaign' element={<DonatetoCampaign/>}/>
      <Route path='/explorecampaign' element={<ExploreCampaigns/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>


    </Routes>
      
    </>
  );
}

export default App;
