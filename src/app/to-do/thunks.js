import { showMessage } from '../message/actions';
import * as ToDoActions from './actions';
import * as ToDoService from './service';

/**
 * A thunk can be used to delay the dispatch of an action.
 * The inner function receives the store methods dispatch and getState as parameters.
 */

export const fetchToDos = () => {
    return async dispatch => {
        dispatch(showMessage('Loading ToDos'));

        const toDos = await ToDoService.list();
        dispatch(ToDoActions.loadToDos(toDos));
    };
};

export const saveToDo = text => {
    return async dispatch => {
        dispatch(showMessage('Saving ToDo'));

        const toDo = await ToDoService.create(text);
        dispatch(ToDoActions.addToDo(toDo));
    };
};

export const checkToDo = id => {
    return async (dispatch, getState) => {
        dispatch(showMessage('Updating ToDo'));

        const { toDos } = getState().toDo;
        let toDoToUpdate = toDos.find(toDo => toDo.id === id);
        toDoToUpdate = { ...toDoToUpdate, isComplete: !toDoToUpdate.isComplete };

        const toDo = await ToDoService.update(toDoToUpdate);
        dispatch(ToDoActions.updateToDo(toDo));
    };
};

export const removeToDo = id => {
    return async dispatch => {
        dispatch(showMessage('Removing ToDo'));

        await ToDoService.remove(id);
        dispatch(ToDoActions.deleteToDo(id));
    };
};
