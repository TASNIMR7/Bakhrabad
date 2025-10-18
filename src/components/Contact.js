import React,{Fragment,useRef} from 'react';

import emailjs from '@emailjs/browser';
import cogoToast from 'cogo-toast';

const Contact = () => 
{
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_bzg94yl', 'template_gvdjoyd', form.current, 'ALQRA-3VIxuaLtuKR')
          .then((result) => {
              cogoToast.success("email sent!")
              document.querySelector('.from_name').value="";
              document.querySelector('.email_id').value="";
              document.querySelector('.message').value="";
          }, (error) => {
              console.log(error.text);
              cogoToast.error("Sorry! please try once again!!")
          });
      };

    return (
        <Fragment>
            <section className='contact-section'>
                <div className='row'>
                    <div className='grid-contact'>
                        <div className='col'>
                            <form  ref={form} onSubmit={sendEmail}>
                                    <div className="contact-name contact-common">
                                        <input type="text" className='from_name'  name="from_name" placeholder='Full Name*' required />
                                    </div>
                                    <div className="contact-email contact-common">
                                        <input type="email" className='email_id' name="email_id" placeholder='Email*' required/>
                                    </div>
                                    <div className="contact-msg contact-common">
                                        <textarea className='message'  name="message" placeholder='Message*' required/>
                                    </div>
                                    <div className="contact-btn">
                                        <input type="submit" value="send" />
                                    </div>
                            </form>
                        </div>
                        <div className='col'>
                            <p className="contact-title">Get in touch with us</p>
                            <h2>Let's have a conversation, please! Just complete the form.</h2>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Contact;