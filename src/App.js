import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import SingUp from "./routes/SingUp";
import Notice from "./routes/Notice";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App(){
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} /> {/* exact = url이 / 일때만  Home을 랜더링 해준다 */}
      <Route path="/singup" component={SingUp} />
      <Route path="/notice" component={Notice} />
      <Route path="/movie-detail" component={Detail} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );


}

export default App;
