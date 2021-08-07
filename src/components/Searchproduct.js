import React from 'react';
    import Swal from 'sweetalert2';
    import { Redirect } from 'react-router';
    //bootstrap
    import 'bootstrap/dist/css/bootstrap.min.css';
    //axios for api request
    import Header from './Header';
import Navbar from './Navbar';
import axios from 'axios';
 class Searchproduct extends React.Component {
  state = {
    filter: "",
    data: [
      {
        fname: "Jayne",
        lname: "Washington",
        email: "jaynewashington@exposa.com",
        gender: "female"
      },
      {
        fname: "Peterson",
        lname: "Dalton",
        email: "petersondalton@exposa.com",
        gender: "male"
      },
      {
        fname: "Velazquez",
        lname: "Calderon",
        email: "velazquezcalderon@exposa.com",
        gender: "male"
      },
      {
        fname: "Norman",
        lname: "Reed",
        email: "normanreed@exposa.com",
        gender: "male"
      }
    ]
  };

  handleChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { filter, data } = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = data.filter(item => {
      return Object.keys(item).some(key =>
        item[key].toLowerCase().includes(lowercasedFilter)
      );
    });

    return (
      <div>
        <input value={filter} onChange={this.handleChange} />
        {filteredData.map(item => (
          <div key={item.email}>
            <div>
              {item.fname} {item.lname} - {item.gender} - {item.email}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
    export default Searchproduct;