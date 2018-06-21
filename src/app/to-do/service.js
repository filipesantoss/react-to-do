import Axios from 'axios';
import Config from '../../config';

const axios = Axios.create({ baseURL: Config.baseURL });

export const list = async () => {
    const toDos = await axios.get('/toDos');
    return toDos.data;
};

export const create = async text => {
    const toDo = await axios.post('/toDos', { text, isComplete: false });
    return toDo.data;
};

export const update = async ({ id, text, isComplete }) => {
    const toDo = await axios.put(`/toDos/${id}`, { id, text, isComplete });
    return toDo.data;
};

export const remove = async id => {
    await axios.delete(`/toDos/${id}`);
};
