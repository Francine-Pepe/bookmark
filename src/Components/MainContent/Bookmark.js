import { Container, VStack } from "@chakra-ui/react";
import MoreInfoButton from "../Buttons/MoreInfoButton";
import Informations from "./../Informations/Informations";

export default function Bookmark(props) {
  const heading = "Bookmark in one click";

  const text =
    "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";

  return (
    <>
      <VStack>
        <Container maxW="100%" ps={0} pe={0}>
          <Informations heading={heading} text={text} />
          <div className="button_more_info">
            <MoreInfoButton />
          </div>
        </Container>
      </VStack>
    </>
  );
}
