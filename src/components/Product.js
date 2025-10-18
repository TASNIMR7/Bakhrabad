import React,{Fragment} from 'react';

import Slide from 'react-reveal/Slide';

import product from '../asset/image/product.jpg'

const Product = () => {
    return (
        <Fragment>
             <section className='product-section'>
            <h2>Our Product</h2>
                <div className='row'> 
                    <div className='mission-grid'>
                        <div className='mission-des'>
                            <Slide right>
                                <p>Using our state of the art manufacturing technology we produce top quality garments to satisfy the growing demands in the global fashion markets. We are presently in a capacity of producing all kinds of tops and bottoms using knit fabrics.</p>
                            </Slide> <br/>
                            <Slide left>
                            <p className='bold'>Our Production Range includes:</p>
                                <ul>
                                    <li>T-Shirts</li>
                                    <li>Polo Shirts</li>
                                    <li>Tank Tops</li>
                                    <li>Shorts</li>
                                    <li>Sweat Shirts</li>
                                    <li>Sportswear</li>
                                    <li>Jogging Suits</li>
                                    <li>Jackets, etc</li>
                                </ul>
                            </Slide>
                        </div>
                        <div>
                            <div className='mission-image'> <img  className='mission-img' src={product} alt="ProductPhoto"/> </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Product;