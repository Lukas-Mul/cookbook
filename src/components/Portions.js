import { Input, InputGroup, Button, InputGroupText } from 'reactstrap';

export function Portions({ portionsAmount, setPortionsAmount }) {
  return (
    <div className="w-100">
      <InputGroup className="w-100 mt-2">
        <InputGroupText className="bg-warning">Počet porcí</InputGroupText>
        <Input
          // onChange={(e) => {
          //   if (isNaN(e.target.value)) {
          //     // portionsAmount == '';
          //     console.log('nan');
          //   } else {
          //     setPortionsAmount(e.target.value);
          //   }
          //   console.log(e);
          //   console.log(e.target.value);
          // }}
          // value={portionsAmount}
          onChange={(e) => {
            if (!isNaN(parseInt(e.target.value))) {
              setPortionsAmount(parseInt(e.target.value));
            } else {
              setPortionsAmount(e.target.value);
            }
            // console.log(e);
            // console.log(e.target.value);
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
  );
}
