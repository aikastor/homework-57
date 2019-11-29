import React, {Fragment} from 'react';
import './ExpensesChart.css';

const ExpensesChart = (props) => {
    const data = props.data;
    const totalSum = props.total;
    console.log(totalSum);
    const entertainment = data.reduce((acc, item) => (item.type === 'entertainment' ? acc + item.price: acc),0);
    const clothes = data.reduce((acc, item) => (item.type === 'clothes' ? acc + item.price: acc),0);
    const food = data.reduce((acc, item) => (item.type === 'food' ? acc + item.price: acc),0);
    const commute = data.reduce((acc, item) => (item.type === 'commute' ? acc + item.price: acc),0);

    const entertainmentWidth = (entertainment * 100) / totalSum;
    const clothesWidth = (clothes * 100) / totalSum;
    const foodWidth = (food * 100) / totalSum;
    const commuteWidth = (commute* 100) / totalSum;

    console.log(entertainmentWidth);
    console.log(clothesWidth);
    return (
        <Fragment>
            <div className='Chart'>
                <div style={{width: `${entertainmentWidth}%`}} className='Entertainment chart'><span>E</span></div>
                <div style={{width: `${clothesWidth}%`}} className='Clothes chart'><span>C</span></div>
                <div style={{width:`${foodWidth}%`}} className='Food chart'><span>F</span></div>
                <div style={{width: `${commuteWidth}%`}} className='Commute chart'><span>Com</span></div>
            </div>
            <div className='Legend'>
                <div className='Entertainment l'> <span>Entertainment</span></div>
                <div className='Clothes l'><span>Clothes</span></div>
                <div className='Food l'><span>Food</span></div>
                <div className='Commute l'><span>Commute</span></div>
            </div>
        </Fragment>

    );
};

export default ExpensesChart;