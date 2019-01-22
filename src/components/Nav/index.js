import React from 'react'
import styled from 'styled-components';
import { Box } from '@smooth-ui/core-sc'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import LoginButton from '../../components/LoginButton'
import RegisterButton from '../../components/RegisterButton'

library.add(faLightbulb)

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
  margin-right: 20px;
`;

const Title = styled.div`
  font-size: 3em;
  font-family: 'Merienta', cursive;
  font-weight: bold;
  color: white;
`;

const Nav = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      height="80px"
      alignItems="center"
      justifyContent="space-between"
      // backgroundImage="linear-gradient(to bottom right, blue, lightblue)"
      backgroundColor="darkcyan"
      >
      <TitleWrapper>
        <IconWrapper>
          <FontAwesomeIcon icon="lightbulb" color="yellow" size="2x" />
        </IconWrapper>
        <Title>Showcase</Title>
      </TitleWrapper>
      <ButtonWrapper>
        <LoginButton />
        <RegisterButton />
      </ButtonWrapper>
    </Box>
  )
}

export default Nav
