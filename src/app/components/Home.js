import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {
    constructor(props){
        super();
        this.state = {
            age : props.initialAge,
            status : 0,
            homeLink: props.initialLinkName
        };
        setTimeout(()=>{
            this.setState({
                status:1
            });
        },3000)
        console.log("Constructor");
    }

    onMakeOlder(){
        this.setState({
            age : this.state.age + 3,
        });
    }

    componentWillMount(){
        console.log("Component will mount");
    }

    componentDidMount(){
        console.log("component did mount");
    }

    componentWillReceiveProps(nextProps){
        console.log("Component Will recieve props ",nextProps);
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("Should component update ",nextProps,nextState);
        return true;
    }

    componentWillUpdate(nextProps,nextState){
        console.log("Component will update",nextProps,nextState);
    }

    componentDidUpdate(prevProps,prevState){
        console.log("component did update",prevProps,prevState);
    }

    componentWillUnmount(){
        console.log("component will unmount");
    }

    onChangeLink(){
        this.props.changeLink(this.state.homeLink);
    }

    onHandleChange(event){
        this.setState({
            homeLink:event.target.value,
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
                <hr/>
                <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
                <hr/>
                <input type="text" value={this.state.homeLink} onChange={(event) => this.onHandleChange(event)}/>
                <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>
            </div>
        );
    }
}

Home.PropTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number,
    greet: PropTypes.func,
    initialLinkName:PropTypes.string
};