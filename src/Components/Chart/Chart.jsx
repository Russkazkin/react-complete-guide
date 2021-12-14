import React from 'react';
import { uniqueId } from 'lodash';
import ChartBar from './ChartBar';
import './Chart.sass';

const Chart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((item) => item.value);
  const totalMax = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {dataPoints.map((item) => (
        <ChartBar value={item.value} maxValue={totalMax} label={item.label} key={uniqueId('bar')} />
      ))}
    </div>
  );
};

export default Chart;
