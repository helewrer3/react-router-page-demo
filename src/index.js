import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Path from './Path';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Link to='/'>Home</Link>
      <Link to='/path'>Path</Link>
      <Switch>
        <Route path='/' component={App} exact></Route>
        <Route path='/path' component={Path}></Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
