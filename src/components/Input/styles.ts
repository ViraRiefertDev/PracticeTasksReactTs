import styled from '@emotion/styled';

export const InputLabel = styled.label`
  font-family: Lato, 'Helvetica Neue', Helvetica, sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: #6f6f6f;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
`;

export const InputEl = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #000;
  border-radius: 4px;
  &::placeholder {
    font-family: Lato, 'Helvetica Neue', Helvetica, sans-serif;
    font-size: 16px;
    line-height: 24px;
    color: #1e1e1e;
    opacity: 40%;
  }
`;


