import PropTypes from 'prop-types';
import { TfiAlarmClock } from 'react-icons/tfi';
import { AiOutlinePieChart } from 'react-icons/ai';
import { BsBarChart } from 'react-icons/bs';
import { Image, Info, InfoItem, Type } from './Recipe.styled';

export const Recipe = ({
  item: { name, time, servings, calories, image, difficulty },
}) => {
  return (
    <>
      <Image src={image} alt={name} width="320" />
      <h2>{name}</h2>
      <Info>
        <InfoItem>
          <TfiAlarmClock /> {time} minutes
        </InfoItem>
        <InfoItem>
          <AiOutlinePieChart /> {servings} servings
        </InfoItem>
        <InfoItem>
          <BsBarChart /> {calories} calories
        </InfoItem>
      </Info>
      <div>
        <h3>Difficulty</h3>
        <Type variant={difficulty} difficulty={difficulty === 'easy'}>
          Easy
        </Type>
        <Type variant={difficulty} difficulty={difficulty === 'medium'}>
          Medium
        </Type>
        <Type variant={difficulty} difficulty={difficulty === 'hard'}>
          Hard
        </Type>
      </div>
    </>
  );
};

Recipe.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    time: PropTypes.string,
    servings: PropTypes.number,
    calories: PropTypes.number,
    image: PropTypes.string,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']),
  }),
};
