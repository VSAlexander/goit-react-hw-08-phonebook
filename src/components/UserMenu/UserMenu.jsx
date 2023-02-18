import { useDispatch, useSelector } from 'react-redux';
import { Flex, Text, Button } from '@chakra-ui/react';

import { selectUser } from 'redux/auth/selectors';
import * as operations from 'redux/auth/operations';

export function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(operations.logOut());
  };

  return (
    <Flex alignItems="center" gap={5}>
      <Text borderRadius="md" fontWeight="semibold">
        Hello, {user.name}
      </Text>
      <Button hover={{ bg: 'gray.100' }} type="button" onClick={handleLogOut}>
        Log Out
      </Button>
    </Flex>
  );
}
