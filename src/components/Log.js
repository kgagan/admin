import React from 'react';
import {Redirect} from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends React.Component {
    constructor() {
        //let loggedIn = false
        super();
         
        const token = localStorage.getItem("token");
        let loggedIn = true;
        if(token == null){
            loggedIn = false
        }

        this.state = {
            username: '',
            password: '',
            loggedIn
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitForm(e){
         e.preventDefault();
         const {username , password} = this.state;
         if(username == "admin" && password == "admin"){
             localStorage.setItem("token","useridentify");
             this.setState({
                 loggedIn:true
             })
         }
    }

    render() {
        if(this.state.loggedIn){
            return <Redirect to="/admin" />
        }
        return (
            <div>
            <Header ></Header>
            <div class="container pt-5 ">
             <div class="row  ">
                <h1>Login</h1>
                <form onSubmit={this.submitForm} >
                    <input type="text" placeholder="username"
                        name="username" value={this.state.username}
                        onChange={this.onChange} />
                    <br />
                    <input type="password" placeholder="password"
                        name="password" value={this.state.password}
                        onChange={this.onChange} />
                    <br />
                    <input type="submit" />
                </form>
                </div>

                <div class="row ml-5 ">
                    <Link to="./signup">signup</Link>
                  </div>
            </div>
            </div>
        )
    };
}
export default Login;