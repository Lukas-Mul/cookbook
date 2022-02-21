import React from 'react';
import { useEffect, useState } from 'react';
import { api } from '../api';
import { useParams } from 'react-router-dom';
import { PreparationTime } from '../components/Edit/PreparationTime';
import { Portions } from '../components/Portions';
import { EditTitle } from '../components/Edit/EditTitle';
import { EditSideDish } from '../components/Edit/EditSideDish';
import { RiDeleteBin6Line } from 'react-icons/ri';

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

export function NewRecipe(props) {
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [portionsAmount, setPortionsAmount] = useState('');
  const [preparationTime, setPreparationTime] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editSideDish, setEditSideDish] = useState('');
  const [directionsList, setDirectionsList] = useState([]);
  const [oldDirectionList, setOldDirectionList] = useState('');
  const { slug } = useParams();

  useEffect(() => {
    api.get(`/recipes/${slug}`).then((response) => {
      setRecipe(response.data);
      setEditTitle(response.data.title);
      setIngredients(response.data.ingredients);
      setPortionsAmount(response.data.servingCount);
      setPreparationTime(response.data.preparationTime);
      setEditSideDish(response.data.sideDish);
      setDirectionsList(response.data.directions.split(/[0-9]+\.\s/));

      setOldDirectionList(response.data.directions);

      console.log('rdi', response.data.ingredients[0]);
    });
  }, [slug]);

  const renderTable = () => {
    return ingredients.map(({ _id, name, amount, amountUnit }) => {
      return (
        <tr key={_id}>
          <td>{<RiDeleteBin6Line />}</td>
          <td>{name}</td>
          <td>{(amount / recipe.servingCount) * portionsAmount}</td>
          <td>{amountUnit}</td>
          <td>{'zmenit'}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <div className="float-end mb-2">
        <Button className="btn btn-info border">Uložit</Button>
        <Button className="btn btn-danger border">Zrušit</Button>
      </div>
      <h1>{recipe.title}</h1>

      <div className="w-50">
        <EditTitle editTitle={editTitle} setEditTitle={setEditTitle} />
      </div>

      <Row>
        <Col className="bg-light" xs="3">
          <Container className="w-100">
            <div>
              <h2 className="pt-3 mb-4">Základní údaje</h2>
            </div>
            <div className="mb-2">
              <PreparationTime
                preparationTime={preparationTime}
                setPreparationTime={setPreparationTime}
              />
            </div>
            <div className="mb-2">
              <Portions
                portionsAmount={portionsAmount}
                setPortionsAmount={setPortionsAmount}
              />
            </div>

            <div>
              <div className="mb-1 fw-bold">Příloha:</div>
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

              <div className="mb-2">
                <div className="mb-2">Přidat ingredienci</div>
                <Row>
                  <Col xs="6">
                    <Input placeholder="Množství" />
                  </Col>
                  <Col xs="6">
                    <Input placeholder="Jednotka" />
                  </Col>
                </Row>
              </div>
              <div className="mb-2">
                <InputGroup>
                  <Input placeholder="Název" />
                  <InputGroupText>+ Přidat</InputGroupText>
                </InputGroup>
              </div>
              <div className="mb-2">
                Přidat skupinu
                <InputGroup className="mt-2">
                  <Input placeholder="Nová skupina" />
                  <InputGroupText>+ Přidat</InputGroupText>
                </InputGroup>
              </div>
            </div>
          </Container>
        </Col>

        <Col className="bg-light" xs="5">
          <Container>
            <Container>
              <h2 className="pt-3">Postup</h2>
            </Container>

            <Input
              onChange={(e) => {
                setOldDirectionList(e.target.value);
              }}
              value={oldDirectionList}
              rows="20"
              name="text"
              type="textarea"
            />
          </Container>
        </Col>
      </Row>
    </div>
  );
}

export default NewRecipe;
