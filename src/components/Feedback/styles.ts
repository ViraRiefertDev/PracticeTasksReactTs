import styled from '@emotion/styled';

export const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 50px;
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  min-width: 400px;
  margin: 0 auto;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const LikesAndDislikesCount = styled.span`
  display: inline-block;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #333333;
  margin: 10px;
  min-width: 50px;
`;

export const ResetResultWrapper = styled.div`
  width: 300px;
  margin-top: 20px;
`;

/* export const MainButton = styled.button`
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 12px 16px;
  background-color: #1f27f5;
  font-family: Lato, 'Helvetica Neue', Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  &:hover {
    background-color: #1620c9;
    transform: scale(1.05);
  }
  &:active {
    background-color: #0e157f;
    transform: scale(0.95);
  }
`; */

/* export const ButtonLabel = styled.span`
  font-size: 14px;
  font-weight: normal;
`; */

