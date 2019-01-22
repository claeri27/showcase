import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from '@smooth-ui/core-sc'

const ShowcaseListWrapper = styled.div`
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
          mb="20px"
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
          mb="20px"
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
          mb="20px"
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
