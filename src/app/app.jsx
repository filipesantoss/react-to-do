import React from 'react';
import { Route } from 'react-router-dom';
import Message from './message/message';
import ToDoForm from './to-do/to-do-form-container';
import ToDoList from './to-do/to-do-list-container';
import './app.css';

const App = () => (
    <div className="app">
        <Message />
        <ToDoForm />
        <Route
            path="/:filter?" // Optional
            render={({ match }) => <ToDoList filter={match.params.filter} />}
        />
    </div>
);

export default App;
