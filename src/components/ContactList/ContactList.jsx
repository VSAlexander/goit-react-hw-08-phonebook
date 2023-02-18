import { useDispatch, useSelector } from 'react-redux';
import { Box, Table, Thead, Tbody, Tr, Th } from '@chakra-ui/react';

import * as operations from 'redux/contacts/operations';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';

export function ContactList() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const handleContactRemove = contactID => {
    dispatch(operations.deleteContact(contactID));
  };

  return (
    <Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>Name</Th>
            <Th>Number</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredContacts &&
            filteredContacts.map((contact, index) => (
              <ContactItem
                key={contact.id}
                contact={contact}
                index={index}
                handleContactRemove={handleContactRemove}
              />
            ))}
        </Tbody>
      </Table>
    </Box>
  );
}
