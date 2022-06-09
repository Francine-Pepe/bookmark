import { Container, VStack } from "@chakra-ui/react";
import Tab3 from './../images/illustration-features-tab-3.svg';
import ImageContentBottom from "./ImageContentBottom";

export default function EasySharingImage(props) {

    const image = Tab3

  return (
    <>
      <VStack>
        <Container maxW="100%" p={0}>
            <ImageContentBottom image={image}/>
        </Container>
      </VStack>
    </>
  );
}
