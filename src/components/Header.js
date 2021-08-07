import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import  style from './style.css';

class Header extends React.Component {
    constructor(){
        super();
        
    }
    render() {
        return (
            <div>
            <div className="maincontainer">
                <div className="container">
                    <div className="row">
                        <div className="col-6  ">
                            <h4 className="mt-5 bluecolor">business<br/> 
                             adminstration</h4>
                        </div>
                        <div className="col-6 ">
                            <button type="button" className="float-right"><Link to="/Logout">Logout</Link></button>
                        </div>
                    </div>
                </div>   
            </div>
            <div className="maincontainer blue">
            <div className="container blue">
                    <div className="row  text-white">
                        <div className="col-12">
                            <h5 className="">Friday,8th june 2012</h5>
                        </div>
                    </div>
                    </div>
               </div>
            </div>
        )
    };
}
export default Header;