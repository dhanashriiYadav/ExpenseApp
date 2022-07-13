import '../Expense/Expenses.css'
import ExpenseList from './ExpenseList/ExpenseList'
// import ExpenseItem from './ExpenseItem/ExpenseItem'
import Card from '../UI/Card'
import React, { useState } from 'react';
import ExpenseFilter from './ExpenseFilter/ExpenseFilter'
import { ExpenseChart } from './ExpenseChart/ExpenseChart';

function Expense(props) {

    //set default value in select
    const [filterYear, setfilterYear] = useState('2020')

    function onChangeFilterHandler(onChangeYrValue) {
        setfilterYear(onChangeYrValue)
    }

    // console.log(filterYear)
                                 //expense contains all objects of ExpenseItem
    const filteredExpense = props.items.filter((expense) => {
        return (                       
            expense.date.getFullYear().toString() === filterYear
                        
        )            //filteredExpense contains objects which year is matched
    })
    // console.log(props.items)
    return (
        <Card className="expenses">
            <ExpenseFilter selectedYr={filterYear}
                          onChangeFilter={onChangeFilterHandler} />
            <ExpenseChart expenses={filteredExpense}/>

            <ExpenseList items={filteredExpense} />

        </Card>


    )
}

export default Expense

//   <ExpenseItem date1={props.obj[0].date}
//                          title={props.obj[0].title}
//                          amount={props.obj[0].amount} />
//             <ExpenseItem date1={props.obj[1].date}
//                          title={props.obj[1].title}
//                          amount={props.obj[1].amount} />
//             <ExpenseItem date1={props.obj[2].date}
//                          title={props.obj[2].title}
//                          amount={props.obj[2].amount} /> 

//  {props.items.map((data) => (
//                 // console.log('data:',data.title)
//                 <ExpenseItem
//                     key={data.id}
//                     title={data.title}
//                     date={data.date}
//                     amount={data.amount}
//                 />
//             ))
//             } 