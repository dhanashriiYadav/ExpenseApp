
import ExpenseForm from "../ExpenseForm/ExpenseForm"
import '../Addbutton/AddButton.css'
import {useState} from 'react'


function NewExpense(props){
    const [show, setShow]=useState(false)

    function onSaveExpenseDataHandler(data){
        
        const expenseData={
            ...data,id:Math.random().toString()
        }
        // console.log('from NewExpense:',expenseData)
        props.onAddExpense(expenseData)
    }

    return(

        <div className='buttondiv'>
         {/* <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/> */}
            {
                show?<ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>:null
            }
            
        <div className="addbtnDiv">
        <button className="EnterExpense" onClick={()=>setShow(true)}>Enter Your Expense</button>
        <button className="EnterExpense" onClick={()=>setShow(false)}>Cancle</button>

        </div>
            
        </div>
       
            
            
       
    )
}
export default NewExpense