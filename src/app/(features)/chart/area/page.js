import React from 'react';

import SimpleAreaChart from './_components/SimpleAreaChart';
import StackedAreaChart from './_components/StackedAreaChart';
import LineAreaComposedChart from './_components/LineAreaComposedChart';

export default function BarChart() {
  return (
    <>
      <SimpleAreaChart />
      <StackedAreaChart />
      <LineAreaComposedChart />
    </>
  );
}
