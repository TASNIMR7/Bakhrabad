import React,{Fragment} from 'react';

import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'

import collection1 from '../asset/image/collection1.jpeg'
import collection2 from '../asset/image/collection2.jpeg'
import collection3 from '../asset/image/collection3.jpeg'
import collection4 from '../asset/image/collection4.jpeg'
import collection5 from '../asset/image/collection5.jpeg'
import collection6 from '../asset/image/collection6.jpeg'
import collection7 from '../asset/image/collection7.jpeg'
import collection8 from '../asset/image/collection8.jpeg'
import collection9 from '../asset/image/collection9.jpeg'
import collection10 from '../asset/image/collection10.jpeg'
import collection11 from '../asset/image/collection11.jpeg'
import collection12 from '../asset/image/collection12.jpeg'
import collection13 from '../asset/image/collection13.jpeg'
import collection14 from '../asset/image/collection14.jpeg'
import collection15 from '../asset/image/collection15.jpeg'
import collection16 from '../asset/image/collection16.jpeg'
import collection17 from '../asset/image/collection17.jpeg'
import collection18 from '../asset/image/collection18.jpeg'
import collection19 from '../asset/image/collection19.jpeg'
import collection20 from '../asset/image/collection20.jpeg'
import collection21 from '../asset/image/collection21.jpeg'
import collection22 from '../asset/image/collection22.jpeg'
import collection23 from '../asset/image/collection23.jpeg'
import collection24 from '../asset/image/collection24.jpeg'
import collection25 from '../asset/image/collection25.jpeg'
import collection26 from '../asset/image/collection26.jpeg'
import collection27 from '../asset/image/collection27.jpeg'
import collection28 from '../asset/image/collection28.jpeg'
import collection29 from '../asset/image/collection29.jpeg'
import collection30 from '../asset/image/collection30.jpeg'


const Collection = () => {
    return (
        <Fragment>
            <section className='gallery-section'>
                <div className='row'>
                    <h2>Collections</h2>

                    
                    <SlideshowLightbox  className='gallery-grid'>
                    
                        <img className='gallery-img' src={collection1} />
                        <img className='gallery-img' src={collection2} />  
                        <img className='gallery-img' src={collection3} />
                        <img className='gallery-img' src={collection4} />
                        <img className='gallery-img' src={collection5} />
                        <img className='gallery-img' src={collection6} />
                        <img className='gallery-img' src={collection7} />
                        <img className='gallery-img' src={collection8} />
                        <img className='gallery-img' src={collection9} />
                        <img className='gallery-img' src={collection10} />
                        <img className='gallery-img' src={collection11} />
                        <img className='gallery-img' src={collection12} />
                        <img className='gallery-img' src={collection13} />
                        <img className='gallery-img' src={collection14} />
                        <img className='gallery-img' src={collection15} />
                        <img className='gallery-img' src={collection16} />
                        <img className='gallery-img' src={collection17} />
                        <img className='gallery-img' src={collection18} />
                        <img className='gallery-img' src={collection19} />
                        <img className='gallery-img' src={collection20} />
                        <img className='gallery-img' src={collection21} />
                        <img className='gallery-img' src={collection22} />
                        <img className='gallery-img' src={collection23} />
                        <img className='gallery-img' src={collection24} />
                        <img className='gallery-img' src={collection25} />
                        <img className='gallery-img' src={collection26} />
                        <img className='gallery-img' src={collection27} />
                        <img className='gallery-img' src={collection28} />
                        <img className='gallery-img' src={collection29} />
                        <img className='gallery-img' src={collection30} />
                    
                    </SlideshowLightbox>
                    
                </div>
            </section>
        </Fragment>
    );
};

export default Collection;
