import React, {Component, Fragment} from 'react';
import AddExpenseForm
    from "../../components/AddExpenseForm/AddExpenseForm";
import nanoid from 'nanoid';
import Expenses from "../../components/Expenses/Expenses";
import TotalSum from "../../components/TotalSum/TotalSum";
import ExpensesChart
    from "../../components/ExpensesChart/ExpensesChart";
import './ExpenseTracker.css';

class ExpenseTracker extends Component {
    state = {
        expenses: [
            {name: 'Milk', price: 250, type: 'food', id: nanoid()},
            {name: 'Movie Tickets', price: 500, type: 'entertainment', id: nanoid()},
            {name: 'Bus Tickets', price: 50, type: 'commute', id: nanoid()},
            {name: 'Winter Coat', price: 5000, type: 'clothes', id: nanoid()},
            {name: 'Boots', price: 2500, type: 'clothes', id: nanoid()}
        ],
        currentExpName: '',
        currentExpCost: 0,
        currentExpType: 'food',
        totalSum: 8300,
    };
    handleChange = e => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]: value});
    };
    validateForm =()=> (this.state.currentExpName.trim() && this.state.currentExpCost);

    addExpense = e => {
        e.preventDefault();
        if(this.validateForm()) {
            const expenses = [...this.state.expenses];
            const priceToAdd = parseInt(this.state.currentExpCost, 10);
            const expToAdd = {name: this.state.currentExpName,
                                price: priceToAdd,
                                type: this.state.currentExpType,
                                id: nanoid()};
            expenses.push(expToAdd);

            const oldSum = this.state.totalSum;
            const newSum = oldSum + priceToAdd;
            this.setState({expenses, currentExpName: '', currentExpCost: 0, currentExpType: 'food', totalSum: newSum})
        }
    };
    deleteExpense = id => {
        const expenseIndex = this.state.expenses.findIndex(p=>p.id === id);
        const expenses = [...this.state.expenses];

        const oldSum = this.state.totalSum;
        const priceToSubtract = expenses[expenseIndex].price;
        const newSum = oldSum - priceToSubtract;
        expenses.splice(expenseIndex, 1);

        this.setState({expenses, totalSum: newSum});
    };
    render() {
        const isValid = this.validateForm();
        const chartData = this.state.expenses.map(({price, type}) => ({price, type}));

        return (
            <Fragment>
                <div className='col-1'>
                    <div className='ExpenseTracker'>
                        <AddExpenseForm
                            onChange={this.handleChange}
                            expense={this.state.currentExpName}
                            cost={this.state.currentExpCost}
                            isValid = {isValid}
                            defautSelect={this.state.currentExpType}
                            addExpense={(e)=>this.addExpense(e)}
                        />
                    </div>
                    <Expenses
                        expenses={this.state.expenses}
                        deleteExpense={this.deleteExpense}
                    />
                    <TotalSum
                        total={this.state.totalSum}/>
                </div>
                <div className='col-2'>
                    <ExpensesChart
                        data={chartData}
                        total={this.state.totalSum}
                    />
                </div>

            </Fragment>
        );
    }
}

export default ExpenseTracker;