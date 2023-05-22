import { NoticeCategoryItem } from 'components/NoticeCategoryItem/NoticeCategoryItem';
import { AddPetButton } from './AddPetButton/AddPetButton';
import { Container, List } from './NoticesCategoriesList.styled';

export const NoticesCategoriesList = ({ pets, onClose }) => {
  return (
    <Container>
      <AddPetButton />
      <List>
        {pets.map(pet => (
          <li key={pet.id}>
            <NoticeCategoryItem pet={pet} onClose={onClose} />
          </li>
        ))}
      </List>
    </Container>
  );
};
