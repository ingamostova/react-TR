import { NoticeCategoryItem } from 'components/NoticeCategoryItem/NoticeCategoryItem';
import { List } from './NoticesCategoriesList.styled';

export const NoticesCategoriesList = ({ pets, onClose }) => {
  return (
    <List>
      {pets.map(pet => (
        <li li key={pet.id}>
          <NoticeCategoryItem pet={pet} onClose={onClose} />
        </li>
      ))}
    </List>
  );
};
