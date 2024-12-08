import { ButtonLabel, CounterContainer, CounterValue } from './styled';
import Button from 'components/Button/Button';
import { CounterProps } from './types';
import { ReactComponent as PlusIcon } from 'assets/plus-icon.svg';
import { ReactComponent as MinusIcon } from 'assets/minus-icon.svg';

function Counter({
  value,
  incrementCounter,
  decrementCounter,
  isDecrementDisabled,
}: CounterProps) {
  return (
    <CounterContainer>
      <Button onClick={decrementCounter} isDecrementDisabled={isDecrementDisabled}>
        {<ButtonLabel>Minus</ButtonLabel>}
        <MinusIcon width={20} height={20} />
      </Button>
      <CounterValue>{value}</CounterValue>
      <Button onClick={incrementCounter}>
        <ButtonLabel>Plus</ButtonLabel>
        <PlusIcon width={20} height={20} />
      </Button>
    </CounterContainer>
  );
}

export default Counter;
