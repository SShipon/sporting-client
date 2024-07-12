
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';
import './Stars.css';

const Stars = ({ stars, reviews }) => {
  // console.log(stars,reviews);
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let numbers = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="icon"></FaStar>
        ) : stars >= numbers ? (
          <FaStarHalfAlt className="icon"></FaStarHalfAlt>
        ) : (
          <AiOutlineStar className="icon"></AiOutlineStar>
        )}
      </span>
    );
  });
  return (
    <div>
      <div className="icon-style">
        {ratingStar}
        <p>({reviews} customer reviews)</p>
      </div>
    </div>
  );
};

export default Stars;
