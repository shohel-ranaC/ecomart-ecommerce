import React from 'react';
import Routers from '../../Routers/Routers';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


const Layout = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <Routers></Routers>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;