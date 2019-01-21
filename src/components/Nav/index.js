import React from 'react'
import styled from 'styled-components';
import { Button } from '@smooth-ui/core-sc'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  background-color: blue;
`;

const TitleWrapper = styled.section`
  margin-left: 5%;
  display: flex;
`;

const ButtonWrapper = styled.section`
  display: flex;
  margin-right: 3%;
`;

const IconWrapper = styled.section`
  align-self: center;
`;

const Title = styled.div`
  font-size: 3em;
  font-family: 'Merienta', cursive;
  font-weight: bold;
  color: white;
`;

const Nav = () => {
  return (
    <Navbar>
      <TitleWrapper>
        <IconWrapper>
          <FontAwesomeIcon icon="igloo" />
        </IconWrapper>
        <Title>Showcase</Title>
      </TitleWrapper>
      <ButtonWrapper>
        <Button mr="10px">Login</Button>
        <Button variant="success">Register</Button>
      </ButtonWrapper>
    </Navbar>
  )
}

export default Nav
