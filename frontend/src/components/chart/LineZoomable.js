import React from 'react'
import { Line } from 'react-chartjs-2'

export default function LineZoomable({data}) {
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

  return (
    <Line data={data} options={options} />
  )
}