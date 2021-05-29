import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages';
import SignUp from './pages/signup';
import ContactUs from './components/ContactUs';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signup' component={SignUp} exact />
        <Route path='/contactus' component={ContactUs} exact />
      </Switch>
    </Router> 
  );
}

export default App;
