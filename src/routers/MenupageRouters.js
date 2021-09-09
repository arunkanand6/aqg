import "./routers.css"
import Menupage from "../components/pages/Menupage"
import testconductplatform from "../components/pages/testconductplatform"
import college from "../components/pages/college"
import Stateboard from "../components/pages/Stateboard"
import CentralBoard from "../components/pages/Centralboard"
import { BrowserRouter as Router,Switch,Route } from "react-router-dom"
import React, {useState } from "react";



function MenupageRouter(){
    
    const[inactive, setInactive] = useState(false);

    return(
        <div>
            <Router>
                <Menupage onCollapse={(inactive)=>{
                    console.log(inactive);
                    setInactive(inactive);
                }}/>
                <div className={`container ${inactive ? "inactive":""} `}>
                <Switch>
                  <Route exact path="/" component={testconductplatform} />
                  <Route path="/college" component={college}/>
                  <Route path="/school/Stateboard" component={Stateboard}/>
                  <Route path="/school/CentralBoard" component={CentralBoard}/>
                </Switch>
                </div>
              </Router>
        </div>
    )
}

export default MenupageRouter;