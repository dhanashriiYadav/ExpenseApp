
import { useState } from 'react';
import './App.css';
import Expense from './component/Expense/Expense';
import NewExpense from './component/NewExpense/NewExpense/NewExpense'
// import Form1 from './component/other/Form1';
// import Graph from './component/other/Graph';
// import Graph2 from './component/other/Graph2';
 

const DummyExpense = [
  {
    id: 2,
    title: 'Car Insurance',
    date: new Date(2020, 7, 24),
    amount: 46,
  } ,
  {
    id:4 ,
    title: 'Book stand',
    date: new Date(2022, 5, 3),
    amount: 96.2,
  },
  {
    id: 3,
    title: 'new TV',
    date: new Date(2020, 4, 15),
    amount: 105,
  },
]


function App() {
  const [allExpenses, setnewExpense] = useState(DummyExpense)
  
  function onAddExpenseHandler(data) {
    setnewExpense(prevExpenses => {   //prevExpenses=DummyExpense
      return [data, ...prevExpenses]  //add data come from newexpense dynamically
    })
    // console.log('In App.js')
    // console.log(data)
  }

  return (
    <div>
      <NewExpense onAddExpense={onAddExpenseHandler} />
      {/* <AddButton /> */}
      <Expense items={allExpenses} />
      {/* <Form1 /> */}
      {/* <Graph /> */}
    </div>
  );
}

export default App;
