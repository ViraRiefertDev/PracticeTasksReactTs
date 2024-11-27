//@import url(https://fonts.googleapis.com/css?family=Lato:100,100italic,300,300italic,regular,italic,700,700italic,900,900italic);
import styled from "@emotion/styled";

export const LoginFormWrapper=styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 60px;
  width:590px;
  border: 1px solid #000;
  border-radius: 4px;

  &:hover {
    background-color: #f7e8be;
  }
`
export const LoginFormTitle = styled.h4`
  font-family: Lato, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 24px;
  font-weight: 400;
`
export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

