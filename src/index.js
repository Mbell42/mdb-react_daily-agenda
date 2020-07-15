//DEPENDENCIES
//  REACT
import React from 'react';
import ReactDOM from 'react-dom';
//  CSS - font-awesome, bootstrap, mdbreact
// import 'fontawesome/css/font-awesome.min.css';
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
ReactDOM.render( <h1>Hello World</h1> , document.getElementById('dynamic'));

registerServiceWorker();