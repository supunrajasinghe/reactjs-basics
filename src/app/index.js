import React from  "react";
import { render } from "react-dom";
import { browserHistory} from "react-router";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { User } from "./components/User";

class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <div>
                    <Route exact path="/" component={Root}/>
                    <Route exact path="/" component={Home}/>

                    <Route path="/user" component={Root}/>
                    <Route path="/user" component={User}/>

                    <Route path="/home" component={Root}/>
                    <Route path="/home" component={Home}/>
                </div>
            </Router>
        )
    }
}

render(<App/>, window.document.getElementById("app"));