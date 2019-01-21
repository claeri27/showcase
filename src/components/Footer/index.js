import React from 'react'
import styled from 'styled-components';

const FooterBar = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  background: blue;
  align-items: center;
  justify-content: flex-end;
`;

const TextWrapper = styled.section`
  color: white;
  margin-right: 10px;
`;

const Footer = () => {
  return (
    <FooterBar>
      <TextWrapper>
        Created by Christopher Laeri
      </TextWrapper>
    </FooterBar>
  )
}

export default Footer
