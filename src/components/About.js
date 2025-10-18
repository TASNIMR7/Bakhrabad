import React,{Fragment} from 'react';

import aboutImage from '../asset/image/about.png'

import Slide from 'react-reveal/Slide';

const About = () => {
    return (
        <Fragment>
            <section className='about-section'>
                <div className='row'>
                    <div className='about-grid'>
                       
                        <div className='about-text'>
                        <Slide bottom><h2>About</h2></Slide>
                            <Slide bottom>
                            <p>Bakhrabad Knitting Industries Limited was established in 2005 and we have been involved in the Ready-made Garment sector of Bangladesh for several decades. </p><br/></Slide>
                            <Slide bottom><p>At present our factories including the supporting printing and embroidery sections are co-located and we continue to manufacture knitted garments and export them to various countries globally. </p></Slide><br/>
                            <Slide bottom><p>Today, we have established a very respectable reputation as a leading ready made garment manufacturer in Bangladesh. </p></Slide>
                        </div>
                        <div>
                            <div className='about-image'> <img  className='about-img' src={aboutImage} alt="aboutImage"/> </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default About;