import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {
    render(){
        var text = "something";
        return(
            <div>
                <p>In a new component!</p>
                <p>{text}</p>
                <p>Your name is {this.props.name}, Your age is {this.props.age}</p>
                <p>user object => Name : {this.props.user.name}</p>
                <div>
                    <h4>Hobbies</h4>
                    <ul>
                        {this.props.user.hobbies.map((hobby,i) => <li key={i}>{hobby}</li>)}
                    </ul>
                </div>
                <hr/>
                {this.props.children}
            </div>
        );
    }
}

Home.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object,
    children: PropTypes.element.isRequired
};