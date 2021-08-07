import React from 'react';
//import './App.css';
import Swal from 'sweetalert2';
//Import link to routing to other components
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import 'bootstrap/dist/js/bootstrap.min.js';
//jquery for bootstrap modal
import 'jquery/dist/jquery.min.js';
import $ from 'jquery';
import Header from './Header';
import Navbar from './Navbar';
class Categorydisplay extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
            catname: '',
            displayorder: '',
            status:'',
        id:'',
        data: [],
        userdetails:[],
       
      }
      this.addFormData = this.addFormData.bind(this);
     
   }

    componentDidMount(){

        axios.get('http://localhost/apiadmin/savecategory.php').then(res => 
        {
            
            this.setState({data: res.data});
        }); 
        
    }

        deleteuser(userid)
        {
          const fd = new FormData();
            fd.append('deleteid', userid);
            
            
            axios.post('http://localhost/apiadmin/savecategory.php', fd
            ).then(res=>
            {
      
              
              //Get all users details in bootstrap table
              axios.get('http://localhost/apiadmin/savecategory.php').then(res => 
              {
              //Storing users detail in state array object
              this.setState({data: res.data});
              }); 
              //Success Message in Sweetalert modal
              Swal.fire({
                title: 'User id of '+userid+' has been deleted.',
                text: res.data.data,
                type: 'success',
                
              });
            
            }
            );
        }
        edituser(userid){
        
            const fd = new FormData();
              fd.append('userid', userid);
              
              
              axios.post('http://localhost/apiadmin/savecategory.php', fd
              ).then(res=>
              {
        
                //Storing user detail in state array object
                this.setState({userdetails: res.data[0]});
                this.setState({catname: res.data[0].catname});
                this.setState({displayorder: res.data[0].displayorder});
                this.setState({status: res.data[0].status});
                this.setState({id: res.data[0].id});
                //edit user popup form
                $("#editmodal").modal("show");
              
              }
              );
          }
        
//Form Submission for updation
addFormData(evt)
{
 
  evt.preventDefault();
  const fd = new FormData();
  fd.append('updatecatname', this.state.catname);
  fd.append('updatedisplayorder', this.state.displayorder);
  fd.append('updatestatus', this.state.status);
  fd.append('updateid', this.state.id);
  
  axios.post('http://localhost/apiadmin/savecategory.php', fd
  ).then(res=>
  {
this.myFormRef.reset();
$("#editmodal").modal("hide");
//Get all users details in bootstrap table
axios.get('http://localhost/apiadmin/savecategory.php').then(res => 
{
//Storing users detail in state array object
this.setState({data: res.data});
}); 
//Success Message in Sweetalert modal
Swal.fire({
  title: 'User id of '+this.refs.myID.value+' has been updated.',
  text: res.data.data,
  type: 'success',
  
});

}
);
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
     
        
        <div className="col-md-9 mb-5 mt-2 text-left">
        <h5 className="bluecolor" > category list </h5>
         <h6> this section display the the list of categories </h6>
        <table class="table table-hover table-bordered text-center">
          <thead>
            <tr>
              <th>ID</th>
              <th>catname</th>
              <th>displayorder</th>
              <th>status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {this.state.data.map((result) => {
            return (
             
                 <tr>
                  <td>{result.id}</td>
                  <td>{result.catname}</td>
                  <td>{result.displayorder}</td>
                  <td>{result.status}</td>
                  <td>
                    {/*<button className="bg-warning"> <i class="fas fa-eye"></i> </button>*/}
                    <button className="bg-info" onClick={e => {this.edituser(result.id)}}> <i class="fas fa-edit"></i> </button>
                    <button className="bg-danger" onClick={e => {this.deleteuser(result.id)}}> <i class="fas fa-trash"></i> </button>
                  </td>
                </tr>
             
            )
          })}
           
            
              </tbody>
        </table>

        
      </div>
      </div>


      <div class="modal" id="editmodal">
            <div class="modal-dialog">
              <div class="modal-content">
              
                <div class="modal-header">
                  <h4 class="modal-title align-center">User : {this.state.userdetails.name}</h4>
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                
                <div class="modal-body text-center">
                <form ref={(el) => this.myFormRef = el}>
                <input type="hidden" id="Username" value={this.state.userdetails.id} ref="myID" />
                  <div className="form-group">
                  <input type="text" className="form-control" id="Email" defaultValue={this.state.userdetails.updatecatname} 
                    aria-describedby="emailHelp" placeholder="Enter catname" ref="myEmail" 
                    onChange={e => this.setState({ catname: e.target.value })} />
                  
                  </div>
                  <div className="form-group">
                  <input type="text" className="form-control"  id="Username" defaultValue={this.state.userdetails.updatedisplayorder}
                    placeholder="Enter displayorder" ref="myUsername" 
                    onChange={e => this.setState({ displayorder: e.target.value })} />
                  </div>
                  <div className="form-group">
                  <input type="text" className="form-control"  id="Username" defaultValue={this.state.userdetails.updatestatus}
                    placeholder="Enter status" ref="myUsername" 
                    onChange={e => this.setState({ status: e.target.value })} />
                  </div>
                  <button type="submit" className="btn btn-primary" onClick={this.addFormData}>Update</button>
                </form>
                </div>
              
                <div class="modal-footer">
                  <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>

    
      </div>
      </div>
)
};
}

export default Categorydisplay;