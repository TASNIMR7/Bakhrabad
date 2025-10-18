import React,{Fragment} from 'react';

import csr from '../asset/image/csr.png'
import Slide from 'react-reveal/Slide';

const SocialResponsibilities = () => {
    return (
        <Fragment>
            <section className='mission-section Social-Responsibilities-section'>
                <h2>Social Responsibilities</h2>
                <div className='row'> 
                    <div className='mission-grid'>
                        <div className='mission-des'>
                            <Slide right><p>
                            Over the past two decades, we have undoubtedly established a very strong reputation as an iconic ready made garment manufacturer in Bangladesh. We have certainly risen up to the challenges posed by the rapidly changing manufacturing industry in the 21st century and are making game-changing and ground-breaking developments in our manufacturing processes by making them safer, more efficient and “greener’’. We have implemented technological innovations that are not only exemplary for the whole industry, but would also make the world a better place to live in.</p></Slide> <br/>
                            <Slide left><p>What sets us apart from our competitors is the fact that sustainability is at the roots of SKIL. We are extremely ethical when it comes to taking the environmental and social impacts of our operations into consideration. Efficiency, innovation and sustainable performance play a key role for value creation and growth and what makes us stand out in the industry is the fact that we have adapted a creative and innovative way of thinking and working which aims to make valuable difference by providing industry leadership and inspiration for people, companies and communities across the globe.</p></Slide>
                        </div>
                        <div>
                            <div className='mission-image'> <img  className='mission-img' src={csr} alt="missionPhoto"/> </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default SocialResponsibilities;