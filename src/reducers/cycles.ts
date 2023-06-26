export interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

interface CyclesState {
  cycles: Cycle[];
  activeCycleId: string | null;
}

export enum ActionTypes {
  ADD_NEW_CYCLE = "ADD_NEW_CYCLE",
  INTERRUPT_CYCLE = "INTERRUPT_CYCLE",
  MARK_CURRENT_TASK_COMPLETED = "MARK_CURRENT_TASK_COMPLETED",
}

export function cyclesReducer(state: CyclesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      return {
        ...state,
        activeCycleId: action.payload.newCycle.id,
        cycles: [...state.cycles, action.payload.newCycle],
      };

    case ActionTypes.INTERRUPT_CYCLE:
      return {
        ...state,
        activeCycleId: null,
        cycles: state.cycles.map((cycle) =>
          cycle.id === state.activeCycleId
            ? { ...cycle, interruptedDate: new Date() }
            : cycle
        ),
      };

    case ActionTypes.MARK_CURRENT_TASK_COMPLETED:
      return {
        ...state,
        activeCycleId: null,
        cycles: state.cycles.map((cycle) =>
          cycle.id === state.activeCycleId
            ? { ...cycle, finishedDate: new Date() }
            : cycle
        ),
      };

    default:
      return state;
  }
}
