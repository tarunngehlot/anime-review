import React, {Component} from 'react';
import styles from './Footer.module.css'

class Footer extends Component{
    render(){
        return(
            <div className={styles.footer}>
                <h1>Designed by Tarun</h1>
            </div>
        );
    }
}

export default Footer;