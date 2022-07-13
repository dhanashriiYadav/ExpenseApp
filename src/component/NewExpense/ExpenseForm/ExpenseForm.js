import './ExpenseForm.css'
import React, { useState } from 'react'

function ExpenseForm(props) {
    // const [title, setTitle] = useState('')
    // const [date, setDate] = useState('')
    // const [amount, setAmount] = useState('')

    // function setAmountHandler(event) {
    //    // event.preventDefault()
    //     // console.log(amount)
    //     setAmount(event.target.value)
    //     // console.log(event.target.value)
    // }


    // function setDateHandler(event) {
    //     // event.preventDefault()
    //     setDate(event.target.value)

    // }
    // function setTitleHandler(event) {
    //     // event.preventDefault()
    //     setTitle(event.target.value)

    // }

    const [inputs, setInputs] = useState({
        enteredTitle: '',
        enteredDate: '',
        enteredAmount: '',
    })

    // function handleChange(event){
    //     const name=event.target.name
    //     const value=event.target.value
    //     setInputs(values=>({...values,[name]:value}))
    // }

    const dateChangeHandler = (e) => {
        setInputs({
            ...inputs, enteredDate: e.target.value
        })
    }

    const amountChangeHandler = (e) => {
        setInputs({
            ...inputs,
            enteredAmount: e.target.value
        })
    }

    const titleChangeHandler = (e) => {
        setInputs({
            ...inputs,
            enteredTitle: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(inputs)
        const expenseData = {
            title: inputs.enteredTitle,
            amount: inputs.enteredAmount,
            date: new Date(inputs.enteredDate),
        }

        console.log("from ExpenseForm:", expenseData)

        props.onSaveExpenseData(expenseData)


        //clear textboxes
      
        setInputs({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: '',
          })
          
    }

    ///passing data to NewExpense as a object-inputs is object

    // props.onSaveExpenseData(inputs)


    return (
        <div>
            {/* <div className='container'> */}
            <span className="dot"></span><span className="dot"></span><span className="dot"></span>
            <form onSubmit={handleSubmit}>
                <table-caption><h3>ADD YOUR EXPENSE HERE</h3></table-caption>
                <table>
                    <tbody>
                        <tr>
                            <td><label>Enter Date:</label></td>

                            <td><input type="date" name='date' value={inputs.enteredDate} onChange={dateChangeHandler} /></td>
                        </tr>
                        <tr>
                            <td><label>Enter Title:</label></td>

                            <td><input type="text" name='title' value={inputs.enteredTitle} onChange={titleChangeHandler} /></td>
                        </tr>
                        <tr>
                            <td><label>Enter Amount:</label></td>

                            <td>
                                <input type="text" name='amount' value={inputs.enteredAmount} onChange={amountChangeHandler} />
                                {/* <input type="text" name='amount' value={inputs.amount} onChange={(e)=>setAmount(e.target.value)} /> */}
                            </td>
                        </tr>
                        <tr>
                            {/* <td><input type="submit"  /></td> */}
                            <td colSpan={2}><div className='style-button'><button className='addbutton'>ADD EXPENSE</button></div></td></tr>
                    </tbody>
                </table>
            </form>
            {/* </div> */}

        </div>

    )
}

export default ExpenseForm