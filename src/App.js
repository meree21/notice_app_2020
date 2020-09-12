import React, { useState } from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Notice from "./routes/Notice";
import Home from "./routes/Home";
import {signIn} from "./auth";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";
import Loginform from './LoginForm';


function App(){
  const [user, setUser] = useState(null);
  const authenticated = user != null;

  const login = ({ email, password }) => setUser(signIn({ email, password }));
  const logout = () => setUser(null);
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} /> {/* exact = url이 / 일때만  Home을 랜더링 해준다 */}
      <Route path="/notice" component={Notice} />
      <Route path="/LoginForm" render={props => (<Loginform authenticated={authenticated} login={login} {...props}/>)}/>
      <Route path="/movie-detail" component={Detail} /> 
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
