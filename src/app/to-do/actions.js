/**
 * Actions must have a type property that indicates the type of action being performed.
 */

export const actionTypes = {
    INPUT_UPDATE: 'input:update',
    LOAD: 'toDo:load',
    INSERT: 'toDo:insert',
    UPDATE: 'toDo:update',
    DELETE: 'toDo:delete'
};

/**
 * Action creators make it easier to dispatch the same type of action for multiple components.
 */

export const updateInput = value => ({ type: actionTypes.INPUT_UPDATE, payload: value });

export const loadToDos = toDos => ({ type: actionTypes.LOAD, payload: toDos });

export const addToDo = toDo => ({ type: actionTypes.INSERT, payload: toDo });

export const updateToDo = ({ id, text, isComplete }) => ({
    type: actionTypes.UPDATE,
    payload: { id, text, isComplete }
});

export const deleteToDo = id => ({ type: actionTypes.DELETE, payload: id });
