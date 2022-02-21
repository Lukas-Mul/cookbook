import { Routes as RouterRoutes, Route } from 'react-router-dom';

import { RecipeListPage } from './pages/RecipeListPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { RecipeDetailPage } from './pages/RecipeDetailPage';
import { EditPage } from './pages/EditPage';
import { NewRecipe } from './pages/NewRecipe';

export function Routes() {
  return (
    <RouterRoutes>
      <Route index element={<RecipeListPage />} />
      <Route path="/recipe/:slug" element={<RecipeDetailPage />} />
      <Route path="/recipe/:slug/edit" element={<EditPage />} />
      <Route path="/recipe/newrecipe" element={<NewRecipe />} />
      <Route path="*" element={<NotFoundPage />} />
    </RouterRoutes>
  );
}
