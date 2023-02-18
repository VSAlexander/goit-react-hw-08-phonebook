import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input, Stack, Button, FormControl, FormLabel } from '@chakra-ui/react';
import * as operations from 'redux/auth/operations';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        throw new Error();
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(
      operations.logIn({
        email: email,
        password: password,
      })
    );
    setEmail('');
    setPassword('');
  };

  return (
    <Stack spacing={4} as="form" onSubmit={handleSubmit} autoComplete="off">
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input name="email" type="mail" value={email} onChange={handleChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
        />
      </FormControl>
      <Button type="submit">Log In</Button>
    </Stack>
  );
}
