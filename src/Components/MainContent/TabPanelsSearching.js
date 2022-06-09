import { Container, VStack, Flex } from "@chakra-ui/react";
import MoreInfoButton from "../Buttons/MoreInfoButton";
import Informations from "./../Informations/Informations";
import "./MainContent.css";

export default function TabPanelsSearching(props) {
  const heading = "Intelligent Search";

  const text =
    " Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";

  return (
    <>
      <VStack>
        <Container maxW="100%">
          <div className="searching_container">
            <Informations heading={heading} text={text} />
            <div className="button_more_info">
              <MoreInfoButton />
            </div>
          </div>
        </Container>
      </VStack>
    </>
  );
}
