import React from 'react';
import '../styles/home.css';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroImg from '../assets/images/hero-img.png';
import products from '../assets/data/products';
import Helmet from '../components/Helmet/Helmet';

import Services from '../services/Services';
import ProductsList from '../components/UI/ProductsList';

import counterImg from '../assets/images/counter-timer-img.png';

import { useState, useEffect } from 'react';
import Clock from '../components/UI/Clock';

const Home = () => {

    const [trendingProducts, setTrendingProducts] = useState([]);
    const [bestSalesProducts, setBestSalesProducts] = useState([]);
    const [mobileProducts, setMobileProducts] = useState([]);
    const [wirelessProducts, setWirelessProducts] = useState([]);
    const [popularProducts, setPopularProducts] = useState([]);


    const year = new Date().getFullYear();

    useEffect(() => {
        const filteredTrendingProducts = products.filter(
            (item)=> item.category === 'chair'
            );

        const filteredSalesProducts = products.filter(
            (item)=> item.category === 'sofa'
             );

        const filteredMobileProducts = products.filter(
            (item)=> item.category === 'mobile'
              );
        
        const filteredWirelessProducts = products.filter(
             (item)=> item.category === 'wireless'
             );

        const filteredPopularProducts = products.filter(
             (item)=> item.category === 'watch'
             );     

        setTrendingProducts(filteredTrendingProducts);
        setBestSalesProducts(filteredSalesProducts);
        setMobileProducts(filteredMobileProducts);
        setWirelessProducts(filteredWirelessProducts);
        setPopularProducts(filteredPopularProducts);
       }, []);
    return (
        <div>
            <Helmet title={'Home'}>
                <section className='hero__section'>
                    <Container>
                        <Row>
                            <Col lg='6' md='6'>
                                <div className="hero__content">
                                    <p className='hero__subtitle'>Trending product in {year}</p>
                                    <h2>Make Your Interior More Minimalistic & Modern</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                      Officiis optio tempore illo recusandae harum deleniti
                                      provident fugiat architecto ipsum rem.
                                    </p>
                                    <motion.button whileTap={{scale: 1.2}} className="buy__btn"><Link to='/shop'>SHOP NOW</Link></motion.button>
                                </div>
                            </Col>
                            
                            <Col lg='6' md='6'>
                                <div className="hero__img">
                                    <img src={heroImg} alt="" />
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </section>
                 
                 <Services></Services>

                 <section className="trending__products">
                    <Container>
                        <Row>
                            <Col lg='12' className='text-center'>
                                <h2 className='section__title'>Trending Products</h2>
                            </Col>
                            <ProductsList data={trendingProducts}></ProductsList>
                        </Row>
                    </Container>
                 </section>

                 <section className="best__sales">
                    <Container>
                        <Row>
                            <Col lg='12' className='text-center'>
                                <h2 className='section__title'>Best Sales</h2>
                            </Col>
                            <ProductsList data={bestSalesProducts}></ProductsList>
                        </Row>
                    </Container>
                 </section>

                 <section className="timer__count">
                    <Container>
                        <Row>
                            <Col lg='6' md='12' className='count__down-col'>
                                <div className="clock__top-content">
                                    <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                                    <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
                                </div>

                                <Clock></Clock>

                                <motion.button whileTap={{scale: 1.2}} className="buy__btn store__btn">
                                    <Link to='/shop'>Visit Store</Link>
                                </motion.button>

                            </Col>
                            <Col lg='6' md='12' className='text-end counter__img'>
                                <img src={counterImg} alt="counter images" />
                            </Col>
                        </Row>
                    </Container>
                 </section>

                 <section className="new__arrivals">
                    <Container>
                        <Row>
                            <Col lg='12' className='text-center mb-5'>
                                <h2 className='section__title'>New Arrivals</h2>
                            </Col>
                            <ProductsList data={mobileProducts}></ProductsList>
                            <ProductsList data={wirelessProducts}></ProductsList>
                        </Row>
                    </Container>
                 </section>

                 <section className="popular__category">
                    <Container>
                        <Row>
                            <Col lg='12' className='text-center mb-5'>
                                <h2 className='section__title'>Popular in Category</h2>
                            </Col>
                            <ProductsList data={popularProducts}></ProductsList>
                           
                        </Row>
                    </Container>
                 </section>

            </Helmet>
        </div>
    );
};

export default Home;