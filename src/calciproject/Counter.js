import React, { Component } from "react";
import './Appcss.css';
import './cs.css';
import {Button, Box ,TextInput} from "grommet";
import {Container,Row,Col
} from 'react-bootstrap';
class Counter extends Component {
    state={
        text1:''
    }
    inc=()=>{
        this.setState({
            text1:parseInt(this.state.text1)+1
        })
    }
    dec=()=>{
        this.setState({
            text1:parseInt(this.state.text1)-1
        })
    } 
    sets=(e)=>{
      this.setState({
          text1:e.target.value
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
                <Col lg={4}>
                <Button
  label="Inc"
  onClick={() =>this.inc()}
/>
                </Col>
                <Col lg={4}>
        <TextInput
        id="text"
        placeholder="Enter the value"
        onChange={(e)=>this.sets(e)}
        value={this.state.text1}
        />
        </Col>
        <Col lg={6}>
        <Button
  label="Dec"
  onClick={() =>this.dec()}
/>
        </Col>
        </Row>
        </Container>
</div>
)
}
}
export default Counter;