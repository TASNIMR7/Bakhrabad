import React,{Fragment} from 'react';

import logo1 from '../asset/image/logo1.png'
import logo2 from '../asset/image/logo2.jpg'
import logo3 from '../asset/image/logo3.png'
import logo4 from '../asset/image/logo4.jpg'

import Slide from 'react-reveal/Slide';

const Certifications = () => {
    return (
        <Fragment>
            <section className='certification-section'>
            <h2>International Certifications</h2>
                <div className='row'>
                    <Slide top>
                    <div className='certificate-text-box'>
                        <p>We always strive to provide the best working conditions and social compliance to our employees. In order to ensure that our commitment to quality standards are of the highest international norms, we have performed Business Social Compliance Initiative (BSCI) audits for both our factories, and have successfully achieved BSCI standards.</p><br/>
                        <p>We are currently preparing ourselves for the ISO 9001:2015 Quality Management Services certification, whilst simultaneous making the necessary arrangements for achieving Supplier Ethical Data Exchange (SEDEX), Worldwide Responsible Accredited Production (WRAP) and Öko-Tex certifications.</p>
                    </div></Slide>
                    

                    <div className='logo-box'>
                        <Slide left><div className='certificate-image'> <img  className='certificate-img' src={logo1} alt="visionPhoto"/> </div></Slide>
                        <Slide top><div className='certificate-image'> <img  className='certificate-img' src={logo2} alt="visionPhoto"/> </div></Slide>
                        <Slide bottom><div className='certificate-image'> <img  className='certificate-img' src={logo3} alt="visionPhoto"/> </div></Slide>
                        <Slide right><div className='certificate-image'> <img  className='certificate-img' src={logo4} alt="visionPhoto"/> </div></Slide>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Certifications;