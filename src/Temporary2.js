import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'


const The_charts = () => {
    
    const base_link = 'http://103.200.4.18:8181/api/attrition/rate_v3/year'
    const year = '2021'
    const link = base_link + '/' + year

    const fetchURL = link;
    const getItems = () => fetch(fetchURL).then(res => res.json());

    const [items, setItems] = useState();

  useEffect(() => {
    getItems().then(data => setItems(data));
  }, []);

    return (
        <div>
           {
           items.map(chart => (

                <div className='container'>
                    <h1>{chart.division}</h1>
                    <h1 className='header'><b>{chart.text}</b></h1>
                    <Doughnut 
                        data={{
                            labels: [chart.title_rate, chart.title_else],
                            datasets:[
                                {
                                    label:'attrition Rate',
                                    data: [
                                        chart.rate,
                                        chart.else_rate
                                    ],
                                    backgroundColor:[
                                    'rgba(255, 99, 132, 0.6)',
                                    '#cbcbcb'
                                    ]
                                }
                            ]
                        }}
                        options={{
                            plugins: {
                                datalabels: {
                                    formatter: (value) => {
                                    return value + '%';
                                }}}
                        }}
                    />
                </div>
            ))}
        </div>
    )
}

export default The_charts
