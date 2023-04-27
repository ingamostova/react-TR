import PropTypes from 'prop-types';
import { Recipe } from 'components/Recipe/Recipe';
import { List } from './RecipeList.styled';

export const RecipeList = ({ recipes }) => {
  return (
    <List>
      {recipes.map(recipe => (
        <li key={recipe.id}>
          <Recipe item={recipe} />
        </li>
      ))}
    </List>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};
