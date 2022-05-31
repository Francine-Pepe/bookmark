import "./MainContent.css";
import { Container, VStack, Flex, Box, Heading, Text } from "@chakra-ui/react";

export default function InformationContent(props) {
  const contentTopLeft = {
    title: "A Simple Bookmark Manager",
    text: "A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.",
    buttonFirefox: "Get it on Firefox",
    buttonChrome: "Get it on Chrome",
  };

  const styleHeading = {
    fontFamily: "Rubik",
    fontWeight: "500",
  };

  return (
    <>
      <VStack>
        <Container maxW="100vw" bg="#fff" color="#262626" ps="0" pe="0">
          <Flex maxW="100vw" className="flex_container">
            <Box
              p="4em"
              w="100%"
              height="30em"
              border="solid 1px #262626"
              className="box_container"
              sx={{
                "@media screen and (max-width: 500px)": {
                  padding: "1em",
                  overflow: "hidden",
                },
              }}
            >
              <Heading style={styleHeading}> {contentTopLeft.title} </Heading>
              <Text
                color="hsl(229, 8%, 60%)"
                pt="3em"
                maxW="100vw"
                lineHeight={7}
                fontFamily="Rubik"
              >
                {contentTopLeft.text}
              </Text>
              <div className="button_content">
                <button className="button_chrome">
                  {contentTopLeft.buttonChrome}
                </button>
                <button className="button_firefox">
                  {contentTopLeft.buttonFirefox}
                </button>
              </div>
            </Box>
          </Flex>
        </Container>
      </VStack>
    </>
  );
}
