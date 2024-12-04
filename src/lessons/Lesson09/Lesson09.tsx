import { useState } from "react";
import Counter from "../../components/Counter/Counter";
import Input from "../../components/Input/Input";
import { Lesson09Container } from "./styles";
function Lesson09() {
  const [count, setCount] = useState<number>(1);
  const onPlusClick = (): void => {
    setCount((prevValue) => prevValue + 2);
  };
  const onMinusClick = (): void => {
    setCount((prevValue) => prevValue - 2);
  };
  
  return (
    <Lesson09Container>
      <Counter countValue={count} onMinusClick={onMinusClick} onPlusClick={onPlusClick} />
      <Input name='data' value="" onChange={()=>{}}/>
    </Lesson09Container>
  )
}
export default Lesson09;