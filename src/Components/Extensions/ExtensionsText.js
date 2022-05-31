import "./Extensions.css";
import { Container, Heading, Text } from "@chakra-ui/react";

export default function ExtensionsText() {
  const extensions = {
    title: "Download the extension",
    text: "We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.",
  };
  
  return (
    <>
      <Container className="middle_container" centerContent="true">
        <Heading>{extensions.title}</Heading>
        <Text>{extensions.text}</Text>
      </Container>
    </>
  );
}
