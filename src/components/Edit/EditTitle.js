import {
  Input,
  Container,
  InputGroup,
  Button,
  InputGroupText,
} from 'reactstrap';
import { useState } from 'react';
// import { useState } from 'react';

export function EditTitle({ editTitle, setEditTitle }) {
  console.log('pc', editTitle);
  return (
    <div>
      <div>
        <InputGroup className="w-100">
          <InputGroupText>Nový název:</InputGroupText>
          <Input
            onChange={(e) => {
              if (!isNaN(parseInt(e.target.value))) {
                setEditTitle(parseInt(e.target.value));
              } else {
                setEditTitle(e.target.value);
              }
              console.log(e);
              console.log(e.target.value);
            }}
            value={editTitle}
          />
        </InputGroup>
      </div>
    </div>
  );
}
