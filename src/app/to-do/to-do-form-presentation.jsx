import PropTypes from 'prop-types';
import React from 'react';
import './to-do.css';

const ToDoForm = ({ handleSubmit, inputValue, handleInput }) => (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="ToDo:" value={inputValue} onChange={handleInput} />
    </form>
);

ToDoForm.propTypes = {
    handleInput: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired
};

export default ToDoForm;
