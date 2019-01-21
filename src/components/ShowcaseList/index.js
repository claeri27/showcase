import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from '@smooth-ui/core-sc'
import logo from '../../logo.svg'

const ShowcaseListWrapper = styled.div`
`;

const Spinner = styled.img`
  animation: spin infinite 20s linear;
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
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
          height='500px'
          backgroundColor='red'
        >
          <Col><Spinner src={logo} alt='logo'/></Col>
          <Col>Two</Col>
          <Col>Three</Col>
        </Row>
        <Row
          mt='10px'
          backgroundColor="magenta"
          alignItems="center"
          justifyContent="center"
          height='500px'
        >
          <Col>One</Col>
          <Col>Two</Col>
          <Col>Three</Col>
        </Row>
        <Row
          mt='10px'
          backgroundColor="springgreen"
          alignItems="center"
          justifyContent="center"
          height='500px'
        >
          <Col>One</Col>
          <Col>Two</Col>
          <Col>Three</Col>
        </Row>
      </Grid>
    </ShowcaseListWrapper>
  )
}

export default ShowcaseList
