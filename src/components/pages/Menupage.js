import React, { useEffect, useState } from  'react';
import './Menupage.css';
import logo from '../../asset/logo/webscriptlogo.png';
import MenuItem from './Menuitem';

const  menuItems = [
    {name: "Test Conduct Platform" , to: "/" ,iconClassName:'bi bi-pen'},
    {name: "School",to: "/school",iconClassName:'bi bi-book',subMenus:[{name:"Stateboard",to:"/school/stateboard"},{name:"CentralBoard",to:"/school/centralboard"}],},
    {name:"College",to:"/college",iconClassName:'bi bi-trophy'},
    ];

const Menupage  = (props) => {
    const [inactive,setInactive] = useState(false);

    useEffect(() => {

        if(inactive){
            document.querySelectorAll(".sub-menu").forEach((el) => {
                el.classList.remove("active");
            });
        }

        props.onCollapse(inactive);
    },[inactive]);

    return (
        <div className={`side-menu ${inactive ? "inactive" : "" }`}>
          <div className="top-section">
              <div className="logo">
                    <img src = {logo} alt="webscriptlogo" />
              </div>
              <div onClick={()=> { setInactive(!inactive)}} className="toggle-menu-btn">
              {inactive ? <i class="bi bi-arrow-right-square-fill"></i> : <i class="bi bi-arrow-left-square-fill"></i>}
              </div>
              </div>
              <div className="search-controller">
                  <button className="search-btn">
                  <i class="bi bi-search"></i>
                  </button>
                  <input type="text" placeholder="search"></input>
              </div>
              <div className="divider"></div>
                  <div className="main-menu">
                      {menuItems.map((menuItems,index)=> (
                        <MenuItem
                            key={index}
                            name={menuItems.name}
                            to={menuItems.to}
                            subMenus={menuItems.subMenus || []}
                            iconClassName={menuItems.iconClassName}
                            onClick={()=>{
                                if(inactive){
                                    setInactive(false);
                                }
                            }
                            }
                          />))}
                    
                       {/* <a className="menu-item"> <div className="menu-icon">
                        <i class="bi bi-pen"></i>
                        </div> <span> Test Conduct Platform</span></a>
                        <MenuItem
                        name={"School"}
                        subMenus={[
                           {name:"StateBoard"},
                           {name:"CentralBoard"}
                        ]}
                        />
                        <a className="menu-item"> <div className="menu-icon">
                        <i class="bi bi-trophy"></i>
                    </div> <span>College</span></a>*/}
                    </div>
        <div className="side-menu-footer">

        </div>
        </div>
    )
}

export default Menupage;