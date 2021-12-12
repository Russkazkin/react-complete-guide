import React from 'react';
import './ChartBar';
import './Chart.sass';
import { uniqueId } from 'lodash';

const Chart = ({ dataPoints }) => {
 return (
   <div className="chart">
     {dataPoints.map(item => <ChartBar value={item.value} maxValue={null} label={item.label} key={uniqueId('bar')} />)}
   </div>
 );
};

export default Chart;
