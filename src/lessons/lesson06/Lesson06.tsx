import './styles.css';

function Lesson06() {
  // 1. Типизация строк
  let userName: string = 'Tom';
  userName = '30';
  userName = '';
  let fullName: string = `${userName} Smith`;
  console.log(fullName);
  let result: string = '2';
  result = 1 + 2 + '4';
  console.log(result);

  //2. Типизация чисел
  let luckyNumber: number = 7;
  luckyNumber = NaN;
  luckyNumber = Infinity;
  luckyNumber = -3;
  luckyNumber = 1.2;
  /* luckyNumber = 2 + "3". */
  console.log(luckyNumber);

  //тип BigInt - bigInt

  //3. Типизация логического типа
  //приведение типов не работает!
  let isAdmin = false;
  /* isAdmin = undefined; */
  isAdmin = 2 > 1;
  console.log(isAdmin);

  //4. null и undefined
  let emptyValue: null = null;
  console.log(emptyValue);
  //нет смысла ее переназначать потому что только одно значение
  /* emptyValue = 0;
  emptyValue = undefined; */

  let data: undefined = undefined;
  //data = 0
  //data = null
  console.log(data);

  //5.Типизация массива
  const colors: string[] = ['red', 'blue', 'black'];
  //colors.push(23);
  colors.push('23');
  /* colors[0] = 345; */
  colors[0] = '345';

  //6. Kортеж (typel)
  const fruits: [string, number] = ['apple', 4];
  fruits.push('cherry');
  console.log(fruits);
  //fruit[2]
  console.log(fruits[1]);
  

  //7. Типизация возвращаемого функцией значения
  const showMessage = (): void => {
    console.log('Hello');
  };
  showMessage();

  //8. Автоматическое определение типа
  let name = 'Bob';
  console.log(name);
  //name=34;

  let userData;

  userData = 'Mary';
  userData = 23;
  userData = ['John', 56];
  console.log(userData);

  let age: any = 45;
  console.log(age);

  const returnNumber = (): number => {
    return 2;
  };
  console.log(returnNumber());

  //9. Типизация параметров функции
  const getUserData = (firstName: string, age: number = 30) => {
    return `${firstName} ${age}`;
  };
  getUserData('Bob');

  // 10. Union type
  let isManager: boolean | undefined | string = true;
  isManager = undefined;
  isManager = 'yes';
  console.log(isManager);

  // 11. Типизация объектов
  interface User {
    name: string;
    age?: number | string;
  }

  const user: User = {
    name: 'Lola',
    age: '34',
  };

  const user2: User = {
    name: 'Lola',
  };
  console.log(user);
  console.log(user2);

  //type
  type Animal = {
    name?: string
    weight: number
  }

  const animal: Animal = {
    weight: 200,
    name:'Lion',
    
  }
  console.log(animal);

  interface Zoo{
    animalData:Animal
    city:string
  }
  const zoo:Zoo={
    animalData: {
      weight:200,
      name: 'Horse'
    },
    city: 'Berlin'
  }
  console.log(zoo);
  

  return <div className='lesson06-container'>Lesson 6 - Type Script</div>;
}
export default Lesson06;
