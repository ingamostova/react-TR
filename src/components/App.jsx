// import recipes from '../recipes.json';
// import { RecipeList } from './RecipeList/RecipeList';
import { NoticesCategoriesList } from './NoticesCategoriesList/NoticesCategoriesList';
import pets from 'pets.json';

export const App = () => {
  return (
    <div style={{ padding: 15, backgroundColor: '#FEF9F9' }}>
      <NoticesCategoriesList pets={pets} />
    </div>
  );
};
