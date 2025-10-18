import React,{Fragment,useEffect} from 'react';

import Navigation from '../components/Navigation';
import EveryPageTop from '../components/EveryPageTop';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const ContacrPage = () => 
{

    useEffect(()=>{
        window.scroll(0,0);
    });

    return (
        <Fragment>
            <Navigation/>
            <EveryPageTop pageTitle="Contact"/>
            <Contact/>
            <Footer/>
        </Fragment>
    );
};

export default ContacrPage;