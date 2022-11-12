import React from 'react';
import '../styles/checkout.css';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Container, Row, Col, FormGroup } from 'reactstrap';

import { useSelector } from 'react-redux';

const Checkout = () => {

    const totalQty = useSelector(state => state.cart.totalQuantity);
    const totalAmount = useSelector(state => state.cart.totalAmount);

    return (
        <>
        <Helmet title='Checkout'>
            <CommonSection title='Checkout'></CommonSection>

            <section>
                <Container>
                    <Row>
                        <Col lg='8'>
                            <h6 className='mb-4 fw-bold'>Billing Information</h6>
                            <form className='billing__form' action="">
                                <FormGroup className='form__group'>
                                    <input type="text" name='name' placeholder='Enter your name' />
                                </FormGroup>

                                <FormGroup className='form__group'>
                                    <input type="email" name='email' placeholder='Enter your email' />
                                </FormGroup>

                                <FormGroup className='form__group'>
                                    <input type="number" name='number' placeholder='Enter your number' />
                                </FormGroup>

                                <FormGroup className='form__group'>
                                    <input type="text" name='street' placeholder='Street address' />
                                </FormGroup>

                                <FormGroup className='form__group'>
                                    <input type="text" name='city' placeholder='City' />
                                </FormGroup>

                                <FormGroup className='form__group'>
                                    <input type="text" name='code' placeholder='Postal code' />
                                </FormGroup>

                                <FormGroup className='form__group'>
                                    <input type="text" name='country' placeholder='Country' />
                                </FormGroup>
                            </form>
                        </Col>

                        <Col lg='4'>
                            <div className="checkout__cart">
                                <h6>Total Qty: <span>{totalQty} items</span></h6>
                                <h6>Subtotal: <span>${totalAmount}</span></h6>
                                <h6>
                                    <span>Shipping: <br />free shipping</span> <span>$0</span>
                                </h6>
                                <h4>Total Cost: <span>${totalAmount}</span></h4>
                                <button className="buy__btn auth__btn w-100">
                                Place an order
                                </button>
                            </div>
                            
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
            
        </>
    );
};

export default Checkout;