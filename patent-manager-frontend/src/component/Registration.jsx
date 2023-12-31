import React, {useState} from 'react';

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBRadio,
  // MDBSelect
}
from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function App() {

  const [facultyName, setFaculty] = useState('');
  var username=localStorage.getItem('user');
  const [titleOfIPR, setTitle] = useState('');
  const [dateOfFilingIPR, setDOF] = useState('');
  const [dateOfIssue, setDOI] = useState('');
  const [dept, setDepartment] = useState('');
  const [currentStatus, setStatus] = useState('');
  const [patent, setPatent] = useState('');
  const [applicationNumber, setApplicationno] = useState('');
  const [patentNumber, setPatentno] = useState('');
  const [countryForIPProtection, setCountry] = useState('');

  const navigate = useNavigate();

  const handleRegistration = async () => {

  if (!facultyName.trim() || !titleOfIPR.trim()|| !dept.trim()|| !currentStatus.trim()|| !patent.trim()|| !applicationNumber.trim()|| !patentNumber.trim()|| !countryForIPProtection.trim()) {
    alert('Please fill in all fields');
    return;
  }

  const response = await fetch('http://localhost:5001/api/patent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, facultyName, titleOfIPR, dateOfFilingIPR, dateOfIssue, dept, currentStatus, patent, applicationNumber, patentNumber, countryForIPProtection }),
  });

  if(response.ok){
    console.log("Patent created successfully... Congratulations")
    alert("Patent Created Succesfully");
    navigate('/');
  }else{
    console.log("Something went wrong.. could not be able to create  Patent ")
  }



};

  

  return (
    <MDBContainer fluid className='bg-dark'>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol>

          <MDBCard className='my-4'>

            <MDBRow className='g-0'>

              <MDBCol md='6' className="d-none d-md-block">
                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp' alt="Sample photo" className="rounded-start" fluid/>
              </MDBCol>

              <MDBCol md='6'>

                <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
                  <h3 className="mb-5 text-uppercase fw-bold">Registration form</h3>

                  <MDBInput wrapperClass='mb-4' label='Faculty Name' size='lg' id='form6' type='text' onChange={(e)=>setFaculty(e.target.value)}/>
                  <MDBInput wrapperClass='mb-4' label='Title of IPR' size='lg' id='form3' type='text' onChange={(e)=>setTitle(e.target.value)}/>
                  <MDBInput wrapperClass='mb-4' label='Date of filing the IPR' size='lg' id='form6' type='date' onChange={(e)=>setDOF(e.target.value)}/>
                  
                  <MDBInput wrapperClass='mb-4' label='Date of issue/Grant of IPR' size='lg' id='form6' type='date' onChange={(e)=>setDOI(e.target.value)}/>

                  <div className='d-md-flex ustify-content-start align-items-center mb-4'>
                    <h6 class=" mb-0 me-4">Department: </h6>
                    <MDBRadio name='deptRadio' id='inlineRadio1' value='option1' label='Comp' inline onChange={() => setDepartment('Comp')}/>
                    <MDBRadio name='deptRadio' id='inlineRadio2' value='option2' label='IT' inline onChange={() => setDepartment('IT')}/>
                    <MDBRadio name='deptRadio' id='inlineRadio3' value='option3' label='Mech' inline onChange={() => setDepartment('Mech')}/>
                    <MDBRadio name='deptRadio' id='inlineRadio3' value='option3' label='Civil' inline onChange={() => setDepartment('Civil')}/>
                    <MDBRadio name='deptRadio' id='inlineRadio3' value='option3' label='E & TC' inline onChange={() => setDepartment('E & TC')}/>
                    <MDBRadio name='deptRadio' id='inlineRadio3' value='option3' label='Electronics' inline onChange={() => setDepartment('Electronics')}/>
                  </div>
                  <div className='d-md-flex ustify-content-start align-items-center mb-4'>
                    <h6 class=" mb-0 me-4">Current Status: </h6>
                    <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='In Progress' inline onChange={() => setStatus('In Progress')}/>
                    <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Completed' inline onChange={() => setStatus('Completed')}/>
                    <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='Not Started' inline onChange={() => setStatus('Not Started')}/>
                  </div>
                  <MDBInput wrapperClass='mb-4' label='Patent Description' size='lg' id='form3' type='text' onChange={(e)=>setPatent(e.target.value)}/>
                 
                  <MDBInput wrapperClass='mb-4' label='Application Number' size='lg' id='form3' type='text' onChange={(e)=>setApplicationno(e.target.value)}/>
                  <MDBInput wrapperClass='mb-4' label='Patent number for issued IPR' size='lg' id='form4' type='text' onChange={(e)=>setPatentno(e.target.value)}/>
                  <MDBInput wrapperClass='mb-4' label='Coutry of IP protection in sought' size='lg' id='form5' type='text' onChange={(e)=>setCountry(e.target.value)}/>
                  

                  <div className="d-flex justify-content-end pt-3">
                    <MDBBtn color='light' size='lg'>Reset all</MDBBtn>
                    <MDBBtn className='ms-2' color='warning' size='lg' onClick={handleRegistration}>Submit form</MDBBtn>
                  </div>

                </MDBCardBody>

              </MDBCol>
            </MDBRow>

          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default App;