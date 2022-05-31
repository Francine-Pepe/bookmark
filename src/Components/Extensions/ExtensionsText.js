import "./Extensions.css";
import { Container, Heading, Text } from "@chakra-ui/react";
// import Buttons from "../Buttons/Buttons";

export default function ExtensionsText(props) {
  const extensions = {
    title: "Download the extension",
    text: "We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.",
  };

//   const buttonProps = {
//     title: "Add & Install Extension",
//   };

//   const buttonStyle = {
//     width: "15em",
//   };

  const styleHeading = {
    fontFamily: "Rubik",
    fontWeight: "500",
  };

  return (
    <>
      <Container className="middle_container" centerContent="true">
        <Heading style={styleHeading}>{extensions.title}</Heading>
        <Text color="hsl(229, 8%, 60%)" fontFamily="Rubik">
          {extensions.text}
        </Text>
        {/* <div className="button_container">
          <Buttons title={buttonProps.title} style={buttonStyle} />
        </div> */}
      </Container>
    </>
  );
}
