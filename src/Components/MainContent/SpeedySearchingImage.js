import { Container, VStack } from "@chakra-ui/react";
import Tab2 from './../images/illustration-features-tab-2.svg';
import ImageContentBottom from "./ImageContentBottom";

export default function SpeedySearchingImage(props) {

    const image = Tab2

  return (
    <>
      <VStack>
        <Container maxW="100%"  p={0}>
            <ImageContentBottom image={image}/>
        </Container>
      </VStack>
    </>
  );
}
