import React,{Fragment} from 'react';

import info1 from '../asset/image/info1.png'
import info2 from '../asset/image/info2.jpg'
import info3 from '../asset/image/info3.jpg'
import info4 from '../asset/image/info4.jpg'
import info5 from '../asset/image/info5.jpg'
import info6 from '../asset/image/info6.jpg'
import info7 from '../asset/image/info7.jpg'
import info8 from '../asset/image/info8.jpg'
import info9 from '../asset/image/info9.jpg'
import info10 from '../asset/image/info10.png'

import Slide from 'react-reveal/Slide';

const FactoryInfo = () => {
    return (
        <Fragment>
            <section className='factoryInfo-section'>
                <div className='row'>
                    <div className='factory-des'>
                        <Slide bottom><p>Our factory includes state of the art machinery for knitting, cutting, printing, embroidery, sewing, finishing and quality control operations. We always strive to add more value to our customers by being focused on the quality, accuracy and timely delivery of our products. With a total production area of around 50,500 sft, and over 400 modern machinery, we manufacture roughly 2 million pieces of garments per year.</p>
                        </Slide>
                        <Slide bottom><p>We are official certified member Bangladesh Garment Manufacturers and Exporters Association (BGMEA).</p></Slide>
                    </div>
                    <h2>Production Facilities</h2>
                    <div className='factoryInfo-grid'>
                        <div className='col'>
                            <div className='factoryInfo-image'> <img  className='factoryInfo-img' src={info1} alt="factoryInfo"/> </div>
                            <h3>Structural Facility</h3>
                            <ul>
                                <li>9000 sft in Ground Floor For Knitting, Embroidery & Store</li>
                                <li>9000 sft in 1st Floor for Finishing Section and Administrative Offices</li>
                                <li>9000 sft in 2nd Floor for Garments Sewing </li>
                                <li>9000 sft in 3rd Floor for Garments Sewing</li>
                                <li>9000 sft in 4th Floor for Cutting, Dinning, First Aid & Prayer Room</li>
                                <li>3500 sft Fabric Storage Shed</li>
                                <li>Factory Total Area (including misc.) 50,500 sft</li>
                            </ul>
                        </div>
                        <div className='col'>
                            <div className='factoryInfo-image'> <img  className='factoryInfo-img' src={info2} alt="factoryInfo"/> </div>
                            <h3>Knitting Section</h3>
                            <ul>
                                <li>Our knitting section is equipped with 14 Single Jersey, 4 Fleece, 1 Rib/Interlock, 1 Multi-feeder Single Jersey and 6 Flat-Knit Collar Machines.</li>
                                <li>Knitting Area - 9000 sft</li>
                                <li>Daily Knitting Capacity - 3000 Kgs </li>
                            </ul>
                        </div>
                        <div className='col'>
                            <div className='factoryInfo-image'> <img  className='factoryInfo-img' src={info6} alt="factoryInfo"/> </div>
                            <h3>Sewing Section</h3>
                            <p>Our sewing section consists of 12 complete sewing lines in two separate floors. Each line is equipped with 20 to 25 sewing machines </p>
                            <p>Sewing Area (2 x 9000) = 18,000 sft</p>
                            <p>Total Number of Machines - 310 machinest</p>
                            <p>Daily Production Capacity:</p>
                            <ul>
                                <li>T-Shirt - 8000 pcs</li>
                                <li>Polo Shirt - 6000 pcs</li>
                                <li>Sweat Shirt - 5000 pcs</li>
                            </ul>
                        </div>
                       
                        <div className='col'>
                            <div className='factoryInfo-image'> <img  className='factoryInfo-img' src={info3} alt="factoryInfo"/> </div>
                            <h3>Cutting Section</h3>
                            <ul>
                                <li>Our cutting section has an area of 7000 sft and is equipped with 400 ft long cutting table. It is equipped with Computer-aided design (CAD) facilities.</li>
                                <li>Daily Cutting Capacity - 12000 to 15000 pcs (depending on style and design).</li>
                            </ul>
                        </div>
                        <div className='col'>
                            <div className='factoryInfo-image'> <img  className='factoryInfo-img' src={info5} alt="factoryInfo"/> </div>
                            <h3>Embroidery Section</h3>
                            <ul>
                                <li>Our embroidery section is equipped with 3 embroidery machines with a total of 60 heads.</li>
                                <li>Daily Embroidery Capacity - 5000 to 6000 pcs (depending on style and design).</li>
                            </ul>
                        </div>
                        <div className='col'>
                            <div className='factoryInfo-image'> <img  className='factoryInfo-img' src={info4} alt="factoryInfo"/> </div>
                            <h3>Printing Section</h3>
                            <ul>
                                <li>Our printing section has an area of 5000 sft and equipped with 400 feet long printing table.</li>
                                <li>Daily Printing Capacity - 8000 to 10000 pcs (depending on style and design).</li>
                            </ul>
                        </div>
                        <div className='col'>
                            <div className='factoryInfo-image'> <img  className='factoryInfo-img' src={info10} alt="factoryInfo"/> </div>
                            <h3>CAD Room</h3>
                            <p>Our manufacturing unit has advanced Computer-Aided Design (CAD) facilities and a dedicated team. Here's an overview of the CAD section:</p>
                            <ul>
                                <li><b>Design Creation: </b>The CAD team uses specialized software to digitally create knitting patterns from design concepts received from designers or external sources.</li>
                                <li><b>Pattern Development:</b> The CAD software allows the team to refine knitting patterns and textures by manipulating stitch types, colors, and other parameters to achieve the desired fabric appearance. </li>
                                <li><b>Sample Creation: </b>The CAD team generates fabric samples through virtual knitting simulations, saving time and resources by evaluating fabric appearance and texture without physically knitting it.</li>
                                
                                <li><b>Collaboration with Production:</b> The CAD team works closely with the production department, providing digital files and technical information to the knitting machines. They make modifications during production and provide updated files when needed</li>
                                <li><b>Design Archive and Management:</b> The CAD section maintains an organized digital archive, allowing for easy retrieval, modification, and reuse of past designs. CAD software enables efficient communication and collaboration among team members and designers.</li>
                            </ul>
                        </div>
                        <div className='col'>
                            <div className='factoryInfo-image'> <img  className='factoryInfo-img' src={info9} alt="factoryInfo"/> </div>
                            <h3>Sample Making Section</h3>
                            <p>Sampling is an integral part of our everyday operations. Our sampling department is managed by a team of highly skilled and experienced craftsmen who have their focus set on the most minutest of details. Using the state of the art machinery in our sample making section, they are responsible for delivering quality samples in accordance to the style and colour specifications of our clients.</p>
                            <p>Our sampling department consists of a 20 manpower setup with the relevant technical expertise for quick consumption analysis. There are 25 dedicated machines with a daily production capacity of around 50 to 75 samples comprising of 10-15 different designs. Our sample delivery time starting from the receipt of raw materials is roughly 48 hours.</p>
                            
                        </div>
                        <div className='col'>
                            <div className='factoryInfo-image'> <img  className='factoryInfo-img' src={info8} alt="factoryInfo"/> </div>
                            <h3>Quality Control Department</h3>
                            <p>We continuously strive to improve our customer satisfaction levels by manufacturing and delivering the best-quality products to satisfy the needs of our clients. </p>
                            <p>Our Quality Control Department comprises of an extremely competent and professional quality management team consisting of a Quality Manager and Quality Assurance Inspectors who are primarily responsible for:</p>
                            <ul>
                                <li>Strict monitoring and regular inspections.</li>
                                <li>Ensuring that the product specifications of our customers are 	adhered to at all times.</li>
                                <li>Ensuring timely deliveries by strictly adhering to delivery schedules.</li>
                                <li>Thinking from the customers’ perspectives.</li>
                                <li>Our quality control section consists of the following machines – Multi Light Colour Viewing Booth, GSM measuring machine, Washing Machine, Dryer, Metal Detector</li>
                            </ul>
                        </div>
                        <div className='col'>
                            <div className='factoryInfo-image'> <img  className='factoryInfo-img' src={info7} alt="factoryInfo"/> </div>
                            <h3>Finishing Section</h3>
                            <ul>
                                <li>Our finishing section has an area of 7000 sft and equipped with 25 vacuum iron tables and other packing and packaging facilities.</li>
                                <li>Daily Finishing Capacity - 10000 to 12000 pcs (depending on product)</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default FactoryInfo;