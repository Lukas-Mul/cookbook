import { Input } from 'reactstrap';
// import { useState } from 'react';

export function SearchInput({ setValue, ...rest }) {
  return (
      <Input
        // value={value}
        placeholder="Vyhledat recept..."
        onChange={(event) => setValue(event.target.value)}
        {...rest}
      />
  );
}
