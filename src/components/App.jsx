import recipes from '../recipes.json';
import { RecipeList } from './RecipeList';

export const App = () => {
  return (
    <div>
      <RecipeList recipes={recipes} />
    </div>
  );
};
