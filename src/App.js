import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import Notice from "./routes/Notice";
import Home from "./routes/Home";
import SingIn from "./routes/SingIn";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App(){
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} /> {/* exact = url이 / 일때만  Home을 랜더링 해준다 */}
      <Route path="/notice" component={Notice} />
      <Route path="/SingIn" component={SingIn} />
      <Route path="/movie-detail" component={Detail} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );


}

export default App;
