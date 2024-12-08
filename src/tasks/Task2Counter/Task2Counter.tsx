/* Задача:
Создай компонент, который:

Содержит два состояния: counterA и counterB, оба изначально равны 0.
Увеличивает оба значения на 1 при клике на кнопку, используя правильный функциональный подход.
Показывает оба счётчика на экране. */

import { useState } from 'react';
import { CountersContainer } from './styles';
import Counter from 'components/Counter/Counter';

function Task2Counter() {
  const [counterA, setCounterA] = useState<number>(0);
  const [counterB, setCounterB] = useState<number>(0);

  const handleIncrement = () => {
    setCounterA((prevValue) => prevValue + 1);
    setCounterB((prevValue) => prevValue + 1);
  };

  const handleDecrement = () => {
    if (counterA > 0 && counterB > 0) {
      setCounterA((prevValue) => prevValue - 1);
      setCounterB((prevValue) => prevValue - 1);
    }
  };

  return (
    <CountersContainer>
      <Counter
        value={counterA}
        incrementCounter={handleIncrement}
        decrementCounter={handleDecrement}
        isDecrementDisabled={counterA === 0 || counterB === 0}
      />
      <Counter
        value={counterB}
        incrementCounter={handleIncrement}
        decrementCounter={handleDecrement}
        isDecrementDisabled={counterA === 0 || counterB === 0}
      />
    </CountersContainer>
  );
}
export default Task2Counter;
