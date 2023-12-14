import React from 'react';
import TinyLineChart from './_components/TinyLineChart';
import SimpleLineChart from './_components/SimpleLineChart';
import CustomizedLabelLineChart from './_components/CustomizedLabelLineChart';

export default function BarChart() {
  return (
    <>
      <TinyLineChart />
      <SimpleLineChart />
      <CustomizedLabelLineChart />
    </>
  );
}
