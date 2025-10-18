import React,{Fragment,useEffect} from 'react';

import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import Vision from '../components/Vision';
import Product from '../components/Product';
import Client from '../components/Client';
import Location from '../components/Location';
import Footer from '../components/Footer';

import Contact from '../components/Contact';

const HomePage = () => 
{

    useEffect(()=>{
        window.scroll(0,0);
    });


    return (
        <Fragment>
            <Navigation/>
            <Hero/>
            <Mission/>
            <Vision/>
            <Product/>
            <Client/>
            <Location/>
            <Footer/>
        </Fragment>
    );
};

export default HomePage;