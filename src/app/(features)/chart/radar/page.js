import React from 'react';

import SimpleRadarChart from './_components/SimpleRadarChart';
import SpecifiedDomainRadarChart from './_components/SpecifiedDomainRadarChart';

export default function BarChart() {
  return (
    <>
      <SimpleRadarChart />
      <SpecifiedDomainRadarChart />
    </>
  );
}
