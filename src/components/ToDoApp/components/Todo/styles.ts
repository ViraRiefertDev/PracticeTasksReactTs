import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { ReactComponent as TodoIconSvg } from '../../../../assets/todoIcon.svg';
import { ReactComponent as CheckIconSvg } from '../../../../assets/check.svg';
import { ReactComponent as DeleteIconSvg } from '../../../../assets/basket.svg';

interface IconProps {
  isCompleted: boolean;
}

const commonStyles = css`
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: transform 0.3s;
`;

export const TodoItem = styled.div<IconProps>`
  display: flex;
  gap: 10px;
  width: 100%;
  padding: 20px;
  background-color: ${({ isCompleted }) => (isCompleted ? 'unset' : 'white')};
  border: ${({ isCompleted }) => (isCompleted ? '1px solid gray' : 'none')};
  color: ${({ isCompleted }) => (isCompleted ? 'gray' : 'inherit')};
  font-size: 25px;
`;

export const IconWrapper = styled.div`
  width: 30px;
  height: 30px;
`;

export const TodoIcon = styled(TodoIconSvg)<IconProps>`
  width: 100%;
  height: 100%;
  filter: ${({ isCompleted }) => (isCompleted ? 'grayscale(100%)' : 'none')};
`;

export const CheckIcon = styled(CheckIconSvg)<IconProps>`
  ${commonStyles};
  filter: ${({ isCompleted }) => (isCompleted ? 'grayscale(100%)' : 'none')};

  &:hover {
    color: green;
    transform: scale(1.3);
  }
`;

export const DeleteIcon = styled(DeleteIconSvg)<IconProps>`
  ${commonStyles};
  filter: ${({ isCompleted }) => (isCompleted ? 'grayscale(100%)' : 'none')};

  &:hover {
    color: red;
    transform: scale(1.3);
  }
`;

export const TodoText = styled.div`
  width: 100%;
`;
