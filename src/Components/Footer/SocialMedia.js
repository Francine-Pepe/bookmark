import { Box, Container, Flex, Spacer } from "@chakra-ui/react";
import Facebook from "./../images/icon-facebook.svg";
import Twitter from "./../images/icon-twitter.svg";

export default function SocialMedia() {
  const socialIcons = [
    {
      icon: Facebook,
    },
    {
      icon: Twitter,
    },
  ];

  return (
    <>
      <Container pe={0}>
        <Flex 
          sx={{
            "@media screen and (max-width: 950px)": {
              gap: "30px",
            },
          }}
        >
          {socialIcons.map((socialIcons, index) => (
            <Box w="5vw" className="social_media_container" >
              <a href="/"><img src={socialIcons.icon} alt="social media icon" /></a>
              <Spacer />
            </Box>
          ))}
        </Flex>
      </Container>
    </>
  );
}
