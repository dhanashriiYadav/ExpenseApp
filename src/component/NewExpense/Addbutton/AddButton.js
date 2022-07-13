import '../Addbutton/AddButton.css'

function AddButton(){
    return(
        <div className='buttondiv'>
            <button className="EnterExpense" onClick={()=>setShow(true)}>Enter Your Expense</button>
            <button className="EnterExpense" onClick={()=>setShow(false)}>Cancle</button>
        </div>
    )
}

export default AddButton