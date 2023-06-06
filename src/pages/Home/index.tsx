import { Play } from "phosphor-react";
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from "./styles";

// import { useForm } from "react-hook-form";

export function Home() {
  // const { register, handleSubmit } = useForm();

  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em </label>
          <TaskInput
            id="task"
            type="text"
            placeholder="Give a name for your project"
            list="task-suggestion"
          />

          <datalist id="task-suggestion">
            <option value="Projeto1"></option>
          </datalist>

          <label htmlFor="minutesAmount">Durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={0}
            max={60}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>00</span>
          <span>00</span>

          <Separator>:</Separator>

          <span>00</span>
          <span>00</span>
        </CountdownContainer>

        <StartCountdownButton type="submit">
          <Play />
          Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
