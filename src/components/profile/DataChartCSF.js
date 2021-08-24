import react, {Component} from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class DataChartCSF extends Component{
    constructor(props){
        super(props);
        this.state = {
            cData:{
               datasets: [{
                   label:'CSF Rating',
                   data:[
                       3.6,
                       0.4
                   ],
                   backgroundColor:[
                       '#78c29e',
                       '#ffffff'
                   ]
               }]
            }
        }
    }
    render(){
      return (
          <div className='chart'>
              <Pie
	            data={this.state.cData}
	            width={100}
	            height={200}
	            options={{
                    title:{
                        display:false,
                        text:'Trainings',
                    },
                    legend:{
                        display:true,
                        position:'right'
                    },
                    labels:{
                        display:false
                    },
                    maintainAspectRatio: false 
                }}
                />
          </div>
      )  
    }
}

export default DataChartCSF
