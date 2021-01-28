import logo from './logo.svg';
import './App.css';
import {Route, Switch, } from'react-router-dom';


import Welcome from './Component/Welcome/Welcome';
import Clock from './Component/Clock/Clock';
import Contact from'./Component/Contact/Contact';
import Navigation from './Component/Navigation/Navigation';
import NotFound from './Component/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Navigation />
    
      <Switch>
      <Route 
      path="/"
      exact
      render={(props) => <Welcome {...props} name='Elizabeth' />} />
      <Route path="/clock"component={Clock }/>
      <Route path="/contact"component={Contact }/>
      <Route path="/welcome/:name" component={Welcome} />
      <Route component ={NotFound} />
     </Switch>
    </div>
  );
}

export default App;
