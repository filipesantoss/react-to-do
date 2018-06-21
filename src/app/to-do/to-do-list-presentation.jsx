import PropTypes from 'prop-types';
import React from 'react';
import { propTypes as ToDoProp } from './to-do';
import './to-do.css';

const ToDoItem = ({ toDo, checkToDo, removeToDo }) => (
    <li>
        <button className="delete" onClick={() => removeToDo(toDo.id)}>
            -
        </button>
        <input type="checkbox" checked={toDo.isComplete} onChange={() => checkToDo(toDo.id)} />
        {toDo.text}
    </li>
);

ToDoItem.propTypes = {
    toDo: ToDoProp.isRequired,
    checkToDo: PropTypes.func.isRequired,
    removeToDo: PropTypes.func.isRequired
};

const ToDoList = ({ checkToDo, toDos, removeToDo }) => (
    <div>
        <ul>
            {toDos.map(toDo => (
                <ToDoItem
                    key={toDo.id} // Keys should be given to the elements inside the array.
                    checkToDo={checkToDo}
                    toDo={toDo}
                    removeToDo={removeToDo}
                />
            ))}
        </ul>
    </div>
);

ToDoList.propTypes = {
    toDos: PropTypes.arrayOf(ToDoProp).isRequired,
    checkToDo: PropTypes.func.isRequired,
    removeToDo: PropTypes.func.isRequired
};

export default ToDoList;
