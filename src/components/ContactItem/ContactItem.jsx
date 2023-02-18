import PropTypes from 'prop-types';
import { Button, Tr, Td } from '@chakra-ui/react';

export function ContactItem({ contact, index, handleContactRemove }) {
  const handleDelete = () => {
    handleContactRemove(contact.id);
  };
  return (
    <Tr key={contact.id}>
      <Td>{index + 1}</Td>
      <Td>{contact.name}</Td>
      <Td>{contact.number}</Td>
      <Td>
        <Button onClick={handleDelete} colorScheme="red" size="xs">
          Delete
        </Button>
      </Td>
    </Tr>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  handleContactRemove: PropTypes.func.isRequired,
};
