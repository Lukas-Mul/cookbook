import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import placeholder from '../images/food-placeholder.png';
import { Link } from 'react-router-dom';

export function RecipeCard({ title, preparationTime, slug }) {
  return (
    <Card className="h-100 border-warning">
      <Link to={`/recipe/${slug}`}>
        <CardImg src={placeholder} />
      </Link>
      <CardBody>
        <CardTitle className="text-dark  font-weight-bold">
          <h5>{title}</h5>
        </CardTitle>
        <CardSubtitle className="text-dark">{preparationTime} min</CardSubtitle>
      </CardBody>
    </Card>
  );
}
