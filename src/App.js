import React,{Component} from 'react';
import Project from './calciproject/Project';
import Science from './calciproject/Science';
import Result from './calciproject/Result';
import Counter from './calciproject/Counter';
import Bmi from './calciproject/Bmi';
import './App.css';
import {Route,Switch,HashRouter as Router} from 'react-router-dom';
import {hashHistory} from 'react-dom';
class App extends Component{
  render(){
  return (
    <div>
      <Router history={hashHistory}>
      <Switch>
      <Route path="/" exact component={Project}/>
      <Route path="/science" component={Science}/>
      <Route path="/result" component={Result}/>
      <Route path="/counter" component={Counter}/>
      <Route path="/bmi" component={Bmi}/>
      </Switch>
      </Router>
      </div>
  );
  }
}

export default App;
