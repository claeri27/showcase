import React from 'react'
import { Toggler, Modal, ModalBody, ModalDialog, ModalContent, ModalCloseButton, ModalHeader, Typography, ModalFooter, Button } from '@smooth-ui/core-sc'

const LoginButton = () => {
  return (
    <Toggler>
      {({ toggled, onToggle }) => (
        <div>
          <Button fontSize="18px" p="20px" backgroundColor="darkblue" onClick={() => onToggle(true)}>
            REGISTER
          </Button>
          <Modal opened={toggled} onClose={() => onToggle(false)}>
            <ModalDialog>
              <ModalContent>
                <ModalCloseButton />
                <ModalHeader>
                  <Typography variant="h5" m={0}>
                    Modal title
                  </Typography>
                </ModalHeader>
                <ModalBody>Modal body</ModalBody>
                <ModalFooter>
                  <Button variant="primary">Save changes</Button>
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
