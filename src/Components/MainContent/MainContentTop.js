import "./MainContent.css";
import { Container, VStack, Flex } from "@chakra-ui/react";
import InformationContent from "./InformationContent";
import ImageContent from "./ImageContent";

export default function MainContentTop() {
  return (
    <>
      <VStack>
        <Container maxW="100vw" bg="#fff" color="#262626" ps="0" pe="0" >
          <Flex maxW="100vw" className="flex_container">
            <InformationContent />
            <ImageContent />
          </Flex>
        </Container>
      </VStack>
    </>
  );
}
