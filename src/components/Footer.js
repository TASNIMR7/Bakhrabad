import React,{Fragment} from 'react';


import { AiOutlineMail,AiOutlineTwitter,AiFillLinkedin ,AiOutlinePhone} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

import { BiLink } from "react-icons/bi";

const Footer = () => {
    return (
        <Fragment >
            <section className="footer-section">
                <div className='row'>
                    <div className='footer-grid'>
                        <div >
                            <h3>Address: </h3>
                            <p>Bakhrabad Knitting Industries Limited Plot # 702 Jajhar, National University Gazipur, 1704 Bangladesh.</p>
                            <p><AiOutlineMail/> bkil_bhuiyan@bakhrabad.com</p>
                            <p><AiOutlineMail/> shihabul @gmail.com</p>
                            <p><BiLink/> https://www.bakhrabad.com</p>
                        </div>

                        <div>
                            <h3>Managing Director:</h3>
                            <p><AiOutlinePhone/> +8801711536869, +8801741267900</p>
                            <h3>CEO:</h3>
                            <p><AiOutlinePhone/> +8801713041268</p>
                            <h3>Overseas Contact:</h3>
                            <p><AiOutlinePhone/> UK: +44 7787715560</p>
                            <p><AiOutlinePhone/> Singapore: +65 8407 0422</p>
                            <p><AiOutlinePhone/> Canada: +1 431 244 4511</p>
                        </div>

                        <div>
                        <h3>Social Media </h3>
                            <ul>
                                <li ><a className='facebook' href="https://www.facebook.com/bakhrabadknitting/" target="_blank"><FaFacebookF /></a></li>
                                <li><a href="https://twitter.com/bakhrabad" target="_blank"><AiOutlineTwitter /></a></li>
                                <li><a href="https://bd.linkedin.com/company/stylineknitting" target="_blank"><AiFillLinkedin /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className='footer-section-bottom'>
                <div className='row'>
                    <p>&copy; 2023 Bakhrabad Knitting Industries Limited | All Rights Reserved.</p>
                </div>
            </section>
        </Fragment>
    );
};

export default Footer;