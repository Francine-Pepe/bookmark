import { Box, Heading, Text } from "@chakra-ui/react";
import "./BrowserCard.css";
import Dots from "./../images/bg-dots.svg";
import Buttons from "../Buttons/Buttons";

export default function BrowserCard(props) {
  const { image } = props;
  const { heading } = props;
  const { text } = props;

  const buttonProps = {
    title: "Add & Install Extension",
  };

  return (
    <>
      <Box bg="white" w="20em" p={4} borderRadius={10} className="card_style" mb={5}>
        <img src={image} alt="card" />
        <Heading as="h4" size="md" color="hsl(229, 31%, 21%)">
          {heading}
        </Heading>
        <Text color="hsl(229, 8%, 60%)">{text} </Text>
        <img src={Dots} alt="dots" />
        <Buttons title={buttonProps.title} />
      </Box>
    </>
  );
}
