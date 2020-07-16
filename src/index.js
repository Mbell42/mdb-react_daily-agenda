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
    constructor(props) {
        super(props);
        this.state = {
            events: [
                { 
                    id: 1,
                    time: "10:00",
                    title: "Breakfast with Matthew",
                    location: "Coffe Shop",
                    description: "Good start to any day."
                },
                { 
                    id: 2,
                    time: "11:30",
                    title: "Daily SCRUM Meeting",
                    location: "Office",
                },
                { 
                    id: 3,
                    time: "12:00",
                    title: "Lunch Break", 
                },
            ]
        }
    }
        
    render() {
        return  (
            <React.Fragment>
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol md="9">
                            {this.state.events.map(event => (
                                <Event
                                key={event.id}
                                id={event.id}
                                time={event.time}
                                title={event.title}
                                location={event.location}
                                description={event.description}                                                   
                                />
                            ))}
                            </MDBCol>
                            <MDBCol md="3"></MDBCol>
                        </MDBRow>
                    </MDBContainer>
            </React.Fragment>
        );
    }
};

class Event extends Component {
    render() {
      return (
        <React.Fragment>
          <h3>
            {this.props.time} - {this.props.title}
          </h3>
          <h5>Location: {this.props.location}</h5>
          <p>Desc: {this.props.description}</p>
        </React.Fragment>
      );
    }
  }

ReactDOM.render(<App />, document.getElementById("root"));

// registerServiceWorker();