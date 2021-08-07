    import React from 'react';
    import Swal from 'sweetalert2';
    import { Redirect } from 'react-router';
    //bootstrap
    import 'bootstrap/dist/css/bootstrap.min.css';
    //axios for api request
    import Header from './Header';
     import Navbar from './Navbar';
     import axios from 'axios';
    class Pageadd extends React.Component {
      constructor(props)
        {
          super(props);
          this.state={
            name: '',
            content:'',
            displayorder: '',
            status:'',
            value: 'page1',
            selectedOption:'',
          }
          this.handleChange = this.handleChange.bind(this);
          this.onValueChange = this.onValueChange.bind(this);
          this.addFormData = this.addFormData.bind(this);
        }
        //selectbox
        handleChange(event) {
    this.setState({value: event.target.value});
  }  
   //radio
    onValueChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

      //Form Submission
      addFormData(evt)
      {
        
        evt.preventDefault();
        let formData = new FormData();
        formData.append('name', this.state.name)
        formData.append('content', this.state.content)
        formData.append('displayorder', this.state.displayorder)
        formData.append('status', this.state.status)
        formData.append('sl', this.state.value)
        formData.append('rd', this.state.selectedOption)
        axios.post('http://localhost/apiadmin/savepage.php', formData
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
              
            
            <div className="col-md-9  mb-5 mt-2">
            <h5 className="bluecolor">page manager</h5>
            <hr></hr>
            <h6 className="gray "> add page </h6>
            
            <div className="col-md-12 pl-0">
            <form ref={(el) => this.myFormRef = el } id="create-course-form">
            <table className="table  table-bordered ">
            <tr>
        <td className="text-right " > parent page </td>
       <td > <select value={this.state.value} onChange={this.handleChange}>
            <option value="page1">page1</option>
            <option value="page2">page2</option>
            <option value="page3">page3</option>
            <option value="page4">page4</option>
          </select>
        </td>
         </tr>
         <tr>
        <td className="text-right " > name </td>
       <td > <input type="name" className="" 
          name="email" value={this.state.name} 
          aria-describedby="emailHelp" placeholder="Enter page name" 
          onChange={e => this.setState({ name: e.target.value })} />
        </td>
         </tr>
         <tr>
        <td className="text-right" > meta keyword </td>
        <td>
         <textarea>  </textarea>
         </td>
         </tr>
         <tr>
        <td className="text-right" > meta description </td>
        <td>
         <textarea>  </textarea>
         </td>
         </tr>
         <tr>
        <td className="text-right" > content </td>
        <td>
        <input type="text" className="" 
          placeholder="Enter content" 
         name="name" value={this.state.content}
         onChange={e => this.setState({ content: e.target.value })}/>
         </td>
         </tr>
         
         <tr>
       <td className="text-right" > displayorder </td>
        <td>
        <input type="text" className="" 
         placeholder="Enter displayorder" 
         name="name" value={this.state.displayorder}
         onChange={e => this.setState({ displayorder: e.target.value })}/>
      </td>
      </tr>
      <td className="text-right" > status </td>
        <td>
        <input
              type="radio"
              value="active"
              checked={this.state.selectedOption === "active"}
              onChange={this.onValueChange}
            />
            active
            <input
              type="radio"
              value="inactive"
              checked={this.state.selectedOption === "inactive"}
              onChange={this.onValueChange}
            />
            inactive
         </td>
         <tr>
         <td>
         </td>
         <td>
        <button type="submit" onClick={this.addFormData}>Save</button>
        <button type="submit" className="ml-2" >cancel</button>
         </td>
         </tr>
         </table>
      </form>
           
                
        
                  </div>
          </div>
     
         </div>
          </div>
          </div>
    )
    };
    }
    export default Pageadd;