import { Container, VStack, Heading, Flex } from "@chakra-ui/react";
import FooterForm from "./FooterForm";

export default function BannerFooter(props) {
  const heading = {
    text: "35,000+ already joined",
  };
  const text = {
    text: "Stay up-to-date with what we’re doing",
  };

  const styleBanner = {
    color: "#fff",
    textAlign: "center",
  };

  return (
    <>
      <VStack>
        <Container
          maxW="100%"
          height="25em"
          bg="hsl(231, 69%, 60%)"
          mt="8em"
          centerContent="true"
          gap="2em"
          p={5}
          overflow="hidden"
        >
          <Heading
            as="h6"
            size="xs"
            style={styleBanner}
            sx={{ letterSpacing: "0.5em", marginTop: "4em" }}
          >
            {heading.text}
          </Heading>
          <Heading
            as="h2"
            size="xl"
            style={styleBanner}
            w="35vw"
            sx={{
              "@media screen and (max-width: 999px)": {
                width: "100vw",
                padding: "0 2em",
              },
            }}
          >
            {text.text}
          </Heading>
          <FooterForm />
        </Container>
      </VStack>
    </>
  );
}
