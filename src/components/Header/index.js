import "./index.css";
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <img className="website-logo" src="logo.png" alt="website logo" />
        <Button onClick={onOpen} colorScheme="blue" color='white' borderRadius='12px'>Log in</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Verify your number<br/></ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              hii
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose} >
                continue
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </nav>
  );
}
export default Header;
