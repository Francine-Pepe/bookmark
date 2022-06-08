import "./Footer.css";
import { Container, VStack } from "@chakra-ui/react";
import FooterNav from './FooterNav';

export default function Footer() {
  return (
    <>
      <VStack>
        <Container maxW="100%" bg="hsl(229, 31%, 21%)" color="white">
          <FooterNav />
        </Container>
        
      </VStack>
    </>
  );
}
