import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Flex, Box, Heading } from '@chakra-ui/react';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

import * as operations from 'redux/contacts/operations';
// import { selectContacts } from 'redux/contacts/selectors';

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Flex justifyContent="space-around">
        <Box>
          <Box mb={10}>
            <Heading mb={3}>Contacts</Heading>
            <Filter />
          </Box>
          <Box>
            <ContactList />
          </Box>
        </Box>
        <Box>
          <Heading mb={3}>Create new contact</Heading>
          <ContactForm />
        </Box>
      </Flex>
    </>
  );
}
