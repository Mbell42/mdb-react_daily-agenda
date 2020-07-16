//DEPENDENCIES
//  REACT
import React, {Component } from "react";
import ReactDOM from "react-dom";
//  CSS - font-awesome, bootstrap, mdbreact
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
//  MDB Components
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

class App extends Component {
    state = {};
    render() {
        return  (
            <React.Fragment>
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol md="9">
                                <Event />
                                <Event />
                            </MDBCol>
                            <MDBCol md="3"></MDBCol>
                        </MDBRow>
                    </MDBContainer>
            </React.Fragment>
        );
    }
};

class Event extends Component {
    state = {};
    render() {
        return (
            <React.Fragment>
                <h3>9:00 - Title</h3>
            </React.Fragment>
        );
    }
};

ReactDOM.render(<App />, document.getElementById("root"));

// registerServiceWorker();