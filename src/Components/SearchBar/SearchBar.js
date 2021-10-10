import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  SearchBarButton,
  SearchBarForm,
  SearchBarButtonLabel,
  SearchFormInput,
} from './SearchBar.styled';

export default function SearchBar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const onInputChange = e => {
    setSearchQuery(e.currentTarget.value);
  };

  const onInputSubmit = e => {
    e.preventDefault();
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <SearchBarForm onSubmit={onInputSubmit}>
      <SearchBarButton type="submit">
        <SearchBarButtonLabel>Search</SearchBarButtonLabel>
      </SearchBarButton>

      <SearchFormInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={searchQuery}
        onChange={onInputChange}
      />
    </SearchBarForm>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
