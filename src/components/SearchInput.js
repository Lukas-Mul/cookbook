import { Input } from 'reactstrap';
// import { useState } from 'react';

export function SearchInput({ setValue, ...rest }) {
  return (
    <Input
      // value={value}
      placeholder=""
      onChange={(event) => setValue(event.target.value)}
      {...rest}
    />
  );
}
