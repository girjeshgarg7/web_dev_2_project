import React from 'react';
import './App.css';
import Login from './Login'
import Question from './Question';
import Menu from './Menu';

import { BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return ( 
    <BrowserRouter>
       <div>
      <Menu />  
      <Switch>
       <Route path="/" exact component= {Login} />
       <Route path="/Question" component= {Question} />
       
       </Switch>
    </div>
    </BrowserRouter>
  );
}



export default App;

