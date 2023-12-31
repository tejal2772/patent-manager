import React, {useState} from 'react'
import { FaHeart } from "react-icons/fa";
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
import { Link, useNavigate } from 'react-router-dom';


const SignIn = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleLogin = async () => {

    if (!username.trim() || !password.trim()) {
      alert('Please fill in all fields');
      return;
    }

    const response = await fetch('http://localhost:5001/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    console.log("got response from api")
    if (response.ok) {
      console.log('Login successful');
      const { token } = await response.json();
      localStorage.setItem('token', token); 
      localStorage.setItem('user', username); 
      navigate('/');
    } else {
    
      alert("Invalid Credentials");
      console.error('Error logging in');
    }
  };

  return (
    <MDBContainer fluid>

    <MDBCard className='text-black m-5' style={{borderRadius: '50px'}}>
      <MDBCardBody>
        <MDBRow>
          <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign In</p>

           

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="envelope me-3" size='lg'/>
              <MDBInput label='Your Email' id='form2' type='text' onChange={(e)=>setUsername(e.target.value)}/>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="lock me-3" size='lg'/>
              <MDBInput label='Password' id='form3' type='password' onChange={(e)=>setPassword(e.target.value)}/>
            </div>

          

            <MDBBtn className='mb-4' size='lg' onClick={handleLogin}>Sign In</MDBBtn>

            <p>Don't Have Account? <Link to="/signup">SignUp</Link></p>

          </MDBCol>
        

          <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
          </MDBCol>

        </MDBRow>
      </MDBCardBody>
    </MDBCard>
   
  </MDBContainer>

  )
}

export default SignIn
