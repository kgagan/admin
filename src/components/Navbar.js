import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import  style from './style.css';

class Navbar extends React.Component {
    constructor(){
        super();
        
    }
    render() {
        return (
            <div>
                 <div >

                <ul className="list-unstyled ">
                <li className="  p-2 "><Link to="/pagedisplay">page summary</Link></li>
                <li className=" p-2"><Link to="/pageadd">page add</Link></li>
                <li className=" p-2"><Link to="/categorydisplay">category summary</Link></li>
                <li className="  p-2"><Link to="/categoryadd">category add</Link></li>
                <li className="  p-2"><Link to="/productdisplay">product summary</Link></li>
                <li className=" p-2"><Link to="/productadd">product add</Link></li>
                <li className=" p-2"><Link to="/changepassword">changepassword</Link></li>
                <li className=" p-2 bluecolor">login information username:admin email:example@domain.com</li>
                </ul>
                </div>
                 
                
                </div>
        )
    };
}
export default Navbar;