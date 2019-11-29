import React from 'react';
import './AddExpenceForm.css';

const AddExpenseForm = (props) => {
    return (
        <form onSubmit={props.addExpense}>
            <input type="text"
                   placeholder='Enter your expense'
                   name='currentExpName'
                   autoFocus={true}
                   onChange={props.onChange}
                   value={props.expense}
      />
            <input type='number'
                   placeholder='Sum spent'
                   name='currentExpCost'
                   onChange={props.onChange}
                   value={props.cost}
            />
            <select value={props.defaultSelect} onChange={props.onChange} name='currentExpType'>
                <option value="food">Food</option>
                <option value="entertainment">Entertainment</option>
                <option value="bills">Bills</option>
                <option value="commute">Car or commute</option>
                <option value="clothes">Clothes</option>
            </select>
            <input type="submit" value="Add" disabled={!props.isValid}/>
        </form>
    );
};

export default AddExpenseForm;