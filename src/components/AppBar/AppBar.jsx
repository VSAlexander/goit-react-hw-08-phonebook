// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from 'redux/auth/selectors';

// import { Navigation } from 'components/Navigation/Navigation';
// import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
// import { UserMenu } from 'components/UserMenu/UserMenu';

// export function AppBar() {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   return (
//     <header>
//       <Navigation />
//       {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
//     </header>
//   );
// }

import { Box, Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

import { Navigation } from 'components/Navigation/Navigation';
import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
import { UserMenu } from 'components/UserMenu/UserMenu';

export function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box as="header" boxShadow="md" py="2" px="4" mb="8">
      <Flex justifyContent="space-between" alignItems="center">
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
      </Flex>
    </Box>
  );
}
