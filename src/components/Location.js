import React,{Fragment} from 'react';

const Location = () => {
    return (
        <Fragment>
            <section className='location-section'>
                <div className='row'>
                    <h2>Our Location</h2>
                    <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3645.9230235110495!2d90.393996!3d23.963162!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755db37db80fb87%3A0x7818e61fe081b8d9!2sBakhrabad%20Knitting%20Industries%20Limited!5e0!3m2!1sen!2sus!4v1680709035398!5m2!1sen!2sus" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
        </Fragment>
    );
};

export default Location;