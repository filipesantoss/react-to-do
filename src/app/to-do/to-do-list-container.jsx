import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { getVisibleToDos } from './selectors';
import { propTypes as ToDoProp } from './to-do';
import { fetchToDos, checkToDo, removeToDo } from './thunks';
import TodoList from './to-do-list-presentation';

class ToDoListContainer extends React.Component {
    static propTypes = {
        fetchToDos: PropTypes.func.isRequired,
        toDos: PropTypes.arrayOf(ToDoProp).isRequired,
        checkToDo: PropTypes.func.isRequired,
        removeToDo: PropTypes.func.isRequired,
        filter: PropTypes.string
    };

    static defaultProps = {
        filter: null
    };

    componentDidMount() {
        this.props.fetchToDos();
    }

    render() {
        const { toDos, checkToDo, removeToDo } = this.props;
        return <TodoList checkToDo={checkToDo} toDos={toDos} removeToDo={removeToDo} />;
    }
}

const mapStateToProps = (state, ownProps) => ({
    toDos: getVisibleToDos(state.toDo.toDos, ownProps.filter)
});

const mapDispatchToProps = {
    fetchToDos,
    checkToDo,
    removeToDo
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoListContainer);
