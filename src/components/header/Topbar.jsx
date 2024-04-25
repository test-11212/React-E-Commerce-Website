import {
  Box,
  Container,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import mixpanel from "mixpanel-browser";
import React from "react";
import profileIcon from "../../assets/images/icons/profile.png";
import Login from "../Login";
import Register from "../Register";
export default function Topbar() {
  const {
    isOpen: isLoginOpen,
    onOpen: onLoginOpen,
    onClose: onLoginClose,
  } = useDisclosure();
  const {
    isOpen: isRegisterOpen,
    onOpen: onRegisterOpen,
    onClose: onRegisterClose,
  } = useDisclosure();
  return (
    <Box bg="var(--darkBgColor)">
      <Container maxW="1140px">
        <Flex justify="space-between" align="center" py="8px">
          <Text
            color="var(--lightTextColor4)"
            fontSize={{ base: "12px", md: "14px", xl: "16px" }}
            onClick={() => {
              mixpanel.track("contact_us_clicked", {
                Location: "Topbar",
                date: new Date().toISOString(),
              });
            }}
          >
            Available 24/7 at
            <Text as="span" fontWeight="900">
              (405) 555-0128
            </Text>
          </Text>
          <Flex gap="10px" justify="center" align="center">
            <Box>
              <Image objectFit="contain" src={profileIcon} />
            </Box>
            <Flex color="var(--lightTextColor4)">
              <Text
                onClick={() => {
                  onLoginOpen();
                  mixpanel.track("login_button_clicked", {
                    Location: "Topbar",
                    date: new Date().toISOString(),
                  });
                }}
                _hover={{ cursor: "pointer" }}
              >
                Login
              </Text>
              <Modal isOpen={isLoginOpen} onClose={onLoginClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader
                    textAlign="center"
                    fontSize="28px"
                    fontWeight="700"
                  >
                    Sign in
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Login
                      onSignUpClick={onRegisterOpen}
                      onCloseLoginModal={onLoginClose}
                    />
                  </ModalBody>
                </ModalContent>
              </Modal>
              <Text as="span" mx={1}>
                /
              </Text>
              <Text
                onClick={() => {
                  onRegisterOpen();
                  mixpanel.track("register_button_clicked", {
                    Location: "Topbar",
                    date: new Date().toISOString(),
                  });
                }}
                _hover={{ cursor: "pointer" }}
              >
                Register
              </Text>
              <Modal isOpen={isRegisterOpen} onClose={onRegisterClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader
                    textAlign="center"
                    fontSize="28px"
                    fontWeight="700"
                  >
                    Sign up
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Register
                      onSignInClick={onLoginOpen}
                      onCloseSignInModal={onRegisterClose}
                    />
                  </ModalBody>
                </ModalContent>
              </Modal>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
