import { ChartBar } from "../ChartBar/ChartBar"
import '../Chart/Chart.css'
import Card from "../../UI/Card"

export const Chart=(props)=>{

    const chartDataValue=props.ChartData.map(data=>data.value)
    const MaxValue=Math.max(...chartDataValue)
    // console.log('max',MaxValue)
    const ChartArray=props.ChartData.map(data=>(
        <ChartBar 
            key={data.label} 
            value={data.value}
            label={data.label}
            maxValue={MaxValue}   
       />

    ))

    return(
       <Card className="chart">
             {ChartArray}
       </Card>
    )
}