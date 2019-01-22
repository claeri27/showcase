import React from 'react'
import { Label, Input, ControlFeedback, FormGroup, Toggler, Modal, ModalBody, ModalDialog, ModalContent, ModalCloseButton, ModalHeader, Typography, ModalFooter, Button } from '@smooth-ui/core-sc'
import ReactDOM from 'react-dom';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import styled from 'styled-components';

const responseFacebook = (response) => {
  console.log(response);
}

// ReactDOM.render(
//   <FacebookLogin
//     appId="1088597931155576"
//     autoLoad={true}
//     fields="name,email,picture"
//     onClick={componentClicked}
//     callback={responseFacebook} />,
//   document.getElementById('demo')
// );

const responseGoogle = (response) => {
  console.log(response);
}

const LoginButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginButton = () => {
  return (
    <Toggler>
      {({ toggled, onToggle }) => (
        <div>
          <Button fontSize="18px" p="20px" mr="10px" variant="primary" onClick={() => onToggle(true)}>
            LOGIN
          </Button>
          <Modal opened={toggled} onClose={() => onToggle(false)}>
            <ModalDialog>
              <ModalContent backgroundColor="white">
                <ModalCloseButton />
                <ModalHeader alignItems="center" justifyContent="center">
                  <Typography fontFamily="Roboto" variant="h4" m={0}>
                    Login with Google or Email
                  </Typography>
                </ModalHeader>
                <ModalBody>
                  <LoginButtons>
                    <GoogleLogin
                      clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                      buttonText="Login with Google"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      theme="dark"
                    />
                  </LoginButtons>
                  <FormGroup>
                    <Label mt="20px" htmlFor="form-group-input-name">Email:</Label>
                    <Input control id="form-group-input-name" />
                    <Label mt="20px" htmlFor="form-group-input-name">Password:</Label>
                    <Input control id="form-group-input-email" />
                  </FormGroup>
                </ModalBody>
                <ModalFooter alignSelf="center">
                  <Button variant="success">Submit</Button>
                  <Button variant="danger" onClick={() => onToggle(false)}>
                    Cancel
                  </Button>
                </ModalFooter>
              </ModalContent>
            </ModalDialog>
          </Modal>
        </div>
      )}
    </Toggler>
  )
}

export default LoginButton
