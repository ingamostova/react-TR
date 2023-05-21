// import recipes from '../recipes.json';
// import { RecipeList } from './RecipeList/RecipeList';
import { NoticesCategoriesList } from './NoticesCategoriesList/NoticesCategoriesList';
import { ModalNotice } from './ModalNotice/ModalNotice';
import pets from 'pets.json';
import { useState } from 'react';

export const App = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div style={{ padding: 15, backgroundColor: '#FEF9F9' }}>
      <NoticesCategoriesList pets={pets} onClose={toggleModal} />
      {showModal && <ModalNotice onClose={toggleModal} />}
    </div>
  );
};
