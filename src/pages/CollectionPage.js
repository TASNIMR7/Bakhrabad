import React,{Fragment,useEffect} from 'react';

import Navigation from '../components/Navigation';
import EveryPageTop from '../components/EveryPageTop';
import Collection from '../components/Collection';
import Footer from '../components/Footer';

const CollectionPage = () => 
{
    useEffect(()=>{
        window.scroll(0,0);
    });

    return (
        <Fragment>
            <Navigation/>
            <EveryPageTop pageTitle="Collection"/>
            <Collection/>
            <Footer/>
        </Fragment>
    );
};

export default CollectionPage;