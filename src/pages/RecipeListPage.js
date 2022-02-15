import { Container } from 'reactstrap';
import { SearchInput } from '../components/SearchInput';
import { RecipesList } from '../components/RecipesList';
import { useEffect, useState } from 'react';
// import { mockRecipes } from '../mockData';
import { api } from '../api';

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
        placeholder="Muj novy placeholder"
        className="mb-4"
      />
      <RecipesList recipes={filterredRecipes} />
    </Container>
  );
}
