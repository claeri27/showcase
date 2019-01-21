import React from 'react'
import Nav from '../../components/Nav'
import styled from 'styled-components';
import Footer from '../../components/Footer'
import ShowcaseList from '../../components/ShowcaseList'

const HomeWrapper = styled.div`
  background-color: grey;
`;

const Home = () => {
  return(
    <HomeWrapper>
      <Nav />
      <ShowcaseList />
      <Footer />
    </HomeWrapper>
  )
}

export default Home
