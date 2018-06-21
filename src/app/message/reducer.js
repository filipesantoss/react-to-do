import { actionTypes as ToDoActionTypes } from '../to-do/actions';
import { actionTypes as MessageActionTypes } from './actions';

export default (state = '', action) => {
    switch (action.type) {
        case MessageActionTypes.SHOW:
            return action.payload;

        case ToDoActionTypes.INSERT:
        case ToDoActionTypes.LOAD:
        case ToDoActionTypes.UPDATE:
        case ToDoActionTypes.DELETE:
            return '';

        default:
            return state;
    }
};
