
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Modal, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import SignIn from './SignIn';

const PatentList = () => {
  const [patents, setPatents] = useState([]);
  const [selectedPatent, setSelectedPatent] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  var username = localStorage.getItem('user');

  useEffect(() => {
    // Fetch patents from your API endpoint
    fetch('http://localhost:5001/api/patents')
      .then((response) => response.json())
      .then((data) => setPatents(data))
      .catch((error) => console.error('Error fetching patents:', error));
  }, []);


  const handleDeletePatent = async (patentNumber) => {
    try {
      const response = await fetch(`http://localhost:5001/api/patents/${patentNumber}/${username}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        console.log('Patent deleted successfully!');
        // Refresh the list of patents after deletion
        fetch('/api/patents')
          .then((response) => response.json())
          .then((data) => setPatents(data))
          .catch((error) => console.error('Error fetching patents:', error));
        console.log("deleted patent");
        navigate('/');
      } else {
        alert("You cannot delete patents filed by other users!!")
        console.error('Error deleting patent:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting patent:', error);
    }
  };

  const handleCardClick = (patent) => {
    setSelectedPatent(patent);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  if (!localStorage.getItem('token')) {
    console.log("Used is not logged in.... please log in");
    navigate('/login', { replace: true });
    return <SignIn />;
  } else {
    console.log("Used is logged in.... please proceed");
  }

  return (
    <div>
      <Container>
        <Row>
          <h2>Available Patents</h2>
          <ul>
            {patents.map((patent) => {
              return (
                <Col md={8} key={patent._id}>
                  <Card className="shadow" onClick={() => handleCardClick(patent)}>
                    <li>
                      <Card.Body>
                        <Card.Title className="card-title">
                          {patent.titleOfIPR}
                        </Card.Title>
                        <Card.Text className="card-text">Faculty: {patent.facultyName}</Card.Text>
                        <Card.Text className="card-text">Date of Filing: {new Date(patent.dateOfFilingIPR).toLocaleDateString()}</Card.Text>
                        <Card.Text className="card-text">Status: {patent.currentStatus}</Card.Text>
                      </Card.Body>
                    </li>
                  </Card>
                </Col>
              );
            })}
          </ul>
        </Row>
      </Container>

      {/* Popup Modal */}
      <Modal show={showPopup} onHide={handleClosePopup} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Patent Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Render patent details here */}
          {selectedPatent && (
            <>
              <h3>{selectedPatent.titleOfIPR}</h3>
              <p>Faculty: {selectedPatent.facultyName}</p>
              <p>Department: {selectedPatent.dept}</p>
              <p>Patent Number: {selectedPatent.patentNumber}</p>
              <p>Application Number: {selectedPatent.applicationNumber}</p>
              <p>Country for IP Protection: {selectedPatent.countryForIPProtection}</p>
              <p>Date of Filing: {new Date(selectedPatent.dateOfFilingIPR).toLocaleDateString()}</p>
              <p>Date of Issue: {new Date(selectedPatent.dateOfIssue).toLocaleDateString()}</p>
              <p>Current Status: {selectedPatent.currentStatus}</p>
              <p>Patent: {selectedPatent.patent}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>

          <Button variant="danger" onClick={() => handleDeletePatent(selectedPatent.patentNumber)}>Delete</Button>
          <Button variant="secondary" onClick={handleClosePopup}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default PatentList;             