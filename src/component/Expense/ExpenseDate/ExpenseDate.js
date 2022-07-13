import '../ExpenseDate/ExpenseDate.css'

function ExpenseDate(props){
    const month=props.date.toLocaleString('en-US', { month: 'long' })
    const day=props.date.getDate()
    const yr=props.date.getFullYear()
    return(
        <div className="ExpenseDate">
            {/* {props.date1} */}
            <p className='day'>{day}</p>
            <hr />
            <p>{month}</p>
            <p className='yr'>{yr}</p>
            
        </div>
    )
}
export default ExpenseDate