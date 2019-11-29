import React from 'react';
import './Expense.css';

const Expense = (props) => {
    return (
        <li className='Expense'>
            <p>{props.name} - <span>{props.price} KGS</span> </p>
            <button className='DeleteExpense' onClick={props.deleteExpense}>x</button>
        </li>
    );
};

export default Expense;