import {
  Input,
  Container,
  InputGroup,
  Button,
  InputGroupText,
} from 'reactstrap';
import { useState } from 'react';
// import { useState } from 'react';

export function Portions({ portionsAmount, setPortionsAmount }) {
  console.log("pc", portionsAmount);
  return (
    <div>
      <div>
        <InputGroup className="w-100">
          <InputGroupText>Počet porcí</InputGroupText>
          <Input
            onChange={(e) => {
              if (!isNaN(parseInt(e.target.value))) {
                setPortionsAmount(parseInt(e.target.value));
              } else {
                setPortionsAmount(e.target.value);
              }
              console.log(e);
              console.log(e.target.value);
            }}
            value={portionsAmount}
          />
          <Button
            onClick={() => {
              setPortionsAmount(portionsAmount + 1);
            }}
            className="border"
          >
            +
          </Button>
          <Button
            onClick={() => {
              setPortionsAmount(portionsAmount - 1);
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
