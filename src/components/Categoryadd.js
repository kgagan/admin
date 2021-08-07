import React from 'react';
    import Swal from 'sweetalert2';
    import { Redirect } from 'react-router';
    //bootstrap
    import 'bootstrap/dist/css/bootstrap.min.css';
    //axios for api request
    import Header from './Header';
import Navbar from './Navbar';
import axios from 'axios';
    class Categoryadd extends React.Component {
      constructor(props)
        {
          super(props);
          this.state={
            catname: '',
            displayorder: '',
            status:'',
          }
          this.addFormData = this.addFormData.bind(this);
        }
      //Form Submission
      addFormData(evt)
      {
        
        evt.preventDefault();
        let formData = new FormData();
        formData.append('catname', this.state.catname)
        formData.append('displayorder', this.state.displayorder)
        formData.append('status', this.state.status)
    
        axios.post('http://localhost/apiadmin/savecategory.php', formData
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
               <Header ></Header>
               <div class="container">
               <div class="row">
               <div class="col-md-3">
               <Navbar>   </Navbar>
                </div>
        
            
            <div className="col-md-9 mb-5  text-left">
            <h5 className="bluecolor">Category manager</h5>
            <hr></hr>
            <h6 className="gray "> add Category </h6>
            
            <form ref={(el) => this.myFormRef = el } id="create-course-form">
      <tr>
        <td></td> 
      <td> 
        <input type="text" className="form-control" 
          name="email" value={this.state.catname} 
          aria-describedby="emailHelp" placeholder="Enter catname" 
          onChange={e => this.setState({ catname: e.target.value })} />
        </td></tr>
  
      <tr> <td>
       
        <input type="text" className="form-control" 
         id="Username" placeholder="Enter displayorder" 
         name="name" value={this.state.displayorder}
         onChange={e => this.setState({ displayorder: e.target.value })}/>
        </td></tr>
      <tr> <td>
        <input type="text" className="form-control" 
          placeholder="Enter status" 
         name="name" value={this.state.status}
         onChange={e => this.setState({ status: e.target.value })}/>
         </td></tr>
        <tr>
        <td>
        <button type="submit" className="" onClick={this.addFormData}>Save</button>
        <button type="submit" className="" >cancel</button>
        </td>
        </tr>
      </form>
           
          </div>      
          </div>
         
          </div>
          </div>
    )
    };
    }
    export default Categoryadd;