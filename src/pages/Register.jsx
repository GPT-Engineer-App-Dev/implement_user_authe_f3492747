import React, { useState } from "react";
import { Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    console.log("Registering:", username, email, password);
  };

  return (
    <Box>
      <h1>Registration Page</h1>
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
        <FormControl isRequired>
          <FormLabel>Username</FormLabel>
          <Input placeholder="Enter your username" onChange={(e) => setUsername(e.target.value)} />
          <FormLabel>Email</FormLabel>
          <Input placeholder="Enter your email" type="email" onChange={(e) => setEmail(e.target.value)} />
          <FormLabel>Password</FormLabel>
          <Input placeholder="Enter your password" type="password" onChange={(e) => setPassword(e.target.value)} />
          <Button mt={4} colorScheme="teal" onClick={handleRegister}>
            Register
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
}

export default Register;
