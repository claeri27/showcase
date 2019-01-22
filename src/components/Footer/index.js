import React from 'react'
import styled from 'styled-components';
import logo from '../../logo.svg'
import FooterBar from './styles/FooterBar'
import Spinner from './styles/Spinner'
import MadeWith from './styles/MadeWith'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebook, faTwitter, faInstagram, faGithub)

const TextWrapper = styled.section`
  color: white;
  font-family: 'Roboto', sans-serif;
  margin-left: 25px;
  margin-right: 25px;
  font-size: 18px;
`;

const ReactText = styled.div`
  color: orange;
  font-size: 1.3em;
  font-weight: bold;
`;

const ButtonsWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
`;

const Text = styled.section`
  width: 250px;
  color: white;
  text-align: left;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
`;

const FacebookWrapper = styled.div`
  padding: 10px;
`;

const InstagramWrapper = styled.div`
  padding: 10px;
`;
const TwitterWrapper = styled.div`
  padding: 10px;
`;

const GithubWrapper = styled.div`
  padding: 10px;
`;


const Footer = () => {
  return (
    <FooterBar>
      <MadeWith>
        <Spinner src={logo} alt='react-spinner'/>
        <Text>Made with <ReactText>React</ReactText></Text>
      </MadeWith>
      <ButtonsWrapper>
        <FacebookWrapper>
          <FontAwesomeIcon color="white" size="2x" icon={['fab', 'facebook']}/>
        </FacebookWrapper>
        <TwitterWrapper>
          <FontAwesomeIcon color="white" size="2x" icon={['fab', 'twitter']}/>
        </TwitterWrapper>
        <InstagramWrapper>
          <FontAwesomeIcon color="white" size="2x" icon={['fab', 'instagram']}/>
        </InstagramWrapper>
        <GithubWrapper>
          <FontAwesomeIcon color="white" size="2x" icon={['fab', 'github']}/>
        </GithubWrapper>
        <TextWrapper>
          Copyright @ 2019
        </TextWrapper>
      </ButtonsWrapper>
    </FooterBar>
  )
}

export default Footer
