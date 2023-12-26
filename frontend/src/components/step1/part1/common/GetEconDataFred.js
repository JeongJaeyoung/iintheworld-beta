import React, { useState, useEffect } from 'react'
import { axiosInstance } from '../../../../services/api';
import './GetEconDataFred.css'
import { Line } from 'react-chartjs-2';
import Spinner from '../../../../components/common/Spinner'
import { Card } from 'antd'
import zoomPlugin from "chartjs-plugin-zoom";
import Chart from 'chart.js/auto'; // chartjs 전역 설정 때문에 필요
Chart.register( zoomPlugin);

export default function GetEconDataFred({ code, frequency, chartName }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState({
        labels: [],
        datasets: [{
            label: "",
            data: []
        }],
    });

    const zoomOptions = {
        pan: {
          enabled: true,
          mode: "x"
        },
        zoom: {
          wheel: {
            enabled: true
          },
          pinch: {
            enabled: true
          },
          mode: "x"
        }
      };
      
      const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          zoom: zoomOptions
        }
      };

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const response = await axiosInstance.get(`/iintheworld/econ-data/fred/?code=${code}&frequency=${frequency}`) // object 형태
                const arrayData = response.data.observations // array 형태
                const updateData = {
                    ...data,
                    labels: arrayData.map(element => (element.date.substr(0, 4) + '년')),
                    datasets: [{
                        label: chartName,
                        data: arrayData.map(element => element.value),
                        borderColor: 'gold',
                        fill: true,
                        backgroundColor: 'rgba(255,223,0,0.1)',
                        borderWidth: 1,
                        pointRadius: 1,
                    }]
                };
                setData(updateData);
                setLoading(false);
            } catch (e) {
                setError(e)
                setLoading(false);
            }
        }
        fetchData();
    }, [])


    return (
        <>
            {loading ? (
                <>
                    <Spinner />
                </>
            ) : error ? (
                <>
                    {error.message}
                </>
            ) : (
                <>
                    <Card className='world_data_card'>
                        <div className='chart_wrapper'>
                            {window.innerWidth < 500 ?
                                <div style={{ width: '80vw', height: '25vh' }}>
                                    <Line data={data}
                                        options={options}
                                    />
                                </div>
                                :
                                <Line data={data}
                                    height={200}
                                    options={options}
                                />
                            }
                        </div>
                    </Card>
                </>
            )}
        </>
    )
}