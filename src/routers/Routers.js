import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignInSide from "../components/login/login";
import Homepage from "../components/pages/homepage";
import Qusgenetor from "../components/pages/qusgenetor";
import Testpage from "../components/pages/testpage";
import SignupSide from "../components/register/register";
import React,{useState} from "react";
import MenupageRouter from "./MenupageRouters";
import "./routers.css";

import Menupage from "../components/pages/Menupage"
import testconductplatform from "../components/pages/testconductplatform"
import college from "../components/pages/college"
import Stateboard from "../components/pages/Stateboard"
import CentralBoard from "../components/pages/Centralboard"

function Routers (){

  const[inactive, setInactive] = useState(false);

        return (
            <div>
            <Router>
              <Switch>
                <Route path="/sign_in" component={SignInSide} />
				        <Route path="/sign_up" component={SignupSide} />
				        <Route path="/test" component={Testpage} />
				        <Route path="/share" component={Qusgenetor} />
				        <Route path="/home" component={Homepage} />
                <div>
                  <Menupage onCollapse={(inactive)=>{
                    console.log(inactive);
                    setInactive(inactive);
                  }}/>
                  <div className={`container ${inactive ? "inactive":""} `}>
                  <Route exact path="/" component={testconductplatform} />
                  <Route path="/college" component={college}/>
                  <Route path="/school/Stateboard" component={Stateboard}/>
                  <Route path="/school/CentralBoard" component={CentralBoard}/>
                </div>
              </div>
              </Switch>
            </Router>
            </div>);
    }

 export default Routers;