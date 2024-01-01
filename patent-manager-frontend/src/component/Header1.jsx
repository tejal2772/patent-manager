import React from 'react'
import {useNavigate} from 'react-router-dom';
import SignIn from './SignIn';
import PatentList from './PatentList';
import NavBar from './NavBar';


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
    <PatentList/>
  </>
  )
}

export default Header1
