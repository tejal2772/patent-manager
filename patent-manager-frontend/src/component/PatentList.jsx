
// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const PatentList = () => {
//   const [patents, setPatents] = useState([]);
//   const navigate = useNavigate();
//   var username = localStorage.getItem('user');

//   useEffect(() => {
//     // Fetch patents from your API endpoint
//     fetch('http://localhost:5001/api/patents')
//       .then((response) => response.json())
//       .then((data) => setPatents(data))
//       .catch((error) => console.error('Error fetching patents:', error));
//   }, []);


//   const handleDeletePatent = async (patentNumber) => {
//     try {
//       const response = await fetch(`http://localhost:5001/api/patents/${patentNumber}/${username}`, {
//         method: 'DELETE'
//       });

//       if (response.ok) {
//         console.log('Patent deleted successfully!');
//         // Refresh the list of patents after deletion
//         fetch('/api/patents')
//           .then((response) => response.json())
//           .then((data) => setPatents(data)) 
//           .catch((error) => console.error('Error fetching patents:', error));
//         console.log("deleted patent");
//         navigate('/');
//       } else {
//         alert("You cannot delete patents filed by other users!!")
//         console.error('Error deleting patent:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error deleting patent:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Available Patents</h2>
//       <ul>
//         {patents.map((patent) => (
//           <li key={patent._id}>
//             <h3>{patent.titleOfIPR}</h3>
//             <p>Faculty: {patent.facultyName}</p>
//             {/* Add more details as needed */}
//             <button onClick={()=>handleDeletePatent(patent.patentNumber)}>Delete</button>
//             <hr />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PatentList;


import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
const PatentList = () => {
  const [patents, setPatents] = useState([]);
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

  return (
    <div>
        <Container>
            <Row>

           
      <h2>Available Patents</h2>
      <ul>
        {patents.map((patent) =>{ 
           return (
            <>
            <Col lg={6}>
                <Card>
          <li key={patent._id}>
            <h3>{patent.titleOfIPR}</h3>
            <p>Faculty: {patent.facultyName}</p>
            {/* Add more details as needed */}
            <button onClick={()=>handleDeletePatent(patent.patentNumber)}>Delete</button>
            <hr />
          </li>
          </Card>
          </Col>
          </>
        )
        }
        )
        }
      </ul>
      </Row>
        </Container>
    </div>
  );
};

export default PatentList;             