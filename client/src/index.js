import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import Navigation from './Navigation.jsx';
import App from './App';
import Portfolio from './Portfolio';
import reportWebVitals from './reportWebVitals';
const pathName = window.pathName;

ReactDOM.render(
  <React.StrictMode>
    <div class="md:container md:mx-auto">
      <BrowserRouter>
        <Navigation />
        <Switch>   
          <Route location={pathName} exact path="/" component={App} />
          <Route location={pathName} exact path="/portfolio" component={Portfolio} />
        </Switch>
      </BrowserRouter>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
