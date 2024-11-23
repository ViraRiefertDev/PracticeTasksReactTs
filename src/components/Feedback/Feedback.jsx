import './styles.css';
import Button from '../Button/Button';
import { useState } from 'react';

function Feedback() {
  const [likesCount, setLikesCount] = useState(0);
  const [dislikesCount, setDislikesCount] = useState(0);

  const onLikeClick = () => {
    setLikesCount((prevValue) => prevValue + 1);
  };

  const onDislikeClick = () => {
    setDislikesCount((prevValue) => prevValue + 1);
  };

  const onResetResultClick = () => {
    setLikesCount(0);
    setDislikesCount(0);
  };
  return (
    <div className='feedback-container'>
      <div className='buttons-container'>
        <div className='button-like-wrapper'>
          <span className='likes-count'>{likesCount}</span>
          <Button onClick={onLikeClick}>
            👍 <span className='button-label'>Like</span>
          </Button>
        </div>
        <div className='button-dislike-wrapper'>
          <Button onClick={onDislikeClick} name>
            👎 <span className='button-label'>Dislike</span>
          </Button>
          <span className='dislikes-count'>{dislikesCount}</span>
        </div>
      </div>
      {(likesCount || dislikesCount) > 0 && (
        <div className='reset-result-wrapper'>
          <Button onClick={onResetResultClick}>Reset Result</Button>
        </div>
      )}
    </div>
  );
}

export default Feedback;
