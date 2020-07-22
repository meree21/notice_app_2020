import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import About from "./routes/About";
import Notice from "./routes/Notice";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";
import bodyParser from 'body-parser';
import { password, connectString } from './config/dbconfig';
import { response } from 'express';

var orcledb = require('oracledb');
var dbConfig = require('./config/dbconfig');
var express = require('express'), http = require('http'), path = require('path');

var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var router = express.Router();

orcledb.autoCommit = true;

router.post('/dbTestSelect', function(request, respone){
  orcledb.getConnection({
    user : dbConfig.user,
    password : dbConfig.password,
    connectString : dbConfig.connectString
  },
    function(err,connection){
      if(err){
        console.error(err.message);
        return;
      }
      let query ='select *' + ' from member';
      connection.execute(query, [], function(err,result){
        if(err){
          console.error(err.message);
          doRelease(connection);
          return;
        }
        console.log(result.rows);
        doRelease(connection, result.rows);
      });
    });
function doRelease(connection, rowList){
  connection.relesse(function(err){
    if(err){
      console.log.error(err.message);
    }
    console.log("list-size : " + rowList.length);
    response.send(rowList);
      });
    }
});

router.post('/dbTestlnsert', function(request, respone){
  orcledb.getConnection({
    user : dbConfig.user,
    password : dbConfig.password,
    connectString : dbConfig.connectString
  },
  function(err,connection){
    if(err){
      console.error(err.message);
      return;
    }
    let binddata =[
      Number(request.body.empno),
      request.body.ename,
      request.body.mgr,
      Number(request.body.sal),
      Number(request.body.comm),
      Number(request.bod.deptno)
    ];
  }
  )
})

function App(){
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} /> {/* exact = url이 / 일때만  Home을 랜더링 해준다 */}
      <Route path="/about" component={About} />
      <Route path="/notice" component={Notice} />
      <Route path="/movie-detail" component={Detail} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );


}

export default App;