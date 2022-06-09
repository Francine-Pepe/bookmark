import "./../MainContent/MainContent.css";
import { Container, VStack, Flex, Box, Heading, Text } from "@chakra-ui/react";

export default function Informations(props) {
  const { heading } = props;
  const { text } = props;

  const styleHeading = {
    fontFamily: "Rubik",
    fontWeight: "500",
  };

  return (
    <>
      <VStack>
        <Container
          maxW="100vw"
          bg="transparent"
          color="#262626"
          ps="0"
          pe="0"
          centerContent="true"
        >
          <Flex maxW="100vw" className="flex_container" align="left">
            <Box
              p="4em"
              w="100%"
              h="17em"
              className="box_container"
              textAlign="left"
              sx={{
                "@media screen and (max-width: 949px)": {
                  width: "100vw",
                  paddingTop: "2em",
                  textAlign: "center",
                  margin: "0 auto",
                },

                "@media screen and (max-width: 761px)": {
                  padding: "1em 0",
                  margin: "0 auto",
                  overflow: "hidden",
                },
              }}
            >
              <Heading style={styleHeading}> {heading} </Heading>
              <Text
                color="hsl(229, 8%, 60%)"
                pt="2em"
                // pl="2em"
                pr="2em"
                mb="2em"
                lineHeight={7}
                fontFamily="Rubik"
                textAlign="left"
                sx={{
                  "@media screen and (max-width: 949px)": {
                    width: "60vw",
                    paddingTop: "2em",
                    textAlign: "center",
                    margin: "0 auto",
                  },
                }}
              >
                {text}
              </Text>
            </Box>
          </Flex>
        </Container>
      </VStack>
    </>
  );
}
