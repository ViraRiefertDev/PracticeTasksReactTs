import GlobalStyles from './styles/GlobalStyles';

//tasks
import Task1Counter from 'tasks/Task1Counter/Task1Counter';
import Task2Counter from 'tasks/Task2Counter/Task2Counter';
import Task03TodoApp from 'tasks/Task3TodoApp/Task03TodoApp';
import Task3_1TodoApp from 'tasks/Task3_1TodoApp/Task3_1TodoApp';

function App() {
  return (
    <>
      <GlobalStyles />
      {/* <Task1Counter/> */}
      {/* <Task2Counter/> */}
      {/* <Task03TodoApp/> */}
      <Task03TodoApp />
      {/* <Task3_1TodoApp/> */}
    </>
  );
}

export default App;
