import '../ExpenseItem/ExpenseItem.css'
import Card from '../../UI/Card'
import ExpenseDate from '../ExpenseDate/ExpenseDate'
import React,{useState} from 'react'



function ExpenseItem(props) {
    const [title,setTitle]=useState(props.title)
    function clickHandler(){
        console.log('button clicked...')
        setTitle('Updated...')
    }
    return (
        <Card className="outer">
            <ExpenseDate date={props.date} />
            {/* <div className="middle">{props.title}</div> */}
            <div className='middle'>{title}</div>
            <div className="third">{props.amount}</div>
            <button onClick={clickHandler}>Cilck Me</button>  {/*add button */}
        </Card>
    )
}

export default ExpenseItem