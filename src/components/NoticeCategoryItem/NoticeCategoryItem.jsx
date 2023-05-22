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
      style={{
        color: '#54ADFF',
        width: '22px',
        height: '22px',
      }}
    />
  ) : (
    <BsGenderMale style={{ color: '#54ADFF', width: '22px', height: '22px' }} />
  );
};

export const NoticeCategoryItem = ({
  pet: { title, location, age, sex, image, id },
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
            size={20}
            style={{
              position: 'absolute',
              left: '10px',
              top: '10px',
              color: '#54ADFF',
              strokeWidth: '1.5',
              //   fill: changeColorInBtn(),
            }}
          />
        </BtnAddToFav>
        <SpanContainer>
          <Span>
            <HiOutlineLocationMarker
              style={{
                color: '#54ADFF',
                width: '22px',
                height: '22px',
                strokeWidth: '1.5',
              }}
            />
            <SpanText>{makeCityName(location)}</SpanText>
          </Span>
          <Span>
            <AiOutlineClockCircle
              style={{
                color: '#54ADFF',
                width: '22px',
                height: '22px',
                strokeWidth: '1.5',
              }}
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
        <BtnLaernMore type="button" onClick={() => onClose(id)}>
          Learn more
        </BtnLaernMore>
      </Info>
    </Container>
  );
};
