
import '../ExpenseFilter/ExpenseFilter.css'

function ExpenseFilter(props) {
    function onSelectChangeHandler(e){  
        props.onChangeFilter(e.target.value)
    }
    return (  //value={props.selectedYr} by default set value which is came from filteryear
        <div className='selectOuter'>
            <label className='filter_lable'>Filter by year</label>
            <select value={props.selectedYr} onChange={onSelectChangeHandler}>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
        </div>
    )
}

export default ExpenseFilter