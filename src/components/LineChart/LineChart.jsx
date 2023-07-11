import Chart from 'chart.js/auto';
import {  CategoryScale} from 'chart.js';
import { useEffect, useState } from 'react';
import { Data} from '../../utils/chartDatas.js';
import { Line} from 'react-chartjs-2';


const LineComponent =( { chartData}) => {
  return (
    <div className='relative w-[100%]  h-[90%] flex items-center flex-col m-0 p-0'>

      <Line
        data={chartData}
        options={{
          scales: {
            x: {
              grid: {
                display: false
              },

            },
            y: {
              grid: {
                display: true
              },
              ticks: {
                display: false
            }
              

            }
          },
          responsive : true,
          maintainAspectRatio: false,
          plugins : {
            title : {
              display : false,
              text : "Users gauned between 2022"
            },
            legend : {
              display : false
            },
          }
        }}
      />
    
    </div>
  )
}


Chart.register(CategoryScale);
 
export default function LineChart() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: "Users Gained ",
        tension: 0.4,
        
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "#B0ADAA"
        ],
        borderColor:"#B0ADAA",
   
      }
    ]
  });
  return(
    <div className='relative w-[100%]  h-[100%] m-0 p-0'>
      <LineComponent chartData={chartData}/>
  </div>
  )

  
}