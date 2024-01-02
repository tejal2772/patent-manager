import React from 'react'
import {useNavigate} from 'react-router-dom';
import SignIn from './SignIn';
import PatentList from './PatentList';
import NavBar from './NavBar';
import Image from'./p2.jpeg';
import Image1 from './Image1';
import Footer from './Footer'

const Header1 = () => {
  const navigate = useNavigate();

  if (!localStorage.getItem('token')) {
    console.log("Used is not logged in.... please log in");
    navigate('/login', { replace: true });
    return <SignIn/>; 
  }else{
    console.log("Used is logged in.... please proceed");
  }

  return (
    <>
    <NavBar/>
    <img src={Image} alt="Fixed Image" style={{ width: '100%', height: 360 }} />
    
    <PatentList/>
    <Footer/>
  </>
  )
}

export default Header1
