import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import addInfo from "./components/addInfo";

import Navbar from "./components/navbar.js";
import Offer from "./components/Addoffer.js";
import liste from "./components/liste.js";

class App extends React.Component{
  render() {
   return (
     
   
     
     <Router>
      
      <Route path="/" component={Navbar}/>
      <Route path="/liste" component={liste}/>
      <Route path="/SignUP" component={addInfo}/>
      <Route path="/AddOffer" component={Offer}/>
      </Router>
  
     
     
  );
}
}

export default App;
