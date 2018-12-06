import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';

export default class FooterSection extends Component {
  render() {
    return <div className=" bg-footer " >
        <Container>
          <Row>
            <Col className="text-left" style={{marginTop: '7rem'}} >
            <div> <h3>2018ILoveCheesecake</h3></div>
            </Col>
            <Col className="text-center" style={{marginTop: '4rem', marginLeft: '-15rem'}} >
              <div> 
                <img src={require("../../images/cheesecakePng.png")} height="90" width="90" alt="cheese img" />
              </div>
            </Col>
            <Col className="text-right" style={{marginTop: '7rem', marginRight: '-8rem'}} >
              <div style={{width: '30rem'}}>
                <h3>Providing Recipes for the World's Greatest Dessert!</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </div>;
  }
}
