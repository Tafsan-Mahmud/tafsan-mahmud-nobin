import React from 'react';
import './Home.css';
import ContentHome from '../ContentHome/ContentHome';
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div className="home-bg">
            <Navbar></Navbar>
            <ContentHome></ContentHome>
            <Footer></Footer>
        </div>
    );
};

export default Home;