import { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { TodoFormContainer, ButtonWrapper,Title } from './styles';
import { TodoFromProps } from './types';

function TodoForm({ addTodo }: TodoFromProps) {
  const [inputValue, setInputValue] = useState<string>('');

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  function onSubmitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    {
      inputValue && addTodo(inputValue);
    }
    setInputValue('');
  }

  return (
    <TodoFormContainer onSubmit={onSubmitHandler}>
      <Input
        placeholder='Enter new todo'
        inputValue={inputValue}
        onChange={handleOnChange}
      />
      <ButtonWrapper>
        <Button type='submit' >
          <Title>Submit</Title>
        </Button>
      </ButtonWrapper>
    </TodoFormContainer>
  );
}

export default TodoForm;
