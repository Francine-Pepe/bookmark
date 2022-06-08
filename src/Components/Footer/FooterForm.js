import { FormControl, Container, Input, Flex } from "@chakra-ui/react";
import React from "react";
import "./Footer.css";
import { useState } from "react";

export default function FooterForm(props) {

   
        const [input, setInput] = useState('')
      
        const handleInputChange = (e) => setInput(e.target.value)
      
        const isError = input === ''

  return (
    <Container minWidth="max-content" color="white" centerContent="true" id="contact">
      <Flex
        align="center"
        gap="4"
        justify="center"
        sx={{
          "@media screen and (max-width: 600px)": {
            flexDirection: "column",
          },
        }}
      >
        <FormControl isInvalid={isError} isRequired>
          <Input
            
            id="email"
            type="email"
            placeholder="Enter your email address"
            isInvalid
            errorBorderColor="hsl(0, 94%, 66%)"
            sx={{
              backgroundColor: "#fff",
              color: "hsl(229, 8%, 60%)",
              height: "4em",
              width: "50vw",
              "@media screen and (min-width: 1000px)": {
                width: "30vw",
                margin: "0 auto",
                display: "flex",
              },
              "@media screen and (max-width: 600px)": {
                width: "78vw",
                margin: "0 auto",
                display: "flex",
              },
              
            }}
          />
          {/* {!isError ? (
        <FormHelperText>
          Enter the email you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )} */}
        </FormControl>
        <div className="contact_button">
          <button type="submit">Contact Us</button>
        </div>
      </Flex>
    </Container>
  );
}
