import "./MainContent.css";
import {
  Container,
  VStack,
  Flex,
  Box,
  
} from "@chakra-ui/react";
import ImageTop from "./../images/illustration-hero.svg";

export default function ImageContent() {
  return (
    <>
      <VStack>
        <Container maxW="100vw" bg="#fff" color="#262626" ps="0" pe="0" m="0" >
          <Flex maxW="100vw" className="flex_container">
            <Box
              // p="10em 0 2em 2em"
              p="0"
              maxW="100vw"
              height="30em"
            >
              <div className="background_parent">
                <div className="background_image">
                  <img src={ImageTop} alt="" />
                </div>
              </div>
            </Box>
          </Flex>
        </Container>
      </VStack>
    </>
  );
}
