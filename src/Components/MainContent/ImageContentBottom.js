import "./MainContent.css";
import {
  Container,
  VStack,
  Flex,
  Box,
  
} from "@chakra-ui/react";
import ImageBottom from "./../images/illustration-features-tab-1.svg";

export default function ImageContentBottom() {
  return (
    <>
      <VStack>
        <Container maxW="100vw" bg="#fff" color="#262626" ps="0" pe="0">
          <Flex maxW="100vw" className="flex_container">
            <Box
              border="solid 1px #262626"
              // p="10em 0 2em 2em"
              p="0"
              maxW="100vw"
              height="30em"
            >
              <div className="background_parent_bottom">
                <div className="background_image_bottom">
                  <img src={ImageBottom} alt="" />
                </div>
              </div>
            </Box>
          </Flex>
        </Container>
      </VStack>
    </>
  );
}
