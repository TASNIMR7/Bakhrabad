import React,{Fragment} from 'react';


import csr from '../asset/image/future.jpg'
import Slide from 'react-reveal/Slide';

const FuturePlans = () => {
    return (
        <Fragment>
            <section className='mission-section '>
                <h2>Future Plans</h2>
                <div className='row'> 
                    <div className='mission-grid'>
                        <div className='mission-des'>
                            <Slide right><p>
                            We are very closely affiliated with several dyeing factories who are completely dedicated to provide us with full-time support for the smooth running of our production. In the very near future, we intend to have our very own dyeing unit, including Effluence Treatment Plant (ETP) of a minimum daily capacity of 10 M.Tons. Simultaneously we are also planning to increase our daily knitting capacity to 8 M.Tons.</p></Slide> <br/>
                            <Slide left><p>We also have another sister concern - Styline Knitting Industries (Pvt.) Limited (SKIL) which was founded much earlier in 1991 for catering to the garments sourcing needs of specific target markets.</p></Slide>
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

export default FuturePlans;