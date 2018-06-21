import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { updateInput } from './actions';
import { saveToDo } from './thunks';
import ToDoForm from './to-do-form-presentation';

class ToDoFormContainer extends React.Component {
    static propTypes = {
        updateInput: PropTypes.func.isRequired,
        inputValue: PropTypes.string.isRequired,
        saveToDo: PropTypes.func.isRequired
    };

    handleInput = event => this.props.updateInput(event.target.value);

    handleSubmit = event => {
        event.preventDefault();
        this.props.saveToDo(this.props.inputValue);
    };

    render() {
        const { inputValue } = this.props;

        return (
            <ToDoForm
                handleSubmit={this.handleSubmit}
                handleInput={this.handleInput}
                inputValue={inputValue}
            />
        );
    }
}

/**
 * Any time the store is updated, mapStateToProps will be called.
 * Function that accepts the entire state and returns the subset needed to be passed as props to the component.
 */

const mapStateToProps = state => ({ inputValue: state.toDo.inputValue });

/*
 * Function that accepts the dispatch method from store and returns an object containing dispatch functions.
 * If it is an object, each function inside it is assumed to be an action creator. 
 */

const mapDispatchToProps = {
    updateInput,
    saveToDo
};

/**
 * Connects a newly created component to a redux store.
 */

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoFormContainer);
