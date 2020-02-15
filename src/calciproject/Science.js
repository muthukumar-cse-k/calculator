import React, { Component } from "react";
 import './Appcss.css';
class Science extends Component {
state={
    operand1:0,
    operand2:'',
    operand3:'',
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
    fun2=(e)=>{
        this.setState({
            operand1:this.state.operand1+3.14
        })
    };
    operation=(e)=>{
        this.setState({
            operand2:this.state.operand1,
            op:e.target.value,
            operand1:''
        })
    }
    final=()=>{
        if(this.state.op==="sin")
        {
           this.setState({
            operand1:Math.sin(this.state.operand2)
           })
        }
        if(this.state.op==="cos")
        {
           this.setState({
            operand1:Math.cos(this.state.operand2)
           })
        }
        if(this.state.op==="tan")
        {
           this.setState({
            operand1:Math.tan(this.state.operand2)
           })
        }
        if(this.state.op==="sinh")
        {
           this.setState({
            operand1:Math.sinh(this.state.operand2)
           })
        }
        if(this.state.op==="cosh")
        {
           this.setState({
            operand1:Math.cosh(this.state.operand2)
           })
        }
        if(this.state.op==="tanh")
        {
           this.setState({
            operand1:Math.tanh(this.state.operand2)
           })
        }
        if(this.state.op==="log")
        {
           this.setState({
            operand1:Math.log(this.state.operand2)
           })
        }
        if(this.state.op==="sqrt")
        {
           this.setState({
            operand1:Math.sqrt(this.state.operand2)
           })
        }
        if(this.state.op==="pow2")
        {
           this.setState({
            operand1:Math.pow(this.state.operand2,2)
           })
        }
        if(this.state.op==="cube")
        {
           this.setState({
            operand1:Math.pow(this.state.operand2,3)
           })
        }
    }
    onCero = () => {
        this.setState({
        operand1:(this.state.operand1).substring(0,(this.state.operand1).length-1)
        }) 
    };
    fullerase=()=>{
       this.setState({
           operand1:'',
           operand2:'',
           op:''
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
<div><h3 className="h3c">Scientific calculator</h3></div>
    <div className="flex-container">
    <div><input className="disp1" type="text" readOnly value={this.state.operand1}  id="disp" /></div>
    <br/>
    <div><button className="buttons" value="c" onClick={(e)=>this.erase(e)} id="c">c</button></div>
    <div><button className="buttons" value="backspace" onClick={(e)=>this.onCero(e)} id="backspace">backspace</button></div>
    <div><button className="buttons" value="ce" onClick={(e)=>this.fullerase(e)} id="ce">ce</button></div>
    <div><button className="buttons" value="sin" onClick={(e)=>this.operation(e)} id="sin">sin</button></div>
    <div><button className="buttons" value="cos" onClick={(e)=>this.operation(e)}  id="cos">cos</button></div>
    <div><button className="buttons" value="tan" onClick={(e)=>this.operation(e)}  id="tan">tan</button></div>
    <div><button className="buttons" value="sinh" onClick={(e)=>this.operation(e)} id="sinh">sinh</button></div>
    <div><button className="buttons" value="cosh" onClick={(e)=>this.operation(e)} id="cosh">cosh</button></div>
    <div><button className="buttons" value="tanh" onClick={(e)=>this.operation(e)}  id="tanh">tanh</button></div>
    <div><button className="buttons" value="log" onClick={(e)=>this.operation(e)}  id="log">log</button></div>
    <div><button className="buttons" value="pow2" onClick={(e)=>this.operation(e)}  id="pow2">pow2</button></div>
    <div><button className="buttons" value="cube" onClick={(e)=>this.operation(e)}  id="cube">cube</button></div>
    <div><button className="buttons" value="sqrt" onClick={(e)=>this.operation(e)}  id="sqrt">sqrt</button></div>
    <div><button className="buttons" value="pie" onClick={(e)=>this.fun2(e)}  id="pie">pie</button></div>
<div><button className="buttons" value="1" onClick={(e)=>this.fun1(e)}  id="1">1</button></div>
<div><button className="buttons" value="2" onClick={(e)=>this.fun1(e)} id="2">2</button></div>
<div><button className="buttons" value="3" onClick={(e)=>this.fun1(e)} id="3">3</button></div>
<div><button className="buttons" value="4" onClick={(e)=>this.fun1(e)} id="4">4</button></div>
<div><button className="buttons1" value="5" onClick={(e)=>this.fun1(e)} id="5">5</button></div>
<div><button className="buttons1" value="6" onClick={(e)=>this.fun1(e)} id="6">6</button></div>
<div><button className="buttons1" value="7" onClick={(e)=>this.fun1(e)} id="7">7</button></div>
<div><button className="buttons1" value="8" onClick={(e)=>this.fun1(e)} id="8">8</button></div>
<div><button className="buttons1" value="9" onClick={(e)=>this.fun1(e)} id="9">9</button></div>
<div><button className="buttons1" value="." onClick={(e)=>this.fun1(e)} id=".">.</button></div>
<div><button className="buttons1" value="0" onClick={(e)=>this.fun1(e)} id="0">0</button></div>
<div><button className="buttons1" value="=" onClick={()=>this.final()} id="=" >=</button></div>

</div>
</div>
)
}
}
export default Science;