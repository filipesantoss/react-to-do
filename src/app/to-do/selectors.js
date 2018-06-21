/**
 * Selectors provide an additional abstraction layer.
 * If there's a need to alter the store structure it's only needed to update the selector,
 * not everywhere there was a reference to the state subset.
 */

export const filterTypes = {
    PENDING: 'pending',
    COMPLETE: 'complete'
};

export const getVisibleToDos = (toDos, filter) => {
    switch (filter) {
        case filterTypes.PENDING:
            return toDos.filter(toDo => !toDo.isComplete);

        case filterTypes.COMPLETE:
            return toDos.filter(toDo => toDo.isComplete);

        default:
            return toDos;
    }
};
