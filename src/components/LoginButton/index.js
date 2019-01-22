import React from 'react'
import { Toggler, Modal, ModalBody, ModalDialog, ModalContent, ModalCloseButton, ModalHeader, Typography, ModalFooter, Button } from '@smooth-ui/core-sc'

const LoginButton = () => {
  return (
    <Toggler>
      {({ toggled, onToggle }) => (
        <div>
          <Button mr="10px" variant="primary" onClick={() => onToggle(true)}>
            Login
          </Button>
          <Modal opened={toggled} onClose={() => onToggle(false)}>
            <ModalDialog>
              <ModalContent>
                <ModalCloseButton />
                <ModalHeader>
                  <Typography variant="h4" m={0}>
                    Login with Google or Email
                  </Typography>
                </ModalHeader>
                <ModalBody>
                  Body stuff here
                </ModalBody>
                <ModalFooter alignSelf="center">
                  <Button variant="primary">Accept</Button>
                  <Button variant="secondary" onClick={() => onToggle(false)}>
                    Close
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
