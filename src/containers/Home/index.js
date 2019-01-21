import React from 'react'
import Nav from '../../components/Nav'
import styled from 'styled-components';
import { Grid, Row, Col } from '@smooth-ui/core-sc'

const HomeWrapper = styled.div`
`;

const Home = () => {
  return(
    <HomeWrapper>
      <Nav />
      <Grid mt="20px">
        <Row
          alignItems="center"
          justifyContent="center"
          height='200px'
          backgroundColor='red'
        >
          <Col backgroundColor="red">One</Col>
          <Col>Two</Col>
          <Col>Three</Col>
        </Row>
        <Row
          mt='10px'
          backgroundColor="magenta"
          alignItems="center"
          justifyContent="center"
          height='200px'
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
          height='200px'
        >
          <Col>One</Col>
          <Col>Two</Col>
          <Col>Three</Col>
        </Row>
      </Grid>
    </HomeWrapper>
  )
}

export default Home
