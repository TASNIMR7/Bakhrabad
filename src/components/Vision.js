import React,{Fragment} from 'react';


import vision from '../asset/image/vision.jpg'

import Slide from 'react-reveal/Slide';

const Vision = () => {
    return (
        <Fragment>
            <section className='vision-section'>
                <h2>Vision</h2>
                <div className='row'> 
                    <div className='vision-grid'>
                        <div>
                            <div className='vision-image'> <img  className='vision-img' src={vision} alt="visionPhoto"/> </div>
                        </div>
                        <div className='vision-des'>
                            <Slide left><p>
                            We not only aspire to become a frontrunner supplier in the international fashion arena but we also aim to address the global challenges and assist the developing economies.</p></Slide> <br/>
                            <Slide right><p>What makes us stand out in the industry is our creative and innovative way of thinking and working which aims to make valuable difference by providing industry leadership and inspiration for people, companies and communities around the globe. </p></Slide>
                        </div>
                        
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Vision;