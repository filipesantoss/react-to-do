export const actionTypes = {
    SHOW: 'message:show'
};

export const showMessage = text => ({ type: actionTypes.SHOW, payload: text });
