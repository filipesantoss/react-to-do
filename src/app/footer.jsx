import React from 'react';
import { Link } from 'react-router-dom';
import { filterTypes } from './to-do/selectors';

const Footer = () => (
    <div>
        <Link to="/">All</Link>
        <Link to={`/${filterTypes.PENDING}`}>Pending</Link>
        <Link to={`/${filterTypes.COMPLETE}`}>Complete</Link>
    </div>
);

export default Footer;
