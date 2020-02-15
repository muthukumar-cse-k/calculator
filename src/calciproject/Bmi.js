import React, { Component } from "react";
import './Appcss.css';
import './cs.css';
import {Box ,TextInput} from "grommet";
import {
    Container,Row,Col
} from 'react-bootstrap';
class Counter extends Component {
    state={
        result:''
    }
    bmi=()=>{
      this.setState({
          result:((this.state.text)/2.205)*Math.pow((this.state.text1/39.37),2)
      })
  }
  sets=(e)=>{
    this.setState({
        [e.target.id]:e.target.value
    })
}
    render(){

        return(
<div>
<Box fill>
          <Box
            flex={true}
            tag="header"
            align="center"
            background="brand"
          >
            <h5 style={{fontSize:"15px"}}>Counter App</h5>
          </Box>
        </Box>
        <br/>
            <Container>
              <Row>
                  <Col>
                  <TextInput
        id="text"
        label="Height"
        placeholder="Height"
        onChange={(e)=>this.sets(e)}
        value={this.state.text}
        />
                  </Col>
                <Col lg={4}>
        <TextInput
        id="text1"
        label="Weight"
        placeholder="Weight"
        onChange={(e)=>this.sets(e)}
        value={this.state.text1}
        />
        </Col>
        <Col lg={4}>
        <TextInput
        id="text2"
        label="Result"
        placeholder="Result"
        value={this.state.result}
        />
        </Col>
        </Row>
        </Container>
        <div><button className="buttons" onClick={()=>this.bmi()}  id="reset">reset</button></div>
</div>
)
}
}
export default Counter;