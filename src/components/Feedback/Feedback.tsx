import Button from '../Button/Button';
import { useState } from 'react';
import { ButtonsContainer, ButtonWrapper, FeedbackContainer,LikesAndDislikesCount, ResetResultWrapper } from './styles';

function Feedback() {
  const [likesCount, setLikesCount] = useState<number>(0);
  const [dislikesCount, setDislikesCount] = useState<number>(0);

  const onLikeClick = (): void => {
    setLikesCount((prevValue) => prevValue + 1);
  };

  const onDislikeClick = (): void => {
    setDislikesCount((prevValue) => prevValue + 1);
  };

  const onResetResultClick = ():void => {
    setLikesCount(0);
    setDislikesCount(0);
  };
  return (
    <FeedbackContainer>
      <ButtonsContainer>
        <ButtonWrapper>
          <LikesAndDislikesCount className='likes-count'>{likesCount}</LikesAndDislikesCount>
          <Button onClick={onLikeClick} name='👍 Like' />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button onClick={onDislikeClick} name='👎 Dislike' />

          <LikesAndDislikesCount>{dislikesCount}</LikesAndDislikesCount>
        </ButtonWrapper>
      </ButtonsContainer>
      {(likesCount || dislikesCount) > 0 && (
        <ResetResultWrapper className='reset-result-wrapper'>
          <Button onClick={onResetResultClick} name='Reset Result'/>
        </ResetResultWrapper>
      )}
    </FeedbackContainer>
  );
}

export default Feedback;
