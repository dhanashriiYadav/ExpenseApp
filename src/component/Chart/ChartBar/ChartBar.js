import '../ChartBar/ChartBar.css'

export const ChartBar=(props)=>{
    
    let barfillheight= '0%'
    if(props.maxValue>0){
        barfillheight=Math.round((props.value/props.maxValue)*100)+'%'
        
    }
    // console.log("fill",barfillheight)
    

    return(
        <div>
        <div className='outer_bar'>
            <div className="Innner_bar">
                <div className="fill_bar" style={{height:barfillheight}}>
                </div>
            </div>
            
        </div>
        <div className="labels">{props.label}</div>
        </div>
    )
}