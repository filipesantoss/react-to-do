import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './footer';
import Header from './header';
import App from './app';

import './root.css';

class Root extends React.Component {
    render() {
        return (
            <Router>
                <div className="root">
                    <Header />
                    <App />
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default Root;
