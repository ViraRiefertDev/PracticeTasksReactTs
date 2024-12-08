/* 
Задание 1: Простой счётчик
  Создай компонент с использованием хука useState, который будет отображать счётчик. Добавь кнопки для увеличения и уменьшения счётчика на 1.

  Что нужно сделать:

  Создать компонент Counter.
  С помощью useState создать состояние для счётчика.
  Добавить кнопки для увеличения и уменьшения значения счётчика. 
*/

import Counter from 'components/Counter/Counter';
import { useState } from 'react';
import { CounterWrapper } from './styles';

function Task1Counter() {
  const [counterValue, setCounterValue] = useState<number>(0);
  const [isDecrementDisabled, setIsDecrementDisabled] =
    useState<boolean>(true);

    function decrementCounter() {
      setCounterValue((prevValue) => prevValue + 1)
      setIsDecrementDisabled(false);
    }

  function incrementCounter() {
    if (counterValue > 0) {
      setCounterValue((prevValue) => prevValue - 1);
      setIsDecrementDisabled(false);
    }
    else{
      setIsDecrementDisabled(true);
    }
  }

  return (
    <CounterWrapper>
      <Counter
        value={counterValue}
        incrementCounter={incrementCounter}
        decrementCounter={decrementCounter}
        isDecrementDisabled={isDecrementDisabled}
      />
    </CounterWrapper>
  );
}

export default Task1Counter;
