import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './App.css';
import Navigation from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import User from './components/User';

function App() {
  return (
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/user" component={User} />
        </Switch>
      </Router>
  );
}

export default App;
