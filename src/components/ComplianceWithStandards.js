import React,{Fragment} from 'react';
import vision from '../asset/image/com.jpg'

import Slide from 'react-reveal/Slide';

const ComplianceWithStandards = () => {
    return (
        <Fragment>
            <section className='vision-section Compliance-with-Standards-section'>
                <h2>Compliance with Standards</h2>
                <div className='row'> 
                    <div className='vision-grid'>
                        <div>
                            <div className='vision-image'> <img  className='vision-img' src={vision} alt="visionPhoto"/> </div>
                        </div>
                        <div className='vision-des'>
                            <Slide left><p>
                            Quality is not only our aspiration, but also our obligation. It is the result of over 25 years of tradition and continuous technological innovations. We take every precaution necessary to ensure that all our operations are well within all laws and regulations. Therefore our competitive advantage of corporate reliability is dependent on our social and ethical behaviours which includes:</p></Slide> <br/>
                            <Slide right><p>
                                <ul>
                                    <li>Ensuring that our clients’ code of conduct is strictly adhered to at all times, with particular focus on human rights and occupational health and safety issues.</li>
                                    <li>Ensuring that all local and international compliances with regard to working conditions,  physical 	environment and welfare or our employees are adhered to at all times.</li>
                                    <li>Providing medical services by our very own factory in-house doctor.</li>
                                    <li>Child care room for the working mothers.</li>
                                    <li>Ensuring that robust procedures are in place to protect the rights of workers 	through the  implementation 	of an elected Workers Welfare Committee.</li>
                                    <li>Promoting active participation at all levels and ensuring that the views of all our workers are  taken into 	account through an elected Workers Participation Committee.</li>

                                </ul>
                                </p></Slide>
                        </div>
                        
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default ComplianceWithStandards;