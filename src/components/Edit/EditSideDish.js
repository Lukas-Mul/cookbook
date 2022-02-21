import { Input } from 'reactstrap';
import { useState } from 'react';
// import { useState } from 'react';

export function EditSideDish({ editSideDish, setEditSideDish }) {
  console.log('editsidedish', editSideDish);
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
            console.log(e);
            console.log(e.target.value);
          }}
          value={editSideDish}
        />
      </div>
    </div>
  );
}
