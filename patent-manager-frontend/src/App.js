import React, {useState} from 'react'
import {Routes,Route, Navigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './component/Registration'
import SignIn from './component/SignIn';
import'./App.css'
import Header1 from './component/Header1';
import Trademark from './component/Trademark';
import PatentSearch from './component/PatentSearch';
import SignUP from './component/SignUp';
import Aboutus from './component/Aboutus';
import Properties from './component/Properties';


const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const PrivateRoute = ({ element, ...rest }) => {
    return isLoggedIn ? element : <Navigate to="/login" />;
  };


  return (
    <>
    {/* <Login/> */}
    <Routes>
      <Route path="/signup" element={<SignUP />} />
      <Route path="/login" element={<SignIn setLoggedIn={setLoggedIn} />} />
      <Route path="/" element={<Header1 isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />} />
      <Route path ="/registration" element ={<Registration/>}/>
      <Route path ="/navbar" element ={<Header1/>}/>
      <Route path ="/trademark" element ={<Trademark/>}/>
      <Route path ="/patentsearch" element ={<PatentSearch/>}/>
      <Route path ="/aboutus" element ={<Aboutus/>}/>
      <Route path ="/properties" element ={<Properties/>}/>
    </Routes>

  
    </>
  )
}

export default App
