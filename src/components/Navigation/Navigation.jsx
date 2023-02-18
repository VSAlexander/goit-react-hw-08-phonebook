import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Flex, Box, Link, Spacer } from '@chakra-ui/react';

export function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Flex alignItems="center">
      <Box mr="4">
        <Link
          as={NavLink}
          to="/"
          p="2"
          borderRadius="md"
          fontWeight="semibold"
          _hover={{ bg: 'gray.100' }}
        >
          Home
        </Link>
      </Box>
      <Spacer />
      {isLoggedIn && (
        <Box p="2">
          <Link
            as={NavLink}
            to="/contacts"
            p="2"
            borderRadius="md"
            fontWeight="semibold"
            _hover={{ bg: 'gray.100' }}
          >
            Contacts
          </Link>
        </Box>
      )}
    </Flex>
  );
}
