import React, {Component} from 'react';
import axios from 'axios';
import firebase from '../../firebase'
import styles from './Blogs.module.css'
import Navbar from '../Navbar/Navbar'
import Loading from '../../components/Loading/Loading'

class Blogs extends Component{

  closed = () => {
    if(this.state.modalOpen){
      this.setState({modalOpen:false});
    }
  }

  changeNavbarBG = () => {
    if(window.scrollY>25){
      this.setState({modalOpen:false});
    }
  }

    state = {
        modalOpen:true,
        loading : true,
        loadingA : true,
        posts : [],
        details : [],
        ref : firebase.firestore().collection("posts").doc(`${this.props.match.params.id}`)
      }
    
      componentDidMount(){
        this.state.ref.onSnapshot((doc) => {
          this.setState({details:doc.data()});
          this.setState({loadingA:false})
      });
        window.addEventListener('scroll', this.changeNavbarBG);
          console.log(this.state.loading);
        axios.get('https://www.googleapis.com/blogger/v3/blogs/5291768593307925272/posts?key=AIzaSyDmxPS7MJOkfBlUFQxhXrebPymVz72MfJs')
             .then(response=>{
               this.setState({posts:response.data.items});
               this.setState({ loading: false });
             });
      }

    render(){

      const detail = this.state.details;

      if (this.state.loadingA || this.state.loading) {
        return <Loading/>;
      }
        
      return(
        <div className={styles.land}>
          <Navbar color='#ff8882'/>
          <div className={styles.top}>
            <div className={styles.topContent}>
              <h2>Things to know before watching</h2>
              <hr></hr>
              <h1>{detail.title}</h1>
            </div>
            <div className={styles.topImg}>
              <img className={styles.bg} src={detail.imgTop}></img>
              <div className={styles.detail}>                  
                <img className={styles.poster} src={detail.url[0]}></img>
                <div className={styles.card}>
                  <h2>{detail.rating}/10 <span class="fas fa-star"></span></h2>
                  <h3>Status : {detail.status}</h3>
                  <p>{detail.synopsis}</p>
                </div>              
              </div>
            </div>
            <div className={styles.review} dangerouslySetInnerHTML={{__html: this.state.posts[0].content}} />  
          </div>
        </div>
      );
        
    }
}

export default Blogs;