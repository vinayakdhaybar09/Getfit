import React from 'react'
import '../styles/hero.css'
import Header from './Header'

import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import Heart from "../assets/heart.png";
import Calories from "../assets/calories.png";
import { motion } from 'framer-motion';
import NumberCounter from 'number-counter'


const Hero = () => {

    const transition = { type: 'spring', duration: 3 }
    const mobile = window.innerWidth <= 768 ? true : false

    return (
        <div className='hero' id='home'>
            <div className="blur hero-blur "></div>
            <div className='left-h' >
                <Header />

                {/* the best ad  */}

                <div className="the-best-ad">
                    <motion.div
                        initial={{ left: mobile ? '160px' : '238px' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}
                    >

                    </motion.div>
                    <span>the best fitness club in the town</span>
                </div>

                {/* Hero heading */}

                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>
                    <div>
                        <span>
                            In here we will help you to shape and build your ideal body and live up your life to fullest
                        </span>
                    </div>
                </div>

                {/* figures */}

                <div className="figures">
                    <div>
                        <span><NumberCounter end={140} start={100} delay='2' preFix='+' /></span>
                        <span>EXPERT COACHES</span>
                    </div>
                    <div>
                        <span><NumberCounter end={978} start={940} delay='2' preFix='+' /></span>
                        <span>MEMBERS JOINED</span>
                    </div>
                    <div>
                        <span><NumberCounter end={50} start={25} delay='2' preFix='+' /></span>
                        <span>FITNESS PROGRAMS</span>
                    </div>
                </div>

                {/* hero buttens */}

                <div className="hero-buttons">
                    <button className='btn'>Get Started</button>
                    <button className='btn'>Lern More</button>
                </div>

            </div>
            <div className='right-h' >
                <button className="btn">Join Now</button>

                <motion.div className="heart-rate" transition={transition} initial={{ right: '-1rem' }} whileInView={{ right: '4rem' }} >
                    <img src={Heart} alt="heart" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>

                {/* hero image  */}

                <img src={hero_image} alt='hero-image' className='hero-image' />
                <motion.img
                    initial={{ right: '11rem' }}
                    whileInView={{ right: '20rem' }}
                    transition={transition}
                    src={hero_image_back} alt='hero-image-back' className='hero-image-back'
                />

                {/* calories */}

                <motion.div className="calories" initial={{ right: '37rem' }} whileInView={{ right: '28rem' }} transition={transition} >
                    <img src={Calories} alt="calories" />
                    <div>
                        <span>Calories Burned</span>
                        <span>200 kcal</span>
                    </div>
                </motion.div>
            </div>

        </div>
    )
}

export default Hero