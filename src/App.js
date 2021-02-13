import BookingLanding from "./containers/BookingLanding";
import CourseLanding from "./containers/CourseLanding";
import CustomerLanding from "./containers/CustomerLanding";
import ErrorPage from "./componets/ErrorPage"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import HomePage from './componets/HomePage';
import BookingDetails from './componets/bookings/BookingDetails';

function App() {

  return (    
      <Router>
        <div>
          <h1>Welcome</h1>
          <Link to="/">Home</Link>
          <Link to ="/bookings"> Bookings </Link>
          <Link to ="/courses"> Courses </Link>
          <Link to ="/customers"> Customers </Link>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/bookings" component={BookingLanding} />
            <Route path="/bookings/details" component={BookingDetails} />
            <Route path="/courses" component={CourseLanding}/>
            <Route path="/customers" component={CustomerLanding}/>
            <Route component={ErrorPage}/>
          </Switch>
        </div>
      </Router>

  );
}

export default App;
