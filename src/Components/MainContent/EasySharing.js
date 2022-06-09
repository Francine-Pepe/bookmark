import { Container, VStack } from "@chakra-ui/react";
import MoreInfoButton from "../Buttons/MoreInfoButton";
import Informations from "./../Informations/Informations";

export default function EasySharing(props) {
  const heading = "Share your bookmarks";

  const text =
    " Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";

  return (
    <>
      <VStack>
        <Container maxW="100%">
          <Informations heading={heading} text={text} />
          <div className="button_more_info">
            <MoreInfoButton />
          </div>
        </Container>
      </VStack>
    </>
  );
}
