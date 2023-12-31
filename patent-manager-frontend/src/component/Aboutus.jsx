import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from './NavBar';

const AboutUs = () => {
    const backgroundImageStyle = {
        backgroundImage: 'url("https://imgs.search.brave.com/-mbpERtM-4hey0PmwQ2LmEcJKnhJYagS2Pm6wSYNoxw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9s/aWdodC1idWxiLXdp/dGgtZHJhd2luZy1n/cmFwaF8xMjMyLTI3/NzUuanBnP3NpemU9/NjI2JmV4dD1qcGc")',
        backgroundSize: 'cover', // Adjust as needed
        backgroundRepeat: 'no-repeat', // Adjust as needed
        height: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold',
        fontSize: '60px',
        color: 'black',

    };

    return (
        <>
        <NavBar/>
            <div className="about-us-container" >
                <div style={backgroundImageStyle}>

                    About Us
                </div>
                <br /><br />
                <Container>
                    <Row>
                        <Col lg={6}>
                            <h4>Know About </h4>
                            <h1>Our Philosophy!</h1>
                            <hr />
                            <p>The philosophy behind a patent manager often revolves around facilitating innovation, protecting intellectual property, and streamlining the complex processes associated with patents. </p>
                            <p>The primary purpose of a patent manager is to safeguard intellectual property. It should help individuals and organizations navigate the legal landscape to secure patents for their inventions, thereby protecting their ideas from unauthorized use.</p>
                            <p>Efficiency is crucial in patent management. The philosophy involves streamlining the application, examination, and approval processes to reduce the time and resources required for obtaining a patent.</p>
                            <p>The philosophy of user-centric design involves creating a patent manager with a user-friendly interface. The system should be intuitive, easy to navigate, and provide a positive user experience for individuals at various levels of expertise.</p>
                        </Col>
                        <Col lg='6'>
                            <br /> <br /> <br /> <br />
                            <img src="https://imgs.search.brave.com/IEx1Tylm8mtd0iOP3rCzylhNbNhJHvVbIcJwuFefI1s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/b2x5bXB1cy1ldXJv/cGEuY29tL2NvbXBh/bnkvbWVkaWEvY29u/dGVudC9wYWdlcy9h/Ym91dC1vbHltcHVz/L2NvcnBvcmF0ZS1n/b3Zlcm5hbmNlX2lt/Z183NjguanBn" style={{ width: '600px', height: '400px' }}></img>
                        </Col>
                    </Row>
                </Container>
                <br /><br /><br />

                <Container>
                    <Row>
                        <Col md={6}>
                            <h4>Best Reason </h4>
                            <h1>Why Us!</h1>
                            <hr />
                            <h2>Our Vision</h2>
                            <br />
                            <li><b>Facilitating Innovation:</b></li>
                            <p>
                                Fostering and encouraging innovation by providing a streamlined platform that simplifies the patent application and management process.</p>
                            <li><b>Protecting Intellectual Property:</b></li>
                            <p>
                                Ensuring the secure protection of intellectual property by offering robust tools for the creation, submission, and management of patent applications.</p>
                            <li><b>Enhancing Collaboration:</b></li>
                            <p>
                                Promoting collaboration among inventors, businesses, and legal experts by providing features that facilitate communication, knowledge sharing, and collaborative efforts in the field of intellectual property.</p>


                        </Col>

                        <Col lg='6'>
                            <br /> <br /> <br /> <br /><br />
                            <h2>Our Mission</h2>
                            <br />
                            <li><b>Ethical Use of Patents:</b></li>
                            <p>Promote ethical practices in the use of patents, discouraging misuse, and ensuring that patents contribute positively to innovation and society.</p>
                            <li><b>Continuous Improvement:</b></li>

                            <p>Commit to continuous improvement based on user feedback, technological advancements, and changes in patent laws and regulations.</p>

                            <li><b>Societal Impact:</b></li>

                            <p>Recognize the broader societal impact of patents and intellectual property, ensuring that the system contributes to the advancement of technology and knowledge for the benefit of society.</p>
                        </Col>
                    </Row>
                </Container>
                <br /><br /><br />


                <Container>
                    <Row>
                        <Col lg={6}>

                            <h1>Our Work...</h1>
                            <hr />
                            <p>Teachers engaged in patent management play a crucial role in fostering innovation and contributing to the knowledge economy. Their dedication and expertise in identifying and submitting valuable patents significantly impact the quality and utility of the intellectual property landscape.</p> <p>These educators serve as catalysts for technological advancements, bringing forth novel ideas and inventive solutions that enrich various fields. Through their diligent work, teachers contribute not only to the academic community but also to the broader society by creating intellectual assets that can be harnessed for social and economic development.</p><p> Their commitment to excellence, coupled with a deep understanding of the patent process, ensures that the patents they add are not only legally sound but also possess practical applications and real-world relevance. In essence, teachers actively participating in patent management exemplify the intersection of education and innovation, leaving a lasting impact on the intellectual property landscape and inspiring the next generation of inventors and thought leaders.
                            </p>

                        </Col>
                        <Col lg='6'>
                            <br /> <br /> <br />
                            <img src="https://imgs.search.brave.com/Ku8GS3Wg6eBdIu-NeRk_AIM0ZmcI5_opKST8eF4pOx4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMz/MTg0MDYwOC9waG90/by9idXNpbmVzcy10/ZWFtLXdvcmtpbmct/b24tYS1sYXB0b3At/Y29tcHV0ZXIuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPS13/WVlMdXUzMzQ4ZklO/NGltaWkycXJxeGlQ/ekNBQ0duUkgteXgz/VWd3RXc9" style={{ width: '600px', height: '400px' }}></img>
                        </Col>

                    </Row>
                </Container>

            </div>
        </>
    );
};

export default AboutUs;