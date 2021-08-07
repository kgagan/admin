import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Navbar from './Navbar';
import Pagedisplay from './Pagedisplay';

class Admin extends React.Component {
    constructor(){
        super();
        const token = localStorage.getItem("token");
        let loggedIn = true;
        if(token == null){
            loggedIn = false
        }
        this.state={
            loggedIn
        }
    }
    render() {
        if(this.state.loggedIn == false){
            return <Redirect to="/" />
        }
        return (
            <div>
              <Pagedisplay>  </Pagedisplay>
            </div>
        )
    };
}
export default Admin;