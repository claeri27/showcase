import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from '@smooth-ui/core-sc'
import logo from '../../logo.svg'

const ShowcaseListWrapper = styled.div`
  margin-top: 50px;
`;

const Spinner = styled.img`
  animation: spin infinite 10s linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }
`;

const ShowcaseList = () => {
  return (
    <ShowcaseListWrapper>
      <Grid fluid mt="20px" mb="20px">
        <Row
          alignItems="center"
          justifyContent="center"
          minHeight='500px'
          backgroundImage="linear-gradient(salmon, red)"
          mb="50px"
        >
          <Col>
            {/* <Spinner src={logo} alt='logo'/> */}
          </Col>
        </Row>
        <Row
          mt='10px'
          alignItems="center"
          justifyContent="center"
          minHeight='500px'
          backgroundImage="linear-gradient(yellow, darkorange)"
          mb="50px"
        >
          <Col>
            {/* <Spinner src={logo} alt='logo'/> */}
          </Col>
        </Row>
        <Row
          mt='10px'
          alignItems="center"
          justifyContent="center"
          minHeight='500px'
          backgroundImage="linear-gradient(lightgreen, green)"
          mb="50px"
        >
          <Col>
            {/* <Spinner src={logo} alt='logo'/> */}
          </Col>
        </Row>
      </Grid>
    </ShowcaseListWrapper>
  )
}

export default ShowcaseList
