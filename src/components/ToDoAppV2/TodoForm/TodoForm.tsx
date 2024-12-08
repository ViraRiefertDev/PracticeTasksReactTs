import { ChangeEvent, FormEvent, useState } from 'react';

import Button from '../Button/Button';
import Input from '../Input/Input';
import { TodoFormContainer, ButtonWrapper } from './styles';
import { TodoFormProps } from './types';

function TodoForm({ addTodo }: TodoFormProps) {
  const [inputText, setInputText] = useState<string>('');

  function byChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    setInputText(event.target.value);
  }

  function bySubmitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    addTodo(inputText);
    setInputText('');
  }

  return (
    <TodoFormContainer onSubmit={bySubmitHandler}>
      <Input
        placeholder='add new todos'
        inputValue={inputText}
        onChange={byChangeHandler}
      />
      <ButtonWrapper>
        <Button buttonName='Submit' type='submit' />
      </ButtonWrapper>
    </TodoFormContainer>
  );
}

export default TodoForm;
