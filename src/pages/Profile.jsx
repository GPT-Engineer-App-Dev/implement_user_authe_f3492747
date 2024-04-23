import React from "react";
import { Box, Container, Heading } from "@chakra-ui/react";

function Profile() {
  return (
    <Container centerContent>
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
        <Heading>Welcome to Your Profile!</Heading>
      </Box>
    </Container>
  );
}

export default Profile;