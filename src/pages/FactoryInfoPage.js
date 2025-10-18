import React,{Fragment,useEffect} from 'react';

import Navigation from '../components/Navigation';
import EveryPageTop from '../components/EveryPageTop';
import FactoryInfo from '../components/FactoryInfo';
import Footer from '../components/Footer';

const FactoryInfoPage = () => 
{

    useEffect(()=>{
        window.scroll(0,0);
    });


    return (
        <Fragment>
            <Navigation/>
            <EveryPageTop pageTitle="Factory Information"/>
            <FactoryInfo/>
            <Footer/>
        </Fragment>
    );
};

export default FactoryInfoPage;