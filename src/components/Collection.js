import React, { Fragment, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

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
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        { src: collection1 },
        { src: collection2 },
        { src: collection3 },
        { src: collection4 },
        { src: collection5 },
        { src: collection6 },
        { src: collection7 },
        { src: collection8 },
        { src: collection9 },
        { src: collection10 },
        { src: collection11 },
        { src: collection12 },
        { src: collection13 },
        { src: collection14 },
        { src: collection15 },
        { src: collection16 },
        { src: collection17 },
        { src: collection18 },
        { src: collection19 },
        { src: collection20 },
        { src: collection21 },
        { src: collection22 },
        { src: collection23 },
        { src: collection24 },
        { src: collection25 },
        { src: collection26 },
        { src: collection27 },
        { src: collection28 },
        { src: collection29 },
        { src: collection30 },
    ];

    const handleImageClick = (index) => {
        setCurrentIndex(index);
        setOpen(true);
    };

    return (
        <Fragment>
            <section className='gallery-section'>
                <div className='row'>
                    <h2>Collections</h2>

                    <div className='gallery-grid'>
                        {slides.map((slide, index) => (
                            <img
                                key={index}
                                className='gallery-img'
                                src={slide.src}
                                onClick={() => handleImageClick(index)}
                                alt={`collection-${index + 1}`}
                                style={{ cursor: 'pointer' }}
                            />
                        ))}
                    </div>

                    <Lightbox
                        open={open}
                        close={() => setOpen(false)}
                        slides={slides}
                        index={currentIndex}
                    />
                </div>
            </section>
        </Fragment>
    );
};

export default Collection;