import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import About from './About';
import Contact from './Contact';
import Home from './Home';

export default class RouterApp extends React.Component {
    render() {
        return(
            <div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                {this.props.children}
            </div>
        )
}
}
ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {RouterApp}>
         <IndexRoute component = {Home} />
         <Route path = "home" component = {Home} />
         <Route path = "about" component = {About} />
         <Route path = "contact" component = {Contact} />
      </Route>
   </Router>
), document.getElementById('root'))


