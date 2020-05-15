import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GithubCard from './github-card/GithubCard'
import * as serviceWorker from './serviceWorker';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';

const routes = (
  <BrowserRouter>  
    <div className="headerMenu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/githubcard">GithubCard</Link>
        </li>
      </ul>
    </div>
    <div>
    <Switch>
          <Route exact path="/" component={App} />
          <Route path="/githubcard" component={GithubCard} />
    </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(
  routes,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
