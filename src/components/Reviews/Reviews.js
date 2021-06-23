import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import firebase from '../../firebase';
import styles from './Reviews.module.css'

const Reviews = (props) => {
    const[posts, setPosts] = useState([]);
    const[loading, setLoading] = useState(true);

    const ref = firebase.firestore().collection("posts");

    function getPosts (){
        setLoading(true);
        ref.onSnapshot((querySnapshot) =>{
            const item = [];
            querySnapshot.forEach((doc) => {
                item.push(doc.data());
            });
            setPosts(item);
            setLoading(false);
        });
    }

    useEffect(()=>{
        getPosts();
    }, []);

    if(loading) {
        return <h1>Loading.....</h1>
    }

    const itemContent = [];
    for(let i=1;i<4;i++){
        itemContent.push(<div className={styles.card}>
            <div className={styles.imgBox}>
                <img src={posts[i].url[0]}></img>
            </div>
            <div className={styles.details}>
                <h2>{posts[i].title}</h2>
                <Link className={styles.link} to={`/reviews/${posts[i].id}`} p={posts[i]}><h4>READ REVIEW</h4></Link>
                <img src={posts[i].url[1]}></img>
            </div>
        </div>);
    }

    return(
        <div className={styles.review}>
            <div id="Reviews" className={styles.container}
                style={{
                    transform: props.show ?`translateX(${props.scroll*2}px)` : 'translateX(0)'
                }}>
                {itemContent}
            </div>
            <div className={styles.info}
                style={{
                    transform: props.show ? `scale(${(props.scroll*2+900)/900}) translate(20%,-50%)`:'scale(1) translate(20%,-50%)'
                }}>
                <h2>REVIEWS</h2>
                <div className={styles.infoContent}
                    style={{
                        transform: props.show ? `translateX(${-props.scroll*2}px)`:'translateX(0)'
                    }}>
                    <h3>The Best reviews The Best reviews The Best reviews The Best reviews The Best reviews</h3>
                    <h3>The Best reviews</h3>
                    <h3>The Best reviews</h3>
                    <h3>The Best reviews</h3>
                </div>
            </div>
        </div>
    );
}
const loadingScreen = (load,post) => {
    if (load) {
        return <div className={styles.land}>Loading...</div>;
      }
    
    return(
        <div id="Reviews" className={styles.land}>
            <div className={styles.Home}>
                <div className={styles.card} dangerouslySetInnerHTML={{__html: post[0].content}} />
            </div>
        </div>
    );
};



export default Reviews;