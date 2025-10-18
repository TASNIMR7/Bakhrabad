import React,{Fragment} from 'react';

import { BrowserRouter,Routes,Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import FactoryInfoPage from '../pages/FactoryInfoPage';
import SocialResponsibilitiesPage from '../pages/SocialResponsibilitiesPage';
import CollectionPage from '../pages/CollectionPage';
import ContacrPage from '../pages/ContacrPage';

const MyRouter = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/about" element={<AboutPage/>} />
                    <Route path="/info" element={<FactoryInfoPage/>} />
                    <Route path="/csr" element={<SocialResponsibilitiesPage/>} />
                    <Route path="/collection" element={<CollectionPage/>} />
                    <Route path="/contact" element={<ContacrPage/>} />
                </Routes>
            </BrowserRouter>
        </Fragment>
    );
};

export default MyRouter;