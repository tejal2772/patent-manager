import React from 'react'
import {useNavigate,Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SignIn from './SignIn';
import PatentList from './PatentList';
import NavBar from './NavBar';


const Header1 = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user'); 
    navigate('/login');
  };

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
