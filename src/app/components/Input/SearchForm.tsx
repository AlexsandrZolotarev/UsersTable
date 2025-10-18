import React from 'react';

function SearchForm() {
  return (
    <form role="search" aria-label="Поиск по пользователям" className="toolbar__form">
      <label htmlFor="search-users" className="visually-hidden">
        Поиск
      </label>
      <input
        type="search"
        id="search-users"
        name="search"
        placeholder="Найти пользователя"
        className="toolbar__form-search"
      />
    </form>
  );
}

export default SearchForm;
