import { actionTypes as ToDoActionTypes } from './actions';

const internals = {
    initialState: { toDos: [], inputValue: '' }
};

/**
 *
 * Dispatch will call a reducer with the current state and the action passed to it.
 * Triggers an update to state.
 * A reducer's job is to take in a state and an action and return a new state based on that action.
 * Actions only describe what happened, not how the application's state changes.
 */

export default (state = internals.initialState, action) => {
    switch (action.type) {
        case ToDoActionTypes.LOAD:
            return { ...state, toDos: action.payload };

        case ToDoActionTypes.INPUT_UPDATE:
            return { ...state, inputValue: action.payload };

        case ToDoActionTypes.INSERT:
            return { ...state, inputValue: '', toDos: [...state.toDos, action.payload] };

        case ToDoActionTypes.UPDATE:
            return {
                ...state,
                toDos: state.toDos.map(
                    toDo => (toDo.id === action.payload.id ? action.payload : toDo)
                )
            };

        case ToDoActionTypes.DELETE:
            return { ...state, toDos: state.toDos.filter(t => t.id !== action.payload) };

        default:
            return state;
    }
};
