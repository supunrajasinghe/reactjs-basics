import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {
    constructor(props){
        super();
        this.state = {
            age : props.initialAge,
            status : 0
        };
    }

    onMakeOlder(){
        this.setState({
            age : this.state.age + 3,
        });
    }

    render(){
        return(
            <div>
                <p>In a new component!</p>
                <p>Your name is {this.props.name}, Your age is {this.state.age}</p>
                <p>Status : {this.state.status}</p>
                <hr/>
                <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older!</button>
            </div>
        );
    }
}

Home.PropTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number,
};