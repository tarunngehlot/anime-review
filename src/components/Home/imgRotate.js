import React from 'react';
import {images} from './randomImg'
import styles from './imgRotate.module.css'

const RandomNumber = (n) => {
    const [number, setNumber] = React.useState(0);
    
    // add side effect to component
    React.useEffect(() => {
      // create interval
      const interval = setInterval(
        // set number every 5s
        () => setNumber(Math.floor(Math.random() * n)),
        20000
      );
  
      // clean up interval on unmount
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    return number;
  };

const generateImg = () =>{
    const post = [];
    const num = RandomNumber(20);
    for(let i=1;i<9;i++){
        post.push(<span style={{transform:`rotateY(calc(${i} * 45deg)) translateZ(300px)`}}><img src={images[num+i].default}></img></span>)
    }

    return post;
};

const imgRotate = () => (
    <div className={styles.rotateImg}>
        <div className={styles.box}>
            {generateImg()}
        </div>
    </div>
);

export default imgRotate;