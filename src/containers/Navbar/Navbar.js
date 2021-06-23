import React, {Component} from 'react';
import styles from './Navbar.module.css'
import './Navbar.css'

class Navbar extends Component{
    state = {
        clicked : false
    }

    handleClicked = () =>{
        this.setState({clicked : !this.state.clicked});
        console.log(this.state.clicked)
    }

    render(){
        return(
            <nav className={styles.navbarItems}
                style={{
                    position : this.props.pos,
                    height : this.props.show ? '100px':'60px',
                    backgroundColor: this.props.show ? 'rgba(255,0,255,0)':`${this.props.color}`
                }}>
                <h1 className={styles.logo}>BEFORE ANIME</h1>
                <div className={styles.menuIcon} onClick={this.handleClicked}>
                    <i className={this.state.clicked ? 'fas fa-times':'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? "links active":`${styles["links"]}`}
                    style={{
                        fontSize : (this.props.show && !this.state.clicked) ? '2rem':'1.5rem',
                        top: this.props.show ? '100px': '60px',
                    }}>
                    <li><a href='#Home'>HOME</a></li>
                    <li><a href='#About'>ABOUT</a></li>
                    <li><a href='#Reviews'>REVIEWS</a></li>
                    <li><a href='#About'>BLOGS</a></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;