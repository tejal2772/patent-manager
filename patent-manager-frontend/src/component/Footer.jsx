import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'></h5>

            <p>
            The philosophy behind a patent manager often revolves around facilitating innovation, protecting intellectual property, and streamlining the complex processes associated with patents.
            </p>
          </MDBCol>

          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'></h5>

            <p>
            Efficiency is crucial in patent management. The philosophy involves streamlining the application, examination, and approval processes to reduce the time and resources required for obtaining a patent.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        
         <h4>Patents</h4>
       
      </div>
    </MDBFooter>
  );
}