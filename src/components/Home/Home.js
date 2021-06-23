import React,{Component} from 'react';
import styles from './Home.module.css'
import walk from '../../assets/Images/walk.gif'
import ImgRotate from './imgRotate'

const home = (props) => (

    <div id ="Home" className={styles.home}>
        <div className={styles.rotateBox1}></div>
        <div className={styles.rotateBox2}></div>
        <div className={styles.rotateBox3}></div>
        {/* <img className={styles.walk} src={walk}></img> */}
        <div className={styles.randomPanel}>
            <div className={styles.boxIntro}>
                <div style={{
                    transition : '0.2s ease-in',
                    transitionDelay : '1s',
                    transform : props.show ? 'translateX(-2%)' : 'translateX(0)',
                    opacity : props.show ? '0' : '1'
                }}>
                    <span className={styles.intro}>EAT </span>
                    <span className={styles.intro}>SLEEP </span>
                    <span className={styles.introMain}>BINGE</span>
                    <span className={styles.intro}>REPEAT </span>
                </div>
                <p style={{
                    transition : '0.4s ease-in',
                    transitionDelay : '1.5s',
                    transform : props.show ? 'translateY(-10%)' : 'translateY(0)',
                    opacity : props.show ? '0' : '1'
                }}>Deciding what to watch next?<br></br>
                You’re in the right place. Tell us what titles or genres you’ve enjoyed in the past, and we’ll give you surprisingly insightful recommendations.</p>
            </div>
            <ImgRotate/>   
        </div>
        
        
    </div>
);

export default home;