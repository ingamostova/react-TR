import { NoticesCategoriesList } from './NoticesCategoriesList/NoticesCategoriesList';
import { ModalNotice } from './ModalNotice/ModalNotice';
import pets from 'pets.json';
import { useState } from 'react';

export const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [pet, setPet] = useState({});

  const body = document.querySelector('body');
  showModal
    ? body.classList.add('modal-open')
    : body.classList.remove('modal-open');

  const toggleModal = id => {
    setShowModal(!showModal);
    const pet = pets.find(pet => pet.id === id);
    setPet(pet);
  };

  return (
    <div
      style={{ padding: 15, backgroundColor: '#FEF9F9', position: 'relative' }}
    >
      <NoticesCategoriesList pets={pets} onClose={toggleModal} />
      {showModal && <ModalNotice onClose={toggleModal} pet={pet} />}
    </div>
  );
};
