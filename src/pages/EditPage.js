import React from 'react';
import { useEffect, useState } from 'react';
import { api } from '../api';
import { useParams } from 'react-router-dom';
import { PreparationTime } from '../components/Edit/PreparationTime';
import { Portions } from '../components/Portions';
import { EditTitle } from '../components/Edit/EditTitle';
import { EditSideDish } from '../components/Edit/EditSideDish';
import { RiDeleteBin6Line, RiDeleteRow } from 'react-icons/ri';
import Modal from '../components/Edit/Modal';

import {
  Container,
  Input,
  InputGroup,
  InputGroupText,
  Table,
  Row,
  Col,
  Button,
} from 'reactstrap';

export function EditPage(props) {
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [portionsAmount, setPortionsAmount] = useState('');
  const [preparationTime, setPreparationTime] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editSideDish, setEditSideDish] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { slug } = useParams();

  function deleteHandler() {
    // console.log("click");
    console.log('deleteHandler');
    console.log(props);
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }

  useEffect(() => {
    api.get(`/recipes/${slug}`).then((response) => {
      setRecipe(response.data);
      setEditTitle(response.data.title);
      setIngredients(response.data.ingredients);
      setPortionsAmount(response.data.servingCount);
      setPreparationTime(response.data.preparationTime);
      setEditSideDish(response.data.sideDish);
      console.log('rdi', response.data.ingredients[0]);
    });
  }, [slug]);

  function deleteRow() {}

  const renderTable = () => {
    return ingredients.map(({ _id, name, amount, amountUnit }) => {
      return (
        <tr key={_id}>
          <td
            // onClick={(e) => {
            //   deleteRow();
            // }}
          >
            {<RiDeleteBin6Line />}
          </td>
          <td>{name}</td>
          <td>{(amount / recipe.servingCount) * portionsAmount}</td>
          <td>{amountUnit}</td>
          <td>{'zmenit'}</td>
        </tr>
      );
      // console.log(ingredients);
    });
  };

  let dirArr = [recipe.directions];
  let dirStr = dirArr.toString();

  const directionsList = dirStr.split(/[0-9]+\.\s/);
  const firstElement = directionsList.shift();

  console.log('ep', editSideDish);

  return (
    <div>
      <h1>{recipe.title}</h1>
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>
            ulozit
          </button>
        </div>
        {/* if both conditions are true, then it will return the component. In other words we apply Modal and Backdrop only if the "modalIsOpen" value is true */}
        {modalIsOpen && (
          <Modal className=""shadow-none p-3 mb-5 bg-light rounded px-2 text-center w-25  onCancel={closeModalHandler} onConfirm={closeModalHandler} />
        )}
        {/* {modalIsOpen && <Backdrop clickToClose={closeModalHandler} />} */}
      </div>
      <Button className="border">Zrušit</Button>
      <div className="w-50">
        <EditTitle editTitle={editTitle} setEditTitle={setEditTitle} />
      </div>
      <Row>
        <Col className="bg-light" xs="3">
          <Container className="w-100">
            <div>
              <h2 className="pt-3">Základní údaje</h2>
            </div>
            <div>
              <div>Doba přípravy</div>
              <PreparationTime
                preparationTime={preparationTime}
                setPreparationTime={setPreparationTime}
              />
            </div>
            <Portions
              portionsAmount={portionsAmount}
              setPortionsAmount={setPortionsAmount}
            />
            <div>
              <div>Příloha</div>
              <EditSideDish
                editSideDish={editSideDish}
                setEditSideDish={setEditSideDish}
              />
            </div>
          </Container>
        </Col>
        <Col className="bg-light" xs="4">
          <Container>
            <div>
              <h2 className="pt-3">Ingredience</h2>
              <div>
                <Table>
                  <tbody>{renderTable()}</tbody>
                </Table>
              </div>

              <div>
                <div>Přidat ingredienci</div>
                <Row>
                  <Col xs="6">
                    <Input placeholder="Množství" />
                  </Col>
                  <Col xs="6">
                    <Input placeholder="Jednotka" />
                  </Col>
                </Row>
              </div>
              <div>
                <InputGroup>
                  <Input placeholder="Název" />
                  <InputGroupText>+ Přidat</InputGroupText>
                </InputGroup>
              </div>
              <div>
                Přidat skupinu
                <InputGroup>
                  <Input placeholder="Nová skupina" />
                  <InputGroupText>+ Přidat</InputGroupText>
                </InputGroup>
              </div>
            </div>
          </Container>
        </Col>

        <Col xs="5">
          <Container>
            <Container>
              <h2 className="pt-3">Postup</h2>
            </Container>

            <Input
              value={
                <ol>
                  {directionsList.map((dir) => {
                    return <li key={dir}>{dir}</li>;
                  })}
                </ol>
              }
              // value={directionsList}
              rows="20"
              name="text"
              type="textarea"
            />
          </Container>
        </Col>
        <Container>
          <div className="pt-3">Propisovani postupu</div>
        </Container>
      </Row>
    </div>
  );
}

export default EditPage;
