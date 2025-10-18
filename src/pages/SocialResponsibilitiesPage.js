import React,{Fragment,useEffect} from 'react';
import Navigation from '../components/Navigation';
import EveryPageTop from '../components/EveryPageTop';
import Footer from '../components/Footer';
import SocialResponsibilities from '../components/SocialResponsibilities';
import ComplianceWithStandards from '../components/ComplianceWithStandards';
import Certifications from '../components/Certifications';
import FuturePlans from '../components/FuturePlans';

const SocialResponsibilitiesPage = () => 
{
    useEffect(()=>{
        window.scroll(0,0);
    });


    return (
        <Fragment>
            <Navigation/>
            <EveryPageTop pageTitle="Corporate Social Responsibility"/>
             <SocialResponsibilities/>
            <ComplianceWithStandards/>
            <Certifications/>
            <FuturePlans/>
            <Footer/>
        </Fragment>
    );
};

export default SocialResponsibilitiesPage;