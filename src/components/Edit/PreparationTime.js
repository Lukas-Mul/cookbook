import {
  Input,
  InputGroup,
  Button,
  InputGroupText,
} from 'reactstrap';

export function PreparationTime({ preparationTime, setPreparationTime }) {
  console.log('pc', preparationTime);
  return (
    <div>
      <div>
        <InputGroup className="w-100">
          <InputGroupText className=" bg-warning">Čas přípravy</InputGroupText>
          <Input
            onChange={(e) => {
              if (!isNaN(parseInt(e.target.value))) {
                setPreparationTime(parseInt(e.target.value));
              } else {
                setPreparationTime(e.target.value);
              }
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
