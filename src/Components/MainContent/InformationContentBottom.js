import "./MainContent.css";
import { Container, VStack, Flex, Box, Heading, Text } from "@chakra-ui/react";
import Buttons from "../Buttons/Buttons";

export default function InformationContentBottom() {
  const contentTopLeft = {
    title: "Bookmark in one click",
    text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    button: "More Info",
  };

  const styleHeading = {
    fontFamily: "Rubik",
    fontWeight: "500",
  };

  const buttonStyle = {
    width: "10em",
  };

  return (
    <>
      <VStack>
        <Container
          maxW="100vw"
          bg="#fff"
          color="#262626"
          ps="0"
          pe="0"
          mt="3em"
        >
          <Flex maxW="100vw" className="flex_container_bottom">
            <Box
              p="4em"
              w="100%"
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
                pt="2em"
                pr="5em"
                mb="2em"
                maxW="100vw"
                fontFamily="Rubik"
                sx={{
                  "@media screen and (max-width: 900px)": {
                    paddingRight: "0",
                  },
                }}
              >
                {contentTopLeft.text}
              </Text>
              <div className="button_container">
                <Buttons title={contentTopLeft.button} style={buttonStyle} />
              </div>
            </Box>
          </Flex>
        </Container>
      </VStack>
    </>
  );
}
