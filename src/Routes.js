import { Routes as RouterRoutes, Route } from 'react-router-dom';

import { RecipeListPage } from './pages/RecipeListPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { RecipeDetailPage } from './pages/RecipeDetailPage';
import { EditPage } from './pages/EditPage';
import { Smazat } from './pages/Smazat';
import { NovyRecept } from './pages/NovyRecept';

export function Routes() {
  return (
    <RouterRoutes>
      <Route index element={<RecipeListPage />} />
      <Route path="/recipe/:slug" element={<RecipeDetailPage />} />
      <Route path="/recipe/:slug/edit" element={<EditPage />} />
      <Route path="/recipe/novyrecept" element={<NovyRecept />} />
      <Route path="/recipe/smazat" element={<Smazat />} />
      <Route path="*" element={<NotFoundPage />} />
    </RouterRoutes>
  );
}
