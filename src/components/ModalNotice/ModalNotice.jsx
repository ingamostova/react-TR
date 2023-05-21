import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';
import {
  Backdrop,
  Content,
  Image,
  ContainerInfo,
  BtnClose,
  Title,
  List,
  Item,
  Comment,
  ContactLink,
  AddToFav,
  BtnContainer,
} from './ModalNotice.styled';

const modalRoot = document.querySelector('#modal-root');

export const ModalNotice = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Content>
        <BtnClose type="button" onClick={onClose}>
          <AiOutlineClose />
        </BtnClose>
        <ContainerInfo>
          <Image
            src="https://media-be.chewy.com/wp-content/uploads/2022/09/27095535/cute-dogs-pembroke-welsh-corgi.jpg"
            alt="dog"
          />
          <div style={{ width: '321px', padding: '0 12px' }}>
            {' '}
            <Title>Сute dog looking for a home</Title>
            <List>
              <Item>Name:</Item>
              <Item>Birthday:</Item>
              <Item>Breed:</Item>
              <Item>Place:</Item>
              <Item>The sex:</Item>
              <Item>Email:</Item>
              <Item>Phone:</Item>
            </List>
          </div>
        </ContainerInfo>
        <Comment>
          Comments: Rich would be the perfect addition to an active family that
          loves to play and go on walks. I bet he would love having a doggy
          playmate too!{' '}
        </Comment>
        <BtnContainer>
          <ContactLink href="tel:+380971234567">Contact</ContactLink>
          <AddToFav type="button">Add to fav</AddToFav>
        </BtnContainer>
      </Content>
    </Backdrop>,
    modalRoot
  );
};
