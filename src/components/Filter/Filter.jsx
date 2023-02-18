import { useDispatch, useSelector } from 'react-redux';
import { Input, Box } from '@chakra-ui/react';

import { changeFilter } from 'redux/contacts/filter.slice';
import { selectFilter } from 'redux/contacts/selectors';

export function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    const searchedContact = event.target.value.trim().toLowerCase();
    dispatch(changeFilter(searchedContact));
  };

  return (
    <Box className="filter" p={2}>
      <Input
        value={filter}
        placeholder="Find contacts by name"
        onChange={handleFilterChange}
      />
    </Box>
  );
}
