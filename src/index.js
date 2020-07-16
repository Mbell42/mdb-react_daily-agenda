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
                                <Event title="Meeting with George" time="10:00" />
                                <Event title="Lunch Meeting" time="12:00" />
                            </MDBCol>
                            <MDBCol md="3"></MDBCol>
                        </MDBRow>
                    </MDBContainer>
            </React.Fragment>
        );
    }
};

class Event extends Component {
    // state = {
    //     time: "10:00",
    //     title: "My state name"
    // };
    constructor(props) {
        super(props);
        this.state = {
            time: this.props.time,
            title: this.props.title
        };
    }
    render() {
        return (
            <React.Fragment>
                <h3>
                    {this.state.time} - {this.state.title}
                    <button
                        onClick={() => {
                            this.setState({title: "My NEW state title"})
                            console.log(this.state.title);
                        }}
                    >
                        Change State Title
                    </button>
                </h3>
                {/* <h3>
                    {this.state.time} - {this.state.title}
                    <button
                        onClick={() => {
                            this.setState({title: "My NEW variable title"});
                            console.log(this.varTitle);
                        }}
                    >
                        Change Variable title
                    </button>
                </h3> */}
            </React.Fragment>
        );
    }
};

ReactDOM.render(<App />, document.getElementById("root"));

// registerServiceWorker();