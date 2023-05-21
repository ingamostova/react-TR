import { FiHeart } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs';
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

const makeCityName = cityName => {
  if (cityName.length > 6) {
    return `${cityName.slice(0, 5)}...`;
  }
  return cityName;
};

const choseSexIcon = sex => {
  return sex === 'female' ? (
    <BsGenderFemale
      style={{ color: '#54ADFF', width: '24px', height: '24px' }}
    />
  ) : (
    <BsGenderMale style={{ color: '#54ADFF', width: '24px', height: '24px' }} />
  );
};

export const NoticeCategoryItem = ({
  pet: { title, location, age, sex, image },
  onClose,
}) => {
  return (
    <Container>
      <ImageContainer>
        {' '}
        <Image src={image} alt={title} />
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
            <SpanText>{makeCityName(location)}</SpanText>
          </Span>
          <Span>
            <AiOutlineClockCircle
              style={{ color: '#54ADFF', width: '24px', height: '24px' }}
            />
            <SpanText>{age}</SpanText>
          </Span>
          <Span>
            {choseSexIcon(sex)}
            <SpanText>{sex}</SpanText>
          </Span>
        </SpanContainer>
      </ImageContainer>
      <Info>
        <Title>{title}</Title>
        <BtnLaernMore type="button" onClick={onClose}>
          Learn more
        </BtnLaernMore>
      </Info>
    </Container>
  );
};
