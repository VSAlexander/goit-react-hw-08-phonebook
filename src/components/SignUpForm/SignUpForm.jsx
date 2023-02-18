import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input, Stack, Button, FormControl, FormLabel } from '@chakra-ui/react';

import * as operations from 'redux/auth/operations';

export function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
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
      operations.register({
        name: name,
        email: email,
        password: password,
      })
    );
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Stack spacing={4} as="form" onSubmit={handleSubmit} autoComplete="off">
      <FormControl isRequired>
        <FormLabel>Username</FormLabel>
        <Input name="name" type="text" value={name} onChange={handleChange} />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <Input
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
        />
      </FormControl>
      <Button type="submit">Sign Up</Button>
    </Stack>
  );
}

// import { useState } from 'react';
// import { useDispatch } from 'react-redux';

// import {
//   Stack,
//   Input,
//   InputGroup,
//   InputLeftElement,
//   Button,
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   FormHelperText,
// } from '@chakra-ui/react';

// import * as operations from 'redux/auth/operations';

// export function SignUpForm() {
//   const [name, setName] = useState(null);
//   const [email, setEmail] = useState(null);
//   const [password, setPassword] = useState(null);

//   const dispatch = useDispatch();

//   const handleChange = event => {
//     const { name, value } = event.target;

//     switch (name) {
//       case 'name':
//         setName(value);
//         break;
//       case 'email':
//         setEmail(value);
//         break;
//       case 'password':
//         setPassword(value);
//         break;
//       default:
//         throw new Error();
//     }
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     dispatch(
//       operations.register({
//         name: name,
//         email: email,
//         password: password,
//       })
//     );
//     setName('');
//     setEmail('');
//     setPassword('');
//   };

//   return (
//     <form onSubmit={handleSubmit} autoComplete="off">
//       <label>
//         Username
//         <input type="text" name="name" onChange={handleChange} />
//       </label>
//       <label>
//         Email
//         <input type="email" name="email" onChange={handleChange} />
//       </label>
//       <label>
//         Password
//         <input type="password" name="password" onChange={handleChange} />
//       </label>
//       <button type="submit">Sign Up</button>
//     </form>
//   );
// }
