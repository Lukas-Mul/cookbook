import {
  Input,
  Container,
  InputGroup,
  Button,
  InputGroupText,
} from 'reactstrap';
import { useState } from 'react';
// import { useState } from 'react';

export function PreparationTime({ preparationTime, setPreparationTime }) {
  console.log("pc", preparationTime);
  return (
    <div>
      <div>
        <InputGroup className="w-100">
          <InputGroupText>Čas přípravy</InputGroupText>
          <Input
            onChange={(e) => {
              if (!isNaN(parseInt(e.target.value))) {
                setPreparationTime(parseInt(e.target.value));
              } else {
                setPreparationTime(e.target.value);
              }
              console.log(e);
              console.log(e.target.value);
            }}
            value={preparationTime}
          />
          <Button
            onClick={() => {
              setPreparationTime(preparationTime + 1);
            }}
            className="border"
          >
            +
          </Button>
          <Button
            onClick={() => {
              setPreparationTime(preparationTime - 1);
            }}
            className="border"
          >
            -
          </Button>
        </InputGroup>
      </div>
    </div>
  );
}
