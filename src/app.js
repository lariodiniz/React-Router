import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from "./pages/App";
import Cursos from "./pages/Cursos";
import Sobre from "./pages/Sobre";
import Home from "./pages/Home";


import Curso from "./components/Curso";

ReactDOM.render((
  <Router>
    <App>
        
        <Switch>
            <Route exact path="/" component={Home} />            
            <Route exact path="/sobre" component={Sobre} />
            <Route exact path="/cursos" component={Cursos} />
            
        </Switch>
        <Route exact path="/cursos/:nome" component={Curso}/>
    </App>    

  </Router>
  ),
  document.getElementById("app")
);

