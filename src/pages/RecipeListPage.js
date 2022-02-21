import { Container, Button, Row, Col } from 'reactstrap';
import { SearchInput } from '../components/SearchInput';
import { RecipesList } from '../components/RecipesList';
import { useEffect, useState } from 'react';
import { api } from '../api';
import { Link } from 'react-router-dom';

export function RecipeListPage() {
  const [filter, setFilter] = useState('');
  const [recipes, setRecipes] = useState([]);

  const filterredRecipes = recipes.filter((recipe) => {
    return recipe.title.toLowerCase().includes(filter.toLowerCase());
  });

  useEffect(() => {
    api.get('/recipes').then((response) => setRecipes(response.data));
  }, []);

  return (
    <Container>
      <Row>
        <Col className="bg-light" xs="6">
          <h1>Recepty</h1>
          <SearchInput
            value={filter}
            setValue={setFilter}
            placeholder="Vyhledej recept"
            className="mt-3 mb-4 w-50 border border-dark"
          />
        </Col>
        <Col className="bg-light " xs="6">
          <Link to={`/recipe/newrecipe`}>
            <Button className="btn btn-info border float-end mt-2">
              Přidat recept
            </Button>
          </Link>
        </Col>
      </Row>

      <RecipesList recipes={filterredRecipes} />
    </Container>
  );
}
