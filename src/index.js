//DEPENDENCIES
//  REACT
import React from 'react';
import ReactDOM from 'react-dom';
//  CSS
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.css';
//  APP
import App from './App';
//  SERVICE WORKER
import registerServiceWorker from './registerServiceWorker';

//RENDER
ReactDOM.render( <App /> , document.getElementById('root'));

registerServiceWorker();