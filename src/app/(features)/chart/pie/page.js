import React from 'react';
import PieChartWithPaddingAngle from './_components/PieChartWithPaddingAngle';
import TwoLevelPieChart from './_components/TwoLevelPieChart';
import PieChartWithCustomizedLabel from './_components/PieChartWithCustomizedLabel';

export default function BarChart() {
  return (
    <>
      <PieChartWithPaddingAngle />
      <TwoLevelPieChart />
      <PieChartWithCustomizedLabel />
    </>
  );
}
