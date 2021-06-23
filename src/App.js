import React, { Component} from 'react'; 
import './App.css';
import Landing from './containers/Landing/Landing'
import Blogs from './containers/Blogs/Blogs'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'


class App extends Component{

  render(){
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <Landing/>
            </Route>
            <Route path="/blogs">
              <Blogs/>
            </Route>
            <Route path="/reviews/:id" component={Blogs}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
