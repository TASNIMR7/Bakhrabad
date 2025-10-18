import React,{Fragment} from 'react';

import Slide from 'react-reveal/Slide';

const EveryPageTop = (ob) => {
    return (
        <Fragment>
            <section className='everyPageTop-section'>
                <div className='row'>
                   <Slide bottom><h2>{ob.pageTitle}</h2></Slide> 
                
                </div>
            </section>
        </Fragment>
    );
};

export default EveryPageTop;