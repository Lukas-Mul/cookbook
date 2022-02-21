import { Container, Table, Row, Col, Button } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../api';
import { Portions } from '../components/Portions';
import { Link } from 'react-router-dom';
import axios from 'axios'


export function RecipeDetailPage() {
  const { slug } = useParams();
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [portionsAmount, setPortionsAmount] = useState('');

  useEffect(() => {
    api.get(`/recipes/${slug}`).then((response) => {
      setRecipe(response.data);
      setIngredients(response.data.ingredients);
      setPortionsAmount(response.data.servingCount);
    });
  }, [slug]);

  // useEffect(() => {
  //   api.get(`/recipes/${slug}`).then((response) => setRecipe(response.data));
  // }, [slug]);

  let dirArr = [recipe.directions];
  let dirStr = dirArr.toString();

  const directionsList = dirStr.split(/[0-9]+\.\s/);
  const firstElement = directionsList.shift();
  console.log(firstElement);

  // Update API with user input


  // TABLE WITH INGREDIENCES
  const renderTable = () => {
    return ingredients.map(({ _id, name, amount, amountUnit }) => {
      return (
        <tr key={_id}>
          <td>{name}</td>
          <td>{(amount / recipe.servingCount) * portionsAmount}</td>
          <td>{amountUnit}</td>
        </tr>
      );
    });
  };

  return (
    <Row className="bg-light gy-2" xs="12">
      <Container>
        <div className="float-end">
          <Link to={`/recipe/${slug}/edit`}>
            <Button className="btn btn-info border mt-2 mb-2">Upravit</Button>
          </Link>
          <Link to={`/recipe/smazat`}>
            <Button className="btn btn-danger border mt-2 mb-2">Smazat</Button>
          </Link>
        </div>
        <h1>{recipe.title}</h1>
        <p className="mb-0 fw-bold ">
          Čas na přípravu: {recipe.preparationTime} min
        </p>
        <p className="mb-0 fw-bold">Přílohy: {recipe.sideDish}</p>

        <div className="w-25">
          <Portions
            portionsAmount={portionsAmount}
            setPortionsAmount={setPortionsAmount}
          />
        </div>

        <div className="child"></div>
      </Container>
      <Row>
        <Col className="bg-light" xs="6">
          <Container>
            <div>
              <h2 className="pt-3">Budeme potřebovat</h2>
              <Table>
                <tbody>{renderTable()}</tbody>
              </Table>
            </div>
          </Container>
        </Col>

        <Col xs="6">
          <Container>
            <h2 className="pt-3">Postup</h2>

            <ol>
              {directionsList.map((dir) => {
                return <li key={dir}>{dir}</li>;
              })}
            </ol>
          </Container>
        </Col>
        <Container>
          <div className="pt-3">{recipe.lastModifiedDate}</div>
        </Container>
      </Row>
    </Row>
  );
}
