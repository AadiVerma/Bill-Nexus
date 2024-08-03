import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
} from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement);
const options = {
    responsive: true,
    scales: {
        x: {
            display: false,
        },
        // y: {
        //     display: false,
        // }
    },
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Line Chart',
        },
    },
};
function LineChart() {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep","Oct", "Nov", "Dec"],
        datasets: [
            {
                label: 'Line Chart',
                data: [100, 200, 150, 290, 80, 600,40, 500, 100, 700, 400, 100],
                fill: false,
                backgroundColor: 'rgb(176, 23, 56)',
                borderColor: 'rgba(176, 23, 56, 0.2)',
                
            }
        ],
    };
    return (
        <div className='h-full text-white w-full bg-black rounded-xl border-1 p-2'>
            <Line data={data} options={options} />
        </div>
    );
}

export default LineChart;
