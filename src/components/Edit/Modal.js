import React from 'react';
import { Button } from 'reactstrap';

function Modal(props) {
  function cancelHandler() {
    props.onCancel();
    console.log('ch');
  }

  function confirmHandler() {
    props.onConfirm();
    console.log('Recept byl uložen');
    console.log(props);
  }
  return (
    <div className="modal">
      <p>Chceš recept opravdu uložit?</p>
      <Button className="border" onClick={cancelHandler}>
        Zrušit
      </Button>
      <Button className="border" onClick={confirmHandler}>
        Ano, chci jej uložit
      </Button>
    </div>
  );
}

export default Modal;
