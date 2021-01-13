import React from 'react';
import Signup from './components/home/Signup';
import './style/app.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from 'react-router-dom';

function App() {
  return (
    <Router>

     <Switch>
        <Route   path= "/" exact component={Signup}/>
         
       </Switch>
     </Router>
  );
}

export default App;
