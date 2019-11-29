import React from 'react';
import Expense from "../Expense/Expense";

const Expenses = props => {
    const expenses = props.expenses.map(expense => (
        <Expense
            name={expense.name}
            key={expense.id}
            price={expense.price}
            deleteExpense={()=>props.deleteExpense(expense.id)}
        />
    ));

    return (
        <ul className='Expenses'>
            {expenses}
        </ul>
    );
};

export default Expenses;