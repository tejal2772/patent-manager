import React from 'react';
import Card from 'react-bootstrap/Card';
import NavBar from './NavBar';
// function Trademark() {
    const Trademark = () => {
        const cardHeaderStyle = {
          backgroundColor: '#3498db', // Change to the desired background color
          color: '#ffffff', // Change to the desired text color
          padding: '4px', // Optional: Adjust padding for better aesthetics
          fontWeight: 'bold' // Optional: Adjust font weight
        };
  return (
    <>
        <NavBar/>
        <Card>
            <div style={cardHeaderStyle}>
          <Card.Header>What is a Trademark?</Card.Header></div>
          <Card.Body>
            <Card.Text>
            A trademark is a word, phrase, symbol or design, or a combination thereof, that identifies and distinguishes the source of the goods of one party from those of others.  Trademarks, unlike patents, can be renewed forever as long as they are being used in business.
            </Card.Text>
          </Card.Body>
        </Card>
        <br/><br/>
        <Card>
        <div style={cardHeaderStyle}>
          <Card.Header>Types of Trademarks</Card.Header></div>
          <Card.Body>
            <Card.Title>Registered Trademarks:</Card.Title>
            <Card.Text>
            Registered Trademarks refer to trademarks that have been registered by the United States Patent and Trademark Office (USPTO).  Only registered trademarks are permitted to use the r symbol.
            </Card.Text>
            <Card.Title>State Trademarks:</Card.Title>
            <Card.Text>
            State Trademarks as the name suggests, are trademarks that have been registered by a state, not the USPTO.  These trademarks are only valid in the state where they are registered.  State trademarks use the TM symbol. The Secretary of State is the entity in charge of trademarks for South Carolina.
            </Card.Text>
            <Card.Title>Common Law Trademarks:</Card.Title>
            <Card.Text>
            Common Law Trademarks are trademarks that have not been registered by the USPTO, nor have they been registered in any state.  It is not necessary to register a trademark.  You can establish legal rights simply by using the trademark in commerce.  Common law trademarks use the TM symbol.  State courts have jurisdiction for these trademarks.
            </Card.Text>
            <Card.Title>Trade Secrets:</Card.Title>
            <Card.Text>
            Trade Secrets are information that companies keep secret to give them an advantage over their competitors. The formula for Coca-Cola is the most famous trade secret.  Trade secrets are protected by state laws, not trademarks or copyrights.
            </Card.Text>
          </Card.Body>
        </Card>
        <br/><br/>
        
        <Card>
        <div style={cardHeaderStyle}>
          <Card.Header>Trade Marks Searching</Card.Header></div>
          <Card.Body>
            <Card.Title>Trademark Searching</Card.Title>
            <Card.Text>
            The United States Patent and Trademark Office (USPTO) has made trademark resources available over the internet. The USPTO trademark database is called TESS (Trademark Electronic Search System). 
            </Card.Text>
            <Card.Title>Resources available at the USPTO website:</Card.Title>
            <Card.Text>
                
            <li>Trademark Electronic Search System (TESS)</li>
            <li> Trademark Official Gazette (TMOG)</li>
            <li>Manuals, Guides, Official Gazette</li>
            </Card.Text>
          </Card.Body>
        </Card>

        
    </>
  );
}

export default Trademark;