import logo from './logo.svg';
import './App.css';
import BookingLanding from "./containers/BookingLanding";
import CourseLanding from "./containers/CourseLanding";
import CustomerLanding from "./containers/CustomerLanding";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {

  return (    
      <Router>
        <div>
          <Route exact path="/" component={BookingLanding} />
          <Route path="/courses" component={CourseLanding}/>
          <Route path="/customers" component={CustomerLanding}/>
        </div>
      </Router>

  );
}

export default App;
