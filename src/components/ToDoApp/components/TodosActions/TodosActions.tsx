import Button from "../Button/Button";
import { ButtonsContainer, ReloadIcon, DeleteIcon,ButtonWrapper } from "./styled";
import { TodosActionsProps } from "./types";

function TodosActions({deleteCompletedTodos,deleteAllTodos, numberOfCompletedTodos}:TodosActionsProps){
  return(

    <ButtonsContainer>
      <ButtonWrapper onClick={deleteAllTodos}>
        <Button >
          <ReloadIcon/>
        </Button>
      </ButtonWrapper>
      {numberOfCompletedTodos>0 && <ButtonWrapper onClick={()=>{deleteCompletedTodos()}}>
        <Button  >
          <DeleteIcon/>
        </Button>
      </ButtonWrapper>}
    </ButtonsContainer>
  )
}

export default TodosActions;