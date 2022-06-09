import { Container, VStack } from "@chakra-ui/react";
import Tab1 from './../images/illustration-features-tab-1.svg';
import ImageContentBottom from "./ImageContentBottom";

export default function BookmarkImage(props) {

    const image = Tab1

  return (
    <>
      <VStack>
        <Container maxW="100%"  p={0} m={0}>
            <ImageContentBottom image={image}/>
        </Container>
      </VStack>
    </>
  );
}
