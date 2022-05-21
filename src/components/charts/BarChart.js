
import './charts.css';
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import {Pie} from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto';

function BarChart ({ chartData }) {
  return ( 
    <div className='chart'>Bar Analytics
      <div style={{width:500}} className='chartTitle'>
       <Bar data={chartData} />
       </div>
       Line Analytics
       <div style={{width:500}} className='chartTitle'>
       <Line data={chartData} />
       </div>
       Pie Analytics
       <div style={{width:500}} className='chartTitle'>
       <Pie data={chartData} />
       </div>
       </div>
       
  )
    
}
export default BarChart;


/* 

        */

