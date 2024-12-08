import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { ReactComponent as DeleteIconSvg } from '../../../../assets/basket.svg';
import { ReactComponent as ReloadIconSvg } from '../../../../assets/reload.svg';

const commonStyles = css`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const ButtonWrapper = styled.div`
  width: 40px;
  height: 40px;
`;

export const ReloadIcon = styled(ReloadIconSvg)`
  ${commonStyles};
`;

export const DeleteIcon = styled(DeleteIconSvg)`
  ${commonStyles};
`;
