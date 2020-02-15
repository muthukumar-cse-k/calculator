import React, { Component } from "react";
import './Science.js';
 import './Appcss.css';
class Project extends Component {
state={
    operand1:0
}
componentDidMount()
{
    this.setState({
    operand1:sessionStorage.getItem('Result')
    });
}
    render(){

        return(
<div>
<div><h3 className="h3c">Result of operation</h3></div>
    <div className="flex-container">
    <div><input className="disp1" type="text" readOnly value={this.state.operand1}  id="disp" /></div>
</div> 
</div>
)
}
}
export default Project;