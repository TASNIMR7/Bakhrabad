import React,{Fragment,useEffect} from 'react';

import Navigation from '../components/Navigation';
import EveryPageTop from '../components/EveryPageTop';
import About from '../components/About';
import Footer from '../components/Footer';

const AboutPage = () => 
{

    useEffect(()=>{
        window.scroll(0,0);
    });

    return (
        <Fragment>
            <Navigation/>
            <EveryPageTop pageTitle="About Us"/>
            <About/>
            <Footer/>
        </Fragment>
    );
};

export default AboutPage;