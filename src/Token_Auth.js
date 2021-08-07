import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import Admin from './components/Admin';
import Categorydisplay from './components/Categorydisplay';
import Categoryadd from './components/Categoryadd';
import Pagedisplay from './components/Pagedisplay';
import Pageadd from './components/Pageadd';
import Productdisplay from './components/Productdisplay';
import Productadd from './components/Productadd';
import Signup from './components/Signup';
import Changepassword from './components/Changepassword';
import Imageupload from './components/Imageupload';
import Searchproduct from './components/Searchproduct';
import Radio from './components/Radio';
import Checkbox from './components/Checkbox';
import Multicheckbox from './components/Multicheckbox';
import Selectoption from './components/Selectoption';

class Token_Auth extends React.Component {
  render() {
    return (
      <Router>
      <div>
        <Switch>
            <Route exact path='/' component={Login} />
            <Route  path='/admin' component={Admin} />
            <Route  path='/logout' component={Logout} />
            <Route  path='/Categorydisplay' component={Categorydisplay} />
            <Route  path='/Categoryadd' component={Categoryadd} />
            <Route  path='/Pagedisplay' component={Pagedisplay} />
            <Route  path='/Pageadd' component={Pageadd} />
            <Route  path='/Productdisplay' component={Productdisplay} />
            <Route  path='/Productadd' component={Productadd} />
            <Route  path='/Signup' component={Signup} />
            <Route  path='/Changepassword' component={Changepassword} />
            <Route  path='/Imageupload' component={Imageupload} />
            <Route  path='/Searchproduct' component={Searchproduct} />
            <Route  path='/Radio' component={Radio} />
            <Route  path='/Checkbox' component={Checkbox} />
            <Route  path='/Multicheckbox' component={Multicheckbox} />
            <Route  path='/Selectoption' component={Selectoption} />
            
          </Switch>
     </div>
    </Router>
   )
 };
}

export default Token_Auth;