//DEPENDENCIES
//  REACT
import React, {Component } from 'react';
import ReactDOM from 'react-dom';
//  CSS - font-awesome, bootstrap, mdbreact
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
//  MDB Components
import { MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol} from "mdbreact";
// CSS - main
import './index.css';
//  APP
import App from './App';
import registerServiceWorker from './registerServiceWorker';



//RENDER
ReactDOM.render( <App /> , document.getElementById('root'));

registerServiceWorker();