// import React from 'react'
// import Card from 'react-bootstrap/Card';
// import NavBar from './NavBar';

// const PatentSearch = () => {
//   return (
//     <>
//     <NavBar/>
//     <Card style={{ width: '80rem' }}>
//       <Card.Body>
//         <Card.Title>About this guide</Card.Title>
//         <Card.Text>
//         This subject guide provides a starting point for research in Intellectual Property, but may not provide specific legal advice.For legal advice, please consider contacting an attorney who specializes in intellectual property.

// Patent and Trademark Resource Center (PTRC) Library carries out 7-Step U.S. Patent Search Strategy Guide for searching preparation and documentation.
//         </Card.Text>
//       </Card.Body>
//     </Card>
//     <br/>
//     <Card style={{ width: '80rem' }}>
//       <Card.Body>
//         <Card.Title>What is Patent?</Card.Title>
//         <Card.Text>
//         A patent is an intellectual property right granted by the Government of the United States of America to an inventor “to exclude others from making, using, offering for sale, or selling the invention throughout the United States or importing the invention into the United States” for a limited time in exchange for public disclosure of the invention when the patent is granted.

// The United States Patent and Trademark Office (USPTO) is the federal agency for granting U.S. patents and registering trademarks. 
//         </Card.Text>
//       </Card.Body>
//     </Card>
//     <br/>
//     <Card style={{ width: '80rem' }}>
//       <Card.Body>
//         <Card.Title>Types of Patents</Card.Title>
//         <Card.Text>
//         There are three types of patents: <br/>

// <b>Utility patents</b> may be granted to anyone who invents or discovers any new and useful process, machine, article of manufacture, or composition of matter, or any new and useful improvement thereof. Here is the process for obtaining a utility patent. <br/>

// <b>Design patents </b>may be granted to anyone who invents a new, original, and ornamental design for an article of manufacture. <br/>

// <b>Plant patents </b>may be granted to anyone who invents or discovers and asexually reproduces any distinct and new variety of plant.
//         </Card.Text>
//       </Card.Body>
//     </Card>


//     </>
//   )
// }

// export default PatentSearch
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import NavBar from './NavBar';
// function Trademark() {
    const PatentSearch = () => {
        const cardHeaderStyle = {
            backgroundColor: '#D3D3D3', // Change to the desired background color
            color: '#333333', // Change to the desired text color
            padding: '4px', // Optional: Adjust padding for better aesthetics
            fontWeight: 'bold' // Optional: Adjust font weight
          };
  return (
    <>
    <NavBar/>
    <Container>
        <Row>
            <Col lg={6}>
                <br/><br/>
            <Card>
            <div style={cardHeaderStyle}>
          <Card.Header>Application Process</Card.Header></div>
          <Card.Body>
            <Card.Title>Search for Patents</Card.Title>
            <Card.Text>
               
            <li>Accessing Published Applications</li><br/>
            <li>Authority Files</li><br/>
            <li>Filing Year by Application Serial Number</li><br/>
            <li>Understanding Patent Classifications</li><br/>
            <li>Withdrawn Patent Numbers</li><br/>
            <li>Learn about patent classification</li><br/>
            <li>Filing online</li><br/>
            <li>Checking application status</li><br/>
            <li>Responding to Office actions</li><br/>
            <li>Petitions</li><br/>
            <li>Patent Trial and Appeal Board</li><br/>
            
            </Card.Text>
          </Card.Body>
        </Card>
        <br/><br/>
        <iframe width="540" height="450" src="https://www.youtube.com/embed/B5dhYjGRBb0?si=h9TiwPVdtXdcQ-OZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Col>
            <Col lg={6}>
           
        <br/><br/>
        <Card>
            <div style={cardHeaderStyle}>
          <Card.Header>About this guide</Card.Header></div>
          <Card.Body>
            <Card.Text>
            This subject guide provides a starting point for research in Intellectual Property, but may not provide specific legal advice.For legal advice, please consider contacting an attorney who specializes in intellectual property. Patent and Trademark Resource Center (PTRC) Library carries out 7-Step U.S. Patent Search Strategy Guide for searching preparation and documentation.
            </Card.Text>
          </Card.Body>
        </Card>
        <br/><br/>
        <Card>
        <div style={cardHeaderStyle}>
          <Card.Header>What is Patent?</Card.Header></div>
          <Card.Body>
            
            <Card.Text>
                A patent is an intellectual property right granted by the Government of the United States of America to an inventor “to exclude others from making, using, offering for sale, or selling the invention throughout the United States or importing the invention into the United States” for a limited time in exchange for public disclosure of the invention when the patent is granted.

                The United States Patent and Trademark Office (USPTO) is the federal agency for granting U.S. patents and registering trademarks. 
            </Card.Text>
            {/* <!-- <Card.Title>Common Law Trademarks:</Card.Title> */}
          </Card.Body>
        </Card> 
        <br/><br/>
        
        <Card>
        <div style={cardHeaderStyle}>
          <Card.Header>Trade Marks Searching</Card.Header></div>
          <Card.Body>
            
            <Card.Text>
            The United States Patent and Trademark Office (USPTO) has made trademark resources available over the internet. The USPTO trademark database is called TESS (Trademark Electronic Search System). 
            </Card.Text>
          </Card.Body>
        </Card>
        <br/><br/>
        <Card>
            <div style={cardHeaderStyle}>
              <Card.Header>Types of Patents</Card.Header></div>
              <Card.Body>
                <Card.Text>There are three types of patents:</Card.Text>
                {/* <!-- <Card.Title>Registered Trademarks:</Card.Title> --> */}
                <Card.Text>
                <b>Utility patents</b> may be granted to anyone who invents or discovers any new and useful process, machine, article of manufacture, or composition of matter, or any new and useful improvement thereof. Here is the process for obtaining a utility patent. <br/>

<b>Design patents </b>may be granted to anyone who invents a new, original, and ornamental design for an article of manufacture. <br/>

<b>Plant patents </b>may be granted to anyone who invents or discovers and asexually reproduces any distinct and new variety of plant.
                </Card.Text>
              </Card.Body>
        </Card>
        <br/><br/>
        </Col>
        </Row>
    </Container>
    </>
  );
}

export default PatentSearch;