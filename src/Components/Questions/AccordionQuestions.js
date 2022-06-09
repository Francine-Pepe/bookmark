import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  VStack,
  Container,
  Flex,
} from "@chakra-ui/react";
import MoreInfoButton from "../Buttons/MoreInfoButton";

export default function AccordionQuestions() {
  const accordionData = [
    {
      title: "What is Bookmark?",
      text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
    },
    {
      title: "How can I request a new browser?",
      text: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
    },
    {
      title: " Is there a mobile app? ",
      text: "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
    },
    {
      title: "What about other Chromium browsers?",
      text: "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
    },
  ];

  const styleTabs = {
    _focus: {
      borderTop: "none",
      borderLeft: "none",
      borderRight: "none",
      color: "hsl(229, 31%, 21%)",
    },
    _active: {
      backgroundColor: "trasparent",
    },
    _hover: {
      backgroundColor: "trasparent",
      color: "hsl(0, 94%, 66%)",
    },
  };

  return (
    <>
      <VStack>
        <Container
          maxW="50vw"
          sx={{
            "@media screen and (max-width: 1200px)": {
              maxWidth: "70vw",
            },
            "@media screen and (max-width: 500px)": {
              maxWidth: "90vw",
            },
          }}
        >
          {accordionData.map((accordionData, index) => (
            <Accordion allowToggle key={index}>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton sx={styleTabs}>
                        <Box flex="1" textAlign="left" p={2}>
                          {accordionData.title}
                        </Box>
                        {isExpanded ? (
                          <AccordionIcon color="hsl(0, 94%, 66%)" />
                        ) : (
                          <AccordionIcon color="hsl(231, 69%, 60%)" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>{accordionData.text}</AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          ))}
          <Flex alignItems="center" justify="center" mt={8}>
            <MoreInfoButton />
          </Flex>
        </Container>
      </VStack>
    </>
  );
}
