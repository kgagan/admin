import React from 'react';
import {Link, Redirect} from 'react-router-dom';
class Logout extends React.Component {
    constructor(){
        super();
        localStorage.removeItem("token");
    }
    render() {
        
        return (
            <div>
             
              <Redirect to="/" />
               
            </div>
        )
    };
}
export default Logout;