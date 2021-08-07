import React from 'react';

import {Link} from 'react-router-dom';
import axios from 'axios'
import {Redirect} from 'react-router-dom';
import Swal from 'sweetalert2';
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
            name: '',
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
         const {name , password} = this.state;
         let formData = new FormData();
        formData.append('na', name)
        formData.append('pass', password)
        axios.post('http://localhost/apiadmin/signup.php', formData).then(res=>
        {
         if(res.data.data === "Login successfully"){
         localStorage.setItem("token","useridentify");
         this.setState({
                    loggedIn:true  
                })
         this.props.history.push('/pagedisplay');
            }
            
            /*
            if(res.data.data === "Login successfully")
            {
                Swal.fire({
            title: 'Reactjs',
            text: res.data.data,
            type: 'success',
            icon: 'success',
            
            });
                //this.props.history.push('/home');
               window.location.href="/home";
            }
            */
            else{
                Swal.fire({
            title: 'Reactjs',
            text: res.data.data,
            type: 'success',
            icon: 'warning',
            
            });
            }
               
                this.myFormRef.reset();
            })
            .catch(function (res) {
                console.log(res)
            });
            
            
            //this.props.history.push('/home');
        }
    


    render() {
        
        return (
            <>
                <div className="container">
                    
                </div>
                <div class="container-fluid date ">
                    <div className="container">
                        <h2>Thursday, 20<sup>th</sup> May 2021</h2>
                    </div>
                </div>

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 mt-5">
                            <form  onSubmit={this.submitForm}>
                                <div className="col-md-6 offset-md-4">
                                    <h2 className="h2-color">Login</h2>
                                </div>
                                <div className="form-group row">
                                    <label  className="col-md-4 col-form-label text-md-right"><b>Username</b></label>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" name="name" value={this.state.name}
                                            onChange={this.onChange} />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label for="password" className="col-md-4 col-form-label text-md-right"><b>Password</b></label>
                                    <div className="col-md-6">
                                        <input type="password" className="form-control" name="password" value={this.state.password}
                                            onChange={this.onChange} />
                                    </div>
                                </div>
                                <div className="col-md-6 offset-md-4">
                                    <button type="submit" className="btn btn-primary form-btn">
                                        Login
                                    </button> <button type="submit" className="btn btn-primary form-btn"><Link className="cc text-light" to={'/SignUp'}>Sign Up</Link></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                
                <div className="container-fluid date1 fixed-bottom">
                </div>
            </>    
        )
    };
}
export default Login;