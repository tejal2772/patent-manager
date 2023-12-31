import React from 'react'
import Card from 'react-bootstrap/Card';
import NavBar from './NavBar';

const PatentSearch = () => {
  return (
    <>
    <NavBar/>
    <Card style={{ width: '80rem' }}>
      <Card.Body>
        <Card.Title>About this guide</Card.Title>
        <Card.Text>
        This subject guide provides a starting point for research in Intellectual Property, but may not provide specific legal advice.For legal advice, please consider contacting an attorney who specializes in intellectual property.

Patent and Trademark Resource Center (PTRC) Library carries out 7-Step U.S. Patent Search Strategy Guide for searching preparation and documentation.
        </Card.Text>
      </Card.Body>
    </Card>
    <br/>
    <Card style={{ width: '80rem' }}>
      <Card.Body>
        <Card.Title>What is Patent?</Card.Title>
        <Card.Text>
        A patent is an intellectual property right granted by the Government of the United States of America to an inventor “to exclude others from making, using, offering for sale, or selling the invention throughout the United States or importing the invention into the United States” for a limited time in exchange for public disclosure of the invention when the patent is granted.

The United States Patent and Trademark Office (USPTO) is the federal agency for granting U.S. patents and registering trademarks. 
        </Card.Text>
      </Card.Body>
    </Card>
    <br/>
    <Card style={{ width: '80rem' }}>
      <Card.Body>
        <Card.Title>Types of Patents</Card.Title>
        <Card.Text>
        There are three types of patents: <br/>

<b>Utility patents</b> may be granted to anyone who invents or discovers any new and useful process, machine, article of manufacture, or composition of matter, or any new and useful improvement thereof. Here is the process for obtaining a utility patent. <br/>

<b>Design patents </b>may be granted to anyone who invents a new, original, and ornamental design for an article of manufacture. <br/>

<b>Plant patents </b>may be granted to anyone who invents or discovers and asexually reproduces any distinct and new variety of plant.
        </Card.Text>
      </Card.Body>
    </Card>


    </>
  )
}

export default PatentSearch
