import { Container, Table } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../api';
import axios from 'axios';

export function RecipeDetailPage() {
  const { slug } = useParams();
  const [recipe, setRecipe] = useState({});

  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    api.get(`/recipes/${slug}`).then((response) => {
      setRecipe(response.data);
      setIngredients(response.data.ingredients);
      console.log('rdi', response.data.ingredients[0]);
    });
  }, [slug]);

  // useEffect(() => {
  //   api.get(`/recipes/${slug}`).then((response) => setRecipe(response.data));
  // }, [slug]);

  let dirArr = [recipe.directions];
  let dirStr = dirArr.toString();
  // console.log(dirStr);
  const ingr = recipe.ingredients;
  // console.log(directions);
  console.log('ingr', ingr);
  console.log('ingr0', ingr);
  // console.log(ingr2[0]);
  console.log('recipe', recipe);

  const directionsList = dirStr.split(/[0-9]+\.\s/);
  const firstElement = directionsList.shift();
  // console.log(firstElement);
  // console.log(directionsList);

  const renderTable = () => {
    return ingredients.map(({ _id, name, amount, amountUnit }) => {
      return (
        <tr key={_id}>
          {/* <th scope="row"> */}
            <td>{name}</td>
            <td>{amount}</td>
            <td>{amountUnit}</td>
          {/* </th> */}
        </tr>
      );
    });
  };

  return (
    <div>
      <Container>
        <h1>Recept: {recipe.title}</h1>
        <p>{recipe.preparationTime} min</p>
        <Container>
          <div>{recipe.sideDish}</div>
        </Container>
        <p>{recipe.servingCount} </p>
      </Container>
      <Container>
        {/* <div>{directionsList}</div> */}
        <ol>
          {directionsList.map((dir) => {
            return <li key={dir}>{dir}</li>;
          })}
        </ol>
      </Container>

      <Container>
        <div>
          <h1>Budeme potřebovat</h1>
          <table>
            <tbody>{renderTable()}</tbody>
          </table>
        </div>
      </Container>
      <Container>
        <div>{recipe.lastModifiedDate}</div>
      </Container>
    </div>
  );
}
