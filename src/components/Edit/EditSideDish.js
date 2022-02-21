import { Input } from 'reactstrap';

export function EditSideDish({ editSideDish, setEditSideDish }) {
  // console.log('editsidedish', editSideDish);
  return (
    <div>
      <div>
        <Input
          onChange={(e) => {
            if (!isNaN(parseInt(e.target.value))) {
              setEditSideDish(parseInt(e.target.value));
            } else {
              setEditSideDish(e.target.value);
            }
          }}
          value={editSideDish}
        />
      </div>
    </div>
  );
}
