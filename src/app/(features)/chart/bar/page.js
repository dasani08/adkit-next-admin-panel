import React from 'react';

import StackBarChart from './_components/StackBarChart';
import TinyBarChart from './_components/TinyBarChart';
import SimpleBarChart from './_components/SimpleBarChart';
import CustomShapeBarChart from './_components/CustomShapeBarChart';

export default function BarChart() {
  return (
    <>
      <StackBarChart />
      <TinyBarChart />
      <SimpleBarChart />
      <CustomShapeBarChart />
    </>
  );
}
