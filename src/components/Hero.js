import React,{Fragment} from 'react';

import {Link} from 'react-router-dom'

import heroImage from '../asset/image/hero-img.png'

import Slide from 'react-reveal/Slide';

const Hero = () => {
    return (
        <Fragment>
            <section className='hero-section'>
                <div className='row'>
                    <div className='hero-grid'>
                        
                        <div className='hero-grid-right'>
                            <Slide left>
                            <div className='hero-intro'>
                                <p>Bakhrabad Knitting Industries Limited was established in 2005 and we have been involved in the Ready-made Garment sector of Bangladesh for several decades.</p>
                                <Link className="hero-btn" to="/about" >About Us</Link>
                            </div>
                            </Slide>
                        </div>
                        <Slide right>
                        <div>
                            <div className='hero-image'> <img className='hero-img' src={heroImage} alt="company-logo"/> </div>
                        </div>
                        </Slide>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Hero;