    import React from 'react';
    import Swal from 'sweetalert2';
    import { Redirect } from 'react-router';
    //bootstrap
    import 'bootstrap/dist/css/bootstrap.min.css';
    //axios for api request
    import axios from 'axios';
    import Header from './Header';
import Navbar from './Navbar';
    class Changepassword extends React.Component {
      constructor(props)
        {
          super(props);
          this.state={
            Username:'',
            password: '',
            newpassword: '',
            cnewpassword: '',
          }
          this.addFormData = this.addFormData.bind(this);
        }
      //Form Submission
      addFormData(evt)
      {
        
        evt.preventDefault();
        let formData = new FormData();
        formData.append('username', this.state.username) 
        formData.append('pass', this.state.password)
        formData.append('npass', this.state.newpassword)
        formData.append('cnewpassword', this.state.cnewpassword)
    
        axios.post('http://localhost/apiadmin/signup.php', formData
        ).then(res=>
        {
                Swal.fire({
                title: 'Reactjs',
                text: res.data.data,
                type: 'success',
                
                });
                this.myFormRef.reset();
      
       }).catch(function (res) {
        console.log(res)
       });
       
       //this.props.history.push('');
    }
     
      render() {
       
        return (
         <div>
         <Header>  </Header>
          <div className="maincontainer">
            
            <h1 className="mr-5 ml-5 mt-5">Add User</h1>
            <div className="container mb-5 mt-5 text-left">
            
            <form ref={(el) => this.myFormRef = el } id="create-course-form">
         <div className="form-group">
        <input type="text" className="form-control" 
        placeholder="Enter username" 
         name="name" value={this.state.username}
         onChange={e => this.setState({ username: e.target.value })}/>
        </div>
        <div className="form-group">
        <input type="text" className="form-control" 
         placeholder="Enter old password" 
         name="name" value={this.state.password}
         onChange={e => this.setState({ password: e.target.value })}/>
        </div>
        <div className="form-group">
        <input type="text" className="form-control" 
        placeholder="Enter password" 
         name="name" value={this.state.newpassword}
         onChange={e => this.setState({ newpassword: e.target.value })}/>
        </div>
        <div className="form-group">
        <input type="text" className="form-control" 
        placeholder="Enter  confirm password" 
         name="name" value={this.state.cnewpassword}
         onChange={e => this.setState({ cnewpassword: e.target.value })}/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.addFormData}>Submit</button>
      </form>
           
                
          </div>
         
          </div>
          </div>
    )
    };
    }
    export default Changepassword;