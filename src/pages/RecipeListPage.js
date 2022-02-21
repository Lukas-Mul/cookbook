import { Container, Button } from 'reactstrap';
import { SearchInput } from '../components/SearchInput';
import { RecipesList } from '../components/RecipesList';
import { useEffect, useState } from 'react';
// import { mockRecipes } from '../mockData';
import { api } from '../api';
import { Link } from 'react-router-dom';

export function RecipeListPage() {
  const [filter, setFilter] = useState('');
  const [recipes, setRecipes] = useState([]);

  const filterredRecipes = recipes.filter((recipe) => {
    return recipe.title.toLowerCase().includes(filter.toLowerCase()); //startsWith instead of includes- when I wanna find only the items that starts with my searched letters
  });

  useEffect(() => {
    api.get('/recipes').then((response) => setRecipes(response.data));
  }, []);

  return (
    <Container>
      <h1>Recepty</h1>
      <SearchInput
        value={filter}
        setValue={setFilter}
        placeholder="Vyhledej recept"
        className="mb-4 w-25 border $orange-300"
      />
      <Link to={`/recipe/novyrecept`}>
        <Button className="border">Přidat recept</Button>
      </Link>
      <RecipesList recipes={filterredRecipes} />
    </Container>
  );
}
