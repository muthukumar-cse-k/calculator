import React, { Component } from "react";
import './Science.js';
 import './Appcss.css';
 import {Link} from 'react-router-dom';
class Project extends Component {
state={
    operand1:0,
    operand2:'',
    op:''
}
    fun1=(e)=>{
        if(this.state.operand1===0)
        {
            this.setState({
        operand1:e.target.value
            });
        }
        else{
        this.setState({
            operand1:this.state.operand1+e.target.value
        })
    }
    };
    operation=(e)=>{
        this.setState({
            operand2:this.state.operand1,
            op:e.target.value,
            operand1:''
        })
    }
    final=(e)=>{
        this.setState({
            operand1:this.state.operand1+e.target.value,
        })
        if(this.state.op==="+")
        {
           this.setState({
            operand1:parseInt(this.state.operand2)+parseInt(this.state.operand1)
           })
        }
        if(this.state.op==="-")
        {
           this.setState({
            operand1:parseInt(this.state.operand2)-parseInt(this.state.operand1)
           })
        }
        if(this.state.op==="*")
        {
           this.setState({
            operand1:parseInt(this.state.operand2)*parseInt(this.state.operand1)
           })
        }
        if(this.state.op==="/")
        {
           this.setState({
            operand1:parseInt(this.state.operand2)/parseInt(this.state.operand1)
           })
        }
        if(this.state.op==="%")
        {
           this.setState({
            operand1:parseInt(this.state.operand2)%parseInt(this.state.operand1)
           })
        }
       
    }
    fullerase=()=>{
       this.setState({
           operand1:'',
           operand2:'',
           op:''
       })
    }
    scientific=()=>{
        this.props.history.push({
            pathname: "/science"
        })
    }
    send=()=>{
        sessionStorage.setItem('Result', this.state.operand1);
        this.props.history.push({
            pathname: "/result"
        })
    }
    erase=()=>{
        this.setState({
            operand1:''
        })
    }
    render(){

        return(
<div>
<div><h3 className="h3c">Simple calculator</h3></div>
    <div className="flex-container">
    <div><input className="disp1" type="text" readOnly value={this.state.operand1}  id="disp" /></div>
    <br/>
    <div><button className="buttons" value="(" onClick={(e)=>this.fun1(e)} id="(">(</button></div>
    <div><button className="buttons" value="ce" onClick={(e)=>this.fullerase(e)}  id="ce">ce</button></div>
    <div><button className="buttons" value=")" onClick={(e)=>this.fun1(e)} id=")">)</button></div>
    <div><button className="buttons" value="c" onClick={(e)=>this.erase(e)} id="c">c</button></div>
<div><button className="buttons" value="1" onClick={(e)=>this.fun1(e)}  id="1">1</button></div>
<div><button className="buttons" value="2" onClick={(e)=>this.fun1(e)} id="2">2</button></div>
<div><button className="buttons" value="3" onClick={(e)=>this.fun1(e)} id="3">3</button></div>
<div><button className="buttons" value="+" onClick={(e)=>this.operation(e)} id="+">+</button></div>
<div><button className="buttons" value="4" onClick={(e)=>this.fun1(e)} id="4">4</button></div>
<div><button className="buttons1" value="5" onClick={(e)=>this.fun1(e)} id="5">5</button></div>
<div><button className="buttons1" value="6" onClick={(e)=>this.fun1(e)} id="6">6</button></div>
<div><button className="buttons1" value="-" onClick={(e)=>this.operation(e)} id="-">-</button></div>
<div><button className="buttons1" value="7" onClick={(e)=>this.fun1(e)} id="7">7</button></div>
<div><button className="buttons1" value="8" onClick={(e)=>this.fun1(e)} id="8">8</button></div>
<div><button className="buttons1" value="9" onClick={(e)=>this.fun1(e)} id="9">9</button></div>
<div><button className="buttons1" value="*" onClick={(e)=>this.operation(e)} id="*">*</button></div>
<div><button className="buttons1" value="." onClick={(e)=>this.operation(e)} id=".">.</button></div>
<div><button className="buttons1" value="0" onClick={(e)=>this.fun1(e)} id="0">0</button></div>
<div><button className="buttons1" value="=" onClick={(e)=>this.final(e)} id="=" >=</button></div>
<div><button className="buttons1" value="/" onClick={(e)=>this.operation(e)} id="/">/</button></div>
<div><button className="buttons1" value="%" onClick={(e)=>this.operation(e)} id="%">%</button></div>
<div><button className="buttons1" value="send" onClick={(e)=>this.send(e)} id="send">send</button></div>
<button
                                    className="buttons1"
                                      label="Scientific calculator"
                                      onClick={()=>this.scientific()}
                                    >Scientific</button>
<div>
<Link to="/science" target="_blank">open in newtab</Link>
</div>
<div>
<Link to="/counter" target="_blank">Counter app</Link>
</div>
<div>
<Link to="/bmi" target="_blank">Bmi calculator</Link>
</div>
</div> 
</div>
)
}
}
export default Project;