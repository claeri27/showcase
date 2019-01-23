import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Grid, Row, Col } from '@smooth-ui/core-sc'
import axios from 'axios'
import logo from '../../logo.svg'
// import { getMovies, getTopRated, getNowPlaying, getUpcoming } from '../../services/movieapi'

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
  const [movies, setMovies] = useState([])

  const getNowPlaying = async () => {
    if (movies) {
      const BASE_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=aa4028a6dba37dd82b8e185fa521fe08&language=en-US`;
      const resp = await axios.get(BASE_URL);
      setMovies(resp.data.results)
    }
  }

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
            <Button onClick={() => {
              getNowPlaying()
              console.log(movies);
            }}>TEST MOVIES</Button>
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
