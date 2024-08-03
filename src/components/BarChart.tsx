import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
} from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement);
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
            text: 'Bar Chart',
        },
    },
};
function BarChart() {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep","Oct", "Nov", "Dec"],
        datasets: [
            {
                label: 'Bar Chart',
                data: [100, 200, 150, 290, 80, 600,40, 500, 100, 700, 400, 100],
                fill: false,
                 backgroundColor: 'rgb(156, 20, 50)',
                borderColor: 'rgba(176, 23, 56, 0.2)',
            }
        ],
    };
    return (
        <div className='h-full text-white w-full bg-black rounded-xl border-1 p-2'>
            <Bar data={data} options={options} />
        </div>
    );
}

export default BarChart;
