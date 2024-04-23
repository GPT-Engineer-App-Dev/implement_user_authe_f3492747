import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Container } from "@chakra-ui/react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login attempt with:", username, password);
  };

  return (
    <Container centerContent>
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
        <FormControl isRequired>
          <FormLabel>Username</FormLabel>
          <Input placeholder="Enter your username" onChange={(e) => setUsername(e.target.value)} />
          <FormLabel>Password</FormLabel>
          <Input placeholder="Enter your password" type="password" onChange={(e) => setPassword(e.target.value)} />
          <Button mt={4} colorScheme="teal" onClick={handleLogin}>Login</Button>
        </FormControl>
      </Box>
    </Container>
  );
}

export default Login;