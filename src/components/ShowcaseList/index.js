import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from '@smooth-ui/core-sc'

const ShowcaseListWrapper = styled.div`
`;

const ShowcaseList = () => {
  return (
    <ShowcaseListWrapper>
      <Grid mt="20px" mb="20px">
        <Row
          alignItems="center"
          justifyContent="center"
          height='500px'
          backgroundColor='red'
        >
          <Col>One</Col>
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
