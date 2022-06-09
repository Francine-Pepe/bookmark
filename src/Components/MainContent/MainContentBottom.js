import "./MainContent.css";
import { Container, VStack, Flex } from "@chakra-ui/react";
// import ImageContentBottom from "./ImageContentBottom";
// import InformationContentBottom from "./InformationContentBottom";

export default function MainContentBottom() {
  return (
    <>
      <VStack>
        <Container maxW="100vw" bg="#fff" color="#262626" ps="0" pe="0">
          <Flex maxW="100vw" className="flex_container_bottom">
            {/* <ImageContentBottom />
            <InformationContentBottom /> */}
          </Flex>
        </Container>
      </VStack>
    </>
  );
}
