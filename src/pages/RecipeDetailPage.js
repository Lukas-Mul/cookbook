import { Container } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../api';

export function RecipeDetailPage() {
  const { slug } = useParams();
  const { title } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    api.get(`/recipes/${slug}`).then((response) => setRecipe(response.data));
    console.log(slug);
  }, [slug]);

  useEffect(() => {
    api.get(`/recipes/${title}`).then((response) => setRecipe(response.data));
    console.log(title);
  }, [title]);

  return (
    <Container>
      <h1>Recept: {recipe.title}</h1>
      <p>{recipe.preparationTime} min</p>
    </Container>
  );
}
