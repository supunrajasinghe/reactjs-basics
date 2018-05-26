import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {
    constructor(props){
        super();
        this.age = props.age;
    }

    onMakeOlder(){
        this.age+=3;
        console.log(this.age);
    }

    render(){
        return(
            <div>
                <p>In a new component!</p>
                <p>Your name is {this.props.name}, Your age is {this.age}</p>
                <hr/>
                <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older!</button>
            </div>
        );
    }
}

Home.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
};