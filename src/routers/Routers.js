import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignInSide from "../components/login/login";
import Homepage from "../components/pages/homepage";
import Qusgenetor from "../components/pages/qusgenetor";
import Testpage from "../components/pages/testpage";
import SignupSide from "../components/register/register";
import React from "react";
import MenupageRouter from "./MenupageRouters";
import "./routers.css";

class Routers extends React.Component {

    render() {
        return (
            <div>
            <Router>
              <Switch>
               <MenupageRouter/>
                <Route path="/sign_in" component={SignInSide} />
				        <Route path="/sign_up" component={SignupSide} />
				        <Route path="/test" component={Testpage} />
				        <Route path="/share" component={Qusgenetor} />
				        <Route path="/home" component={Homepage} />
              </Switch>
            </Router>
            </div>);
    }
}
 export default Routers;