        import React from 'react';
    import Swal from 'sweetalert2';
    import { Redirect } from 'react-router';
    //bootstrap
    import 'bootstrap/dist/css/bootstrap.min.css';
    //axios for api request
    import axios from 'axios';
    import Header from './Header';
    import Navbar from './Navbar';

    class Productadd extends React.Component {
      constructor(props)
        {
          super(props);
          this.state={
            categoryid: '',
            pname: '',
            pprice: '',
            pcontent:'',
            pdisplayorder: '',
            pstatus:'',
            // Initially, no file is selected
            selectedFile: null
          }
          this.addFormData = this.addFormData.bind(this);
        }

        // On file select (from the pop up)
    onFileChange = event => {
    
      // Update the state
      this.setState({ selectedFile: event.target.files[0] });
    
    };
      //Form Submission
      addFormData(evt)
      {
        
        evt.preventDefault();
        let formData = new FormData();
        formData.append('categoryid', this.state.categoryid)
        formData.append('pname', this.state.pname)
        formData.append('pprice', this.state.pprice)
        formData.append('pcontent', this.state.pcontent)
        formData.append('pdisplayorder', this.state.pdisplayorder)
        formData.append('pstatus', this.state.pstatus)
        formData.append('sl', this.state.value)
        // Update the formData object
      formData.append(
        "myFile",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
      // Details of the uploaded file
      console.log(this.state.selectedFile);
        axios.post('http://localhost/apiadmin/saveproduct.php', formData
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
           <Header>   </Header>
           <div class="container">
               <div class="row">
               <div class="col-md-3">
               <Navbar>   </Navbar>
                </div>
           
         
            <div className="col-md-9 mb-5 ">
            
            <h5 className="bluecolor">product manager</h5>
            <hr></hr>
            <h6 className="gray "> add product </h6>
            
            <form ref={(el) => this.myFormRef = el } id="create-course-form">
           <table className="table  table-bordered">
          <tr>
          <td className="text-right"> category id</td>
          <td>
        <input type="email" className="" 
          name="email" value={this.state.categoryid} 
          aria-describedby="emailHelp" placeholder="Enter category id" 
          onChange={e => this.setState({ categoryid: e.target.value })} />
       </td> </tr>
     
      <tr>
          <td className="text-right"> product name</td>

      <td>
        <input type="text" className="" 
          placeholder="Enter product" 
         name="name" value={this.state.pname}
         onChange={e => this.setState({ pname: e.target.value })}/>
         </td>
     </tr>
     <tr>
          <td className="text-right">price</td>

     <td>
        <input type="text" className="" 
          placeholder="Enter price" 
         name="name" value={this.state.pprice}
         onChange={e => this.setState({ pprice: e.target.value })}/>
        </td> </tr>
     <tr>
          <td className="text-right"> content</td>

     <td>
        <input type="text" className="" 
          placeholder="Enter content" 
         name="name" value={this.state.pcontent}
         onChange={e => this.setState({ pcontent: e.target.value })}/>
     </td> </tr>
      <tr>
          <td className="text-right"> displayorder</td>
      <td>
        <input type="text" className="" 
         placeholder="Enter displayorder" 
         name="name" value={this.state.pdisplayorder}
         onChange={e => this.setState({ pdisplayorder: e.target.value })}/>
         </td>
         </tr>
    <tr>
          <td className="text-right" > status</td>

    <td>
        <input type="text" className="" 
          placeholder="Enter status" 
         name="name" value={this.state.pstatus}
         onChange={e => this.setState({ pstatus: e.target.value })}/>
         </td>
      </tr>

      <tr>
          <td className="text-right" > image</td>

    <td>
        <input type="file" onChange={this.onFileChange} />
                
         </td>
      </tr>
      <tr>
          <td > </td>

      <td>
        <button type="submit" className="" onClick={this.addFormData}>Save</button>
        <button type="submit" className="ml-2" >cancel</button>
        </td> </tr> </table>
      </form>
           
    
          </div>      
          </div>
         
          </div>
        </div>  
    )
    };
    }
    export default Productadd;