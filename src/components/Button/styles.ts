import styled from '@emotion/styled';

interface MainButtonProps {
  disabled?: boolean;
}

export const MainButton = styled.button<MainButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: 100%;
  padding: 0px 20px;
  background-color: ${({disabled})=> disabled?'grey':'blue'};
  border-radius: 30px;
  cursor:${({disabled})=> disabled?'not-allowed':'pointer'};
`;

export const ChildrenWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 25px;
  color: #fff;
`;
