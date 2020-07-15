//DEPENDENCIES
//  REACT
import React, {Component } from 'react';
import ReactDOM from 'react-dom';
//  CSS - font-awesome, bootstrap, mdbreact
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.css';
//  MDB Components
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

class App extends Component {
    state = {};
    render() {
    return  <React.Fragment>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol lg="6">Left Column</MDBCol>
                        <MDBCol lg="6">Right Column</MDBCol>
                    </MDBRow>
                </MDBContainer>
            </React.Fragment>;
    }
}
ReactDOM.render(<App />, document.getElementById("root"));

// registerServiceWorker();