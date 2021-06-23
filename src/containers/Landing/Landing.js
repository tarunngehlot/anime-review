import React, {Component} from 'react';
import styles from './Landing.module.css'
import Modal from '../../components/Modal/Modal'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Home from '../../components/Home/Home'
import Reviews from '../../components/Reviews/Reviews'

class Landing extends Component{

  closed = () => {
    if(this.state.modalOpen){
      this.setState({modalOpen:false});
    }
  }

  changeNavbarBG = () => {
    this.setState({scrollIn:(window.scrollY-500)});
    this.setState({scrollOut:window.scrollY})
    console.log(this.state.scrollIn);
    if(window.scrollY>25){
      this.setState({modalOpen:false});
    }
    if(window.scrollY>500){
      this.setState({loading:false});
    }
    else{
      this.setState({loading:true});
    }
  }

    state = {
        modalOpen:true,
        loading : true,
        scrollIn :0,
        scrollOut :0,
        posts : []
      }

    componentDidMount () {
        console.log(this.state.interval);
        window.addEventListener('scroll',this.changeNavbarBG);
        
    }

    render(){
        
        return(
            <div className={styles.land}>
              <Navbar show={this.state.modalOpen} pos='fixed' color='#6930c3'/>
              <Modal show={this.state.modalOpen} clicked={this.closed}/>
                <div className={styles.sectionHome}>
                  <Home show={this.state.modalOpen} scroll={this.state.scrollOut}/>
                </div>
                <div className={styles.sectionReviews}>
                  <Reviews show={this.state.loading} scroll={this.state.scrollIn}/>
                </div>
                <Footer/>
            </div>
        );
        
    }
}

export default Landing;