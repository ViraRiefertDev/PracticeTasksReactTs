import Button from '../../components/Button/Button';
import { Homework07Container } from './styles';

function Homework07() {
  return (
    <Homework07Container>
      <Button name='normalButton' />
      <Button disabled name='grayButton' />
    </Homework07Container>
  );
}

export default Homework07;
