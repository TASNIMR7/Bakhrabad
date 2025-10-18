import React,{Fragment} from 'react';

import mission from '../asset/image/info1.png'

import Slide from 'react-reveal/Slide';

const Mission = () => {
    return (
        <Fragment>
            <section className='mission-section'>
                <h2>Mission</h2>
                <div className='row'> 
                    <div className='mission-grid'>
                        <div className='mission-des'>
                            <Slide right><p>
                            We are always well informed of the latest global fashion trends and industry requirements. We treat punctuality with utmost importance, and using our state of the art production technology we always ensure the timely delivery of our products.</p></Slide> <br/>
                            <Slide left><p>Through our strong dedication, commitment and hard work, we constantly strive to become a dependable supplier of attractive and fashionable ready made garments in the global fashion business.</p></Slide>
                        </div>
                        <div>
                            <div className='mission-image'> <img  className='mission-img' src={mission} alt="missionPhoto"/> </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Mission;