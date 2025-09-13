import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';


export default function Graph({ allMonths }) {

    const chartRef = useRef(null);

    useEffect(() => {
        // Initialize the chart
        const chart = echarts.init(chartRef.current);

        const option = {
            xAxis: {
                type: 'category',
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [allMonths.jan, allMonths.feb, allMonths.mar, allMonths.apr, allMonths.may, allMonths.jun, allMonths.jul, allMonths.aug, allMonths.sep, allMonths.oct, allMonths.nov, allMonths.dec],
                    type: 'bar'
                }
            ]
        };

        chart.setOption(option);

        // For Responsive Chart
        window.addEventListener("resize", () => chart.resize());

        return () => {
            chart.dispose(); // removes chart instance
        };
    }, [allMonths])


    return (
        <div ref={chartRef} id='chart' style={{ maxWidth: '800px', height: "400px", margin: "auto" }}></div>
    )
}