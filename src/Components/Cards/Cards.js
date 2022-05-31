import { Container, Flex, VStack } from "@chakra-ui/react";
import BrowserCard from "./BrowserCard";
import "./BrowserCard.css";
import Chrome from "./../images/logo-chrome.svg";
import Firefox from "./../images/logo-firefox.svg";
import Opera from "./../images/logo-opera.svg";

export default function Cards(props) {
  const headingChrome = "Add to Chrome";
  const headingFirefox = "Add to Firefox";
  const headingOpera = "Add to Opera";

  const textChrome = "Minimum version 62";
  const textFirefox = "Minimum version 55";
  const textOpera = "Minimum version 46";

  return (
    <>
      <VStack>
        <Container
          maxW="100vw"
          centerContent="true"
          sx={{
            overflow: "hidden",
          }}
        >
          <Flex wrap="wrap" gap="30px" justify="center">
            <div className="chrome_container">
              <BrowserCard
                image={Chrome}
                heading={headingChrome}
                text={textChrome}
              />
            </div>
            <div className="firefox_container">
              <BrowserCard
                image={Firefox}
                heading={headingFirefox}
                text={textFirefox}
              />
            </div>
            <div className="opera_container">
              <BrowserCard
                image={Opera}
                heading={headingOpera}
                text={textOpera}
              />
            </div>
          </Flex>
        </Container>
      </VStack>
    </>
  );
}
