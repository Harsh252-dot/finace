import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/income">income</Link></li>
                <li><Link to="/expenses">Expenses</Link></li>
                <li><Link to="/transactions">Transactions</Link></li>
                <li><Link to="/savings">Savings</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;