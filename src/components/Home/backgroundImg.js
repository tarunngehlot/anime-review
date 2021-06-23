import React from 'react'
import {images} from './randomImg'
import styles from './Home.module.css'


const RandomNumber = (n,y) => {
    const [number, setNumber] = React.useState(0);
    
    // add side effect to component
    React.useEffect(() => {
      // create interval
      const interval = setInterval(
        // set number every 5s
        () => setNumber(Math.floor(Math.random() * n + y)),
        10000
      );
  
      // clean up interval on unmount
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    return number;
  };

const backgroundImg = (props) =>(
    <div className={styles.imgAnimation}>
        <img className={styles.popUp} 
                src={images[RandomNumber(20,0)].default} 
                style={{
                    transition:'0.01s ease-out'
                }}></img>
        <img className={styles.popUp} 
                src={images[RandomNumber(20,0)].default} 
                style={{
                    transition:'0.01s ease-out'
                }}></img>
        <img className={styles.popUp} 
                src={images[RandomNumber(20,0)].default} 
                style={{
                    transition:'0.01s ease-out'
                }}></img>
        <img className={styles.popUp} 
                src={images[RandomNumber(20,0)].default} 
                style={{

                    transition:'0.01s ease-out'
                }}></img>
    </div>
);

export default backgroundImg;