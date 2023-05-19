import { FiHeart } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsGenderFemale } from 'react-icons/bs';
import {
  Image,
  Title,
  Container,
  ImageContainer,
  Info,
  BtnLaernMore,
  BtnAddToFav,
  Type,
  SpanContainer,
  Span,
  SpanText,
} from './NoticeCategoryItem.styled';

export const NoticeCategoryItem = () => {
  return (
    <Container>
      <ImageContainer>
        {' '}
        <Image
          src="https://media-be.chewy.com/wp-content/uploads/2022/09/27095535/cute-dogs-pembroke-welsh-corgi.jpg"
          alt="Cute dog"
        />
        <Type>in good hands</Type>
        <BtnAddToFav type="button">
          <FiHeart
            style={{
              position: 'absolute',
              width: '24px',
              height: '24px',
              left: '8px',
              top: '9px',
              color: '#54ADFF',
            }}
          />
        </BtnAddToFav>
        <SpanContainer>
          <Span>
            <HiOutlineLocationMarker
              style={{ color: '#54ADFF', width: '24px', height: '24px' }}
            />
            <SpanText>City</SpanText>
          </Span>
          <Span>
            <AiOutlineClockCircle
              style={{ color: '#54ADFF', width: '24px', height: '24px' }}
            />
            <SpanText>Age</SpanText>
          </Span>
          <Span>
            <BsGenderFemale
              style={{ color: '#54ADFF', width: '24px', height: '24px' }}
            />
            <SpanText>Sex</SpanText>
          </Span>
        </SpanContainer>
      </ImageContainer>
      <Info>
        <Title>Сute dog looking for a home</Title>
        <BtnLaernMore type="button">Learn more</BtnLaernMore>
      </Info>
    </Container>
  );
};
