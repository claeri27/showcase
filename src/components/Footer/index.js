import React from 'react'
import styled from 'styled-components';
import logo from '../../logo.svg'
import FooterBar from './styles/FooterBar'
import Spinner from './styles/Spinner'
import MadeWith from './styles/MadeWith'

const TextWrapper = styled.section`
  color: white;
  font-family: 'Roboto', sans-serif;
`;

const ReactText = styled.div`
  color: orange;
  font-size: 1.3em;
  font-weight: bold;
`;

const ButtonsWrapper = styled.section`
  margin-right: 2%;
  width: 140px;
`;

const Text = styled.section`
  width: 200px;
  color: white;
  text-align: left;
  font-family: 'Roboto', sans-serif;
`;

const Footer = () => {
  return (
    <FooterBar>
      <MadeWith>
        <Spinner src={logo} alt='react-spinner'/>
        <Text>Made with <ReactText>React</ReactText></Text>
      </MadeWith>
      <ButtonsWrapper>
        <TextWrapper>
          Copyright @ 2019
        </TextWrapper>
      </ButtonsWrapper>
    </FooterBar>
  )
}

export default Footer
