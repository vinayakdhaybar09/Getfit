import React, { useRef } from 'react'
import '../styles/join.css'
import emailjs from '@emailjs/browser'

const Join = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_g7epoz5', 'template_mrpzfro', form.current, '5p6twSrsSfXAibxJe')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='Join' id='join-us'>
            <div className="left-j">
                <hr />
                <div>
                    <span className='stroke-text'>READY TO </span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY </span>
                    <span className='stroke-text'>WITH US?</span>
                </div>
            </div>
            <div className="right-j">
                <form action="" className="email-container" onSubmit={sendEmail}>
                    <input type="email" name='user_email' placeholder='Enter your email address' />
                    <button className='btn btn-j' >Join Now</button>
                </form>
            </div>
        </div>
    )
}

export default Join