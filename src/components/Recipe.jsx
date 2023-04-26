import PropTypes from 'prop-types';
import { TfiAlarmClock } from 'react-icons/tfi';
import { AiOutlinePieChart } from 'react-icons/ai';
import { BsBarChart } from 'react-icons/bs';

export const Recipe = ({
  item: { name, time, servings, calories, image, difficulty },
}) => {
  return (
    <>
      <img src={image} alt={name} width="320" />
      <h2>{name}</h2>
      <div>
        <p>
          <TfiAlarmClock /> {time} minutes
        </p>
        <p>
          <AiOutlinePieChart /> {servings} servings
        </p>
        <p>
          <BsBarChart /> {calories} calories
        </p>
      </div>
      <div>
        <h3>Difficulty</h3>
        <span>Easy</span>
        <span>Medium</span>
        <span>Hard</span>
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
