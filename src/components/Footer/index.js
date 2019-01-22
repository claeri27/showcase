import React from 'react'
import styled from 'styled-components';
import logo from '../../logo.svg'

const FooterBar = styled.div`
  display: flex;
  flex-direction: row;
  height: 100px;
  background: blue;
  align-items: center;
  justify-content: space-between;
`;

const TextWrapper = styled.section`
  color: white;
  margin-right: 2%;
  font-family: 'Roboto', sans-serif;
  width: 140px;
`;

const MadeWith = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

const ReactText = styled.div`
  color: orange;
  font-size: 1.3em;
  font-weight: bold;
`;

const Spinner = styled.img`
  animation: spin infinite 20s linear;
  max-width: 100px;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
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
      <TextWrapper>
        Copyright @ 2019
      </TextWrapper>
    </FooterBar>
  )
}

export default Footer
