
import { Chart } from "../../Chart/Chart/Chart"
export const ExpenseChart=(props)=>{

    const ChartData=[
        {label:'Jan',value:0},
        {label:'Feb',value:0},
        {label:'Mar',value:0},
        {label:'Apr',value:0},
        {label:'May',value:0},
        {label:'Jun',value:0},
        {label:'Jul',value:0},
        {label:'Aug',value:0},
        {label:'Sep',value:0},
        {label:'Oct',value:0},
        {label:'Nov',value:0},
        {label:'Dec',value:0},

    ]

     // const MaxValue=props.expenses.map((data)=>{
    //     const emonth=data.date.getMonth() 
    //      ChartData[emonth].value +=data.amount
    //      // console.log("chart",ChartData[2].value+1)
    //     console.log(ChartData[emonth].value)
    // })
    // // console.log('monthValue',MaxValue)


    for(const expense of props.expenses){
        const month=expense.date.getMonth()
        ChartData[month].value +=expense.amount
        // console.log("chart", ChartData[month].value)
    }
   // console.log(ChartData)  //Array -ChartData
   
    

    return(
        <div>
            <Chart ChartData={ChartData} />
        </div>
    )

}