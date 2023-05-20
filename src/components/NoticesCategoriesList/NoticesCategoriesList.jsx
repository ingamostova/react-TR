import { NoticeCategoryItem } from 'components/NoticeCategoryItem/NoticeCategoryItem';
import { List } from './NoticesCategoriesList.styled';

export const NoticesCategoriesList = ({ pets }) => {
  return (
    <List>
      {pets.map(pet => (
        <li key={pet.id}>
          <NoticeCategoryItem pet={pet} />
        </li>
      ))}
      {/* <li>
        <NoticeCategoryItem />
      </li>
      <li>
        <NoticeCategoryItem />
      </li>
      <li>
        <NoticeCategoryItem />
      </li>
      <li>
        <NoticeCategoryItem />
      </li>
      <li>
        <NoticeCategoryItem />
      </li>
      <li>
        <NoticeCategoryItem />
      </li> */}
    </List>
  );
};
