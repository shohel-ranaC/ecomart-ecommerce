import React from 'react';
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap';
import './Footer.css';
//import logo from '../../assets/images/eco-logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className='footer'>
            <Container>
                <Row>
                    <Col lg='4' md='6' className='mb-4'>
                        <div className='logo'>
                            {/* <img src={logo} alt="logo" /> */}
                            <div>
                                <h1 className='text-white'>ECO-MART</h1>
                            </div>
                        </div>
                        <p className="footer__text mt-4">
                           Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                           Molestias iusto reprehenderit tempore ratione, eveniet
                           dolor distinctio esse voluptate excepturi earum.
                         </p>
                    </Col>
                    <Col lg='3' md='3' className='mb-4'>
                        <div className="footer__quick-links">
                            <h4 className="quick__links-title">To Category</h4>
                            <ListGroup className='mb-3'>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Mobile Phones</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Modern Sofa</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Arm Chair</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Smart Watches</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='2' md='3' className='mb-4'>
                    <div className="footer__quick-links">
                            <h4 className="quick__links-title">Useful Links</h4>
                            <ListGroup className='mb-3'>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/shop'>Shop</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/cart'>Cart</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/login'>Login</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Privacy Policy</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='3' md='4'>
                    <div className="footer__quick-links">
                            <h4 className="quick__links-title">Contact Us</h4>
                            <ListGroup className='footer__contact mb-3'>
                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <span><i class='ri-map-pin-line'></i></span>
                                    <p>B-block Mohammadpur, Dhaka, Bangladesh</p>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <span><i class='ri-phone-line'></i></span>
                                    <p>+880 178 096 9001</p>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <span><i class='ri-mail-line'></i></span>
                                    <p>shohelrana.swe@gmail.com</p>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>

                    <Col>
                      <p className="footer__copyright">
                        Copyright {year} developed by Shohel Rana. All rights reserved.
                      </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;