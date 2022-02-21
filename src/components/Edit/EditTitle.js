import {
  Input,
  InputGroup,
  InputGroupText,
} from 'reactstrap';

export function EditTitle({ editTitle, setEditTitle }) {
  console.log('pc', editTitle);
  return (
    <div>
      <div>
        <InputGroup className="w-100">
          <InputGroupText className="bg-warning">Nový název:</InputGroupText>
          <Input
            onChange={(e) => {
              if (!isNaN(parseInt(e.target.value))) {
                setEditTitle(parseInt(e.target.value));
              } else {
                setEditTitle(e.target.value);
              }
            }}
            value={editTitle}
          />
        </InputGroup>
      </div>
    </div>
  );
}
