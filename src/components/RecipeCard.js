import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import placeholder from '../images/food-placeholder.png';
import { Link } from 'react-router-dom';

export function RecipeCard({ title, preparationTime, slug }) {
  return (
    <Card className="h-100 border-primary">
      <Link to={`/recipe/${slug}`}>
        <CardImg src={placeholder} />
      </Link>
      <CardBody>
        <CardTitle className="orange-300">{title}</CardTitle>
        <CardSubtitle className="orange-300">
          {preparationTime} min
        </CardSubtitle>
      </CardBody>
    </Card>
  );
}
