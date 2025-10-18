import React,{Fragment} from 'react';

import Slider from "react-slick";

import client1 from '../asset/image/client1.png'
import client2 from '../asset/image/client2.jpg'
import client3 from '../asset/image/client3.jpg'
import client4 from '../asset/image/client4.jpg'
import client5 from '../asset/image/client5.jpg'
import client6 from '../asset/image/client6.jpg'
import client7 from '../asset/image/client7.jpg'

import client8 from '../asset/image/client8.png'
import client9 from '../asset/image/client9.jpg'
import client10 from '../asset/image/client10.png'
import client11 from '../asset/image/client11.png'
import client12 from '../asset/image/client12.png'

import Slide from 'react-reveal/Slide';

const Client = () => 
{

    var settings = {
        autoplay: true,
        autoplaySpeed: 1000,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              dots: false,
            }
          }
        ]
      };



    return (
        <Fragment>
            <section className='client-section'>
                <div className='row'>
                    <h2>Clientele</h2>
                    <Slide left>
                    <div className='client-des'>
                        <p>As a result of our outstanding manufacturing excellence, our customers are some of the largest fashion brands around the globe. Our clientele include some of the leading fashion retail houses in Spain, Germany, Belgium, Portugal, Netherlands, Poland, Italy, Hong Kong and Australia.</p>
                    </div>
                    </Slide>
                    <Slider className='client-slider'  {...settings}>
                        <div className='client-content'>
                            <div className='client-brand'>
                                <img className="client-brand-img" src={client1} />
                            </div>
                        </div>
                        <div className='client-content'>
                            <div className='client-brand'>
                                <img className="client-brand-img" src={client2} />
                            </div>
                        </div>
                        <div className='client-content'>
                            <div className='client-brand'>
                                <img className="client-brand-img" src={client3} />
                            </div>
                        </div>
                        <div className='client-content'>
                            <div className='client-brand'>
                                <img className="client-brand-img" src={client4} />
                            </div>
                        </div>
                        <div className='client-content'>
                            <div className='client-brand'>
                                <img className="client-brand-img" src={client5} />
                            </div>
                        </div>
                        <div className='client-content'>
                            <div className='client-brand'>
                                <img className="client-brand-img" src={client6} />
                            </div>
                        </div>
                        <div className='client-content'>
                            <div className='client-brand'>
                                <img className="client-brand-img" src={client7} />
                            </div>
                        </div>
                        <div className='client-content'>
                            <div className='client-brand'>
                                <img className="client-brand-img" src={client8} />
                            </div>
                        </div>
                        <div className='client-content'>
                            <div className='client-brand'>
                                <img className="client-brand-img" src={client9} />
                            </div>
                        </div>
                        <div className='client-content'>
                            <div className='client-brand'>
                                <img className="client-brand-img" src={client10} />
                            </div>
                        </div>
                        <div className='client-content'>
                            <div className='client-brand'>
                                <img className="client-brand-img" src={client11} />
                            </div>
                        </div>
                        <div className='client-content'>
                            <div className='client-brand'>
                                <img className="client-brand-img" src={client12} />
                            </div>
                        </div>

                    </Slider>

                </div>
            </section>
        </Fragment>
    );
};

export default Client;