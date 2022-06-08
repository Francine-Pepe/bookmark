import { Container, VStack } from "@chakra-ui/react";
import Informations from "../Informations/Informations";
import AccordionQuestions from "./AccordionQuestions";

export default function FrequentlyQuestions(props) {
  const headingQuestions = " Frequently Asked Questions";
  const textQuestions =
    "Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.";

  return (
    <>
      <VStack>
        <Container maxW="100%" id="#pricing">
          <Informations heading={headingQuestions} text={textQuestions} />
          <AccordionQuestions />
        </Container>
      </VStack>
    </>
  );
}
