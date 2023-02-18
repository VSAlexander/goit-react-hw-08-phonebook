import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

import * as operations from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleContactCreate = (name, number) => {
    const duplicateName = contacts.find(contact => contact.name === name);
    if (duplicateName) {
      alert(name + ' is already in contacts.');
      return;
    }
    const contact = { name, number };
    dispatch(operations.addContact(contact));
  };

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        throw new Error();
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    handleContactCreate(name, number);

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl mb={3}>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input
          value={name}
          type="text"
          name="name"
          id="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="number">Number</FormLabel>
        <Input
          value={number}
          type="tel"
          name="number"
          id="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </FormControl>
      <Button type="submit" colorScheme="teal" mt={4}>
        Add contact
      </Button>
    </form>
  );
}
