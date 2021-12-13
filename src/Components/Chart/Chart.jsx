import React from 'react';
import { uniqueId } from 'lodash';
import ChartBar from './ChartBar';
import './Chart.sass';

const Chart = ({ dataPoints }) => {
  return (
    <div className="chart">
      {dataPoints.map((item) => (
        <ChartBar value={item.value} maxValue={null} label={item.label} key={uniqueId('bar')} />
      ))}
    </div>
  );
};

export default Chart;
