import './styles.css';
import { BoxInfo } from './styles';

function Lesson07() {
  //*Generic
  type CustomArrayType<T = string> = (T | undefined)[];

  const colors: CustomArrayType = ['red', 'blue', undefined];
  const colorCodes: CustomArrayType<number> = [23, 35, 64, undefined];

  //* Enum
  enum Colors {
    Red,
    Blue = 10,
    Green,
  }
  let currentColor: Colors = Colors.Green;
  console.log(Colors[10]);
  console.log(currentColor);

  enum USER_ROLES {
    ADMIN = 'Admin',
    USER = 'User',
    GUEST = 'Guest',
  }

  interface UserData {
    name: string;
    age: number;
    role: USER_ROLES;
  }

  //enum для цветов светофора
  enum TRAFFIC_LIGHT {
    RED = 'red',
    YELLOW = 'yellow',
    GREEN = 'green',
  }
  const getAction = (light: TRAFFIC_LIGHT): string => {
    switch (light) {
      case TRAFFIC_LIGHT.RED:
        return 'stop';

      case TRAFFIC_LIGHT.YELLOW:
        return 'wait';
      default:
        return 'go';
    }
  };

  console.log(getAction(TRAFFIC_LIGHT.GREEN));

  //*-----------------Стилизация компонентов
  const textStyles = {
    color: 'blue',
    fontSize: '26px'
  }
  return (
    <div className='lesson07-container'>
      <div style={{color: 'green'}}>Inline style example 1</div>
      <p style={textStyles}>Inline style example 2</p>
      <BoxInfo primary>Emotion example</BoxInfo>
      <BoxInfo>Emotion example 2</BoxInfo>
    </div>
  );
}

export default Lesson07;
