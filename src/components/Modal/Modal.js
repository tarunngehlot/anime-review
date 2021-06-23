import React from 'react';
import styles from './Modal.module.css'
import logo from '../../assets/Images/logo2.png'

const modal = (props) => (
    
    <div className={styles.land}
        style={{
            transform : props.show ? 'translateY(0)':'translateY(-100%)',
            opacity: props.show ? '1':'0.9'
        }}>
        <div className={styles.logo}>
            
        </div>
        
        <h1 className={styles.glitch}>WELCOME</h1>
        <button className={styles.scroll}onClick={props.clicked}></button>
        <div className={styles.blur}>
            
        </div>
        
    </div>
);

export default modal;