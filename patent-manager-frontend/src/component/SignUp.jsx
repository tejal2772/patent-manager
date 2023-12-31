import React from 'react'
import { FaHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';


const SignUP = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {

    if (!username.trim() || !password.trim()) {
      alert('Please fill in all fields');
      return;
    }

    const response = await fetch('http://localhost:5001/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      console.log('User registered successfully');
      const { token } = await response.json();
      localStorage.setItem('token', token); // Store token in localStorage
      localStorage.setItem('user', username); 
      navigate('/');
    } else {
      const a = await response.json();
      alert(a.message);
      console.error('Error registering user');
    }
  };

  return (
   <>
    <MDBContainer fluid>

    <MDBCard className='text-black m-5' style={{borderRadius: '50px'}}>
      <MDBCardBody>
        <MDBRow>
          <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign Up</p>

            {/* <div className="d-flex flex-row align-items-center mb-4 ">
              <MDBIcon fas icon="user me-3" size='lg'/>
              <MDBInput label='Your Name' id='form1' type='text' className='w-100'/>
            </div> */}

            <div className="d-flex flex-row align-items-center mb-4">
            <CgProfile />
              <MDBIcon fas icon="envelope me-3" size='lg'/>
              <MDBInput label='Your Email' id='form2' type='email' onChange={(e)=>setUsername(e.target.value)}/>
              
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="lock me-3" size='lg'/>
              <MDBInput label='Password' id='form3' type='password' onChange={(e)=>setPassword(e.target.value)}/>
            </div>

            {/* <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="key me-3" size='lg'/>
              <MDBInput label='Repeat your password' id='form4' type='password'/>
            </div> */}

            <MDBBtn className='mb-4' size='lg' onClick={handleSignUp}>Sign Up</MDBBtn>

          </MDBCol>
          {/* <MDBRow>
          <div lassName="d-flex flex-row align-items-center mb-4">
          <MDBBtn className='mb-4' size='lg'>Sign In</MDBBtn>
          </div>
          </MDBRow> */}
          <p className='text-end mt-2'>
           Already have account ? <Link to="/login">Sign In</Link>
        </p>

          <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
          </MDBCol>

        </MDBRow>
      </MDBCardBody>
    </MDBCard>

  </MDBContainer>
  </>
  
  )
}

export default SignUP
