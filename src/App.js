import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home';
import AboutAndSkills from './Components/AboutAndSkills/AboutAndSkills';
import Blog from './Components/Blog/Blog';
import Projects from './Components/Projects/Projects';
import Contacts from './Components/Contacts/Contacts';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
         <Home></Home>
        </Route>
        <Route path="/home">
         <Home></Home>
        </Route>
        <Route path="/AboutAndSkills">
          <AboutAndSkills></AboutAndSkills>
        </Route>
        <Route path="/blog">
         <Blog></Blog>
        </Route>
        <Route path="/projects">
         <Projects></Projects>
        </Route>
        <Route path="/contact">
          <Contacts></Contacts>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
