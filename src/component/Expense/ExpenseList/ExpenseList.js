import ExpenseItem from "../ExpenseItem/ExpenseItem";

function ExpenseList(props) {
    let expenseContent=0
    if (props.items.length===0){
        return <h5 style={{color:"rgb(85, 7, 7)",textAlign:"center",fontSize:"25px"}}>
            Data Not Foumd</h5>
    }
    else {
        expenseContent = props.items.map((data) => (
            <ExpenseItem
                key={data.id}
                title={data.title}
                date={data.date}
                amount={data.amount}
            />
        ))
    }

    return (
        <div>
            {expenseContent}
        </div>

    )
}

export default ExpenseList