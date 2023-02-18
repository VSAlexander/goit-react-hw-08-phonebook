// import { NavLink } from 'react-router-dom';

// export function AuthNavigation() {
//   return (
//     <div>
//       <NavLink to="/register">Register</NavLink>
//       <NavLink to="/login">Log In</NavLink>
//     </div>
//   );
// }

import { NavLink } from 'react-router-dom';
import { Flex, Box, Link } from '@chakra-ui/react';

export function AuthNavigation() {
  return (
    <Flex alignItems="center" justifyContent="flex-end">
      <Box mr="4">
        <Link
          as={NavLink}
          to="/register"
          p="2"
          borderRadius="md"
          fontWeight="semibold"
          _hover={{ bg: 'gray.100' }}
        >
          Register
        </Link>
      </Box>
      <Box>
        <Link
          as={NavLink}
          to="/login"
          p="2"
          borderRadius="md"
          fontWeight="semibold"
          _hover={{ bg: 'gray.100' }}
        >
          Log In
        </Link>
      </Box>
    </Flex>
  );
}
