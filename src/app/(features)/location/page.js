import React from 'react';
import Link from 'next/link';

import PageContent from '@/components/page-content';
import LocationPage from './_components/location';

export default function Page() {
  return (
    <PageContent
      breadcrumbs={[
        {
          title: <Link href={'/dashboard'}>DASHBOARD</Link>,
        },
        {
          title: 'LOCATIONS',
        },
      ]}
    >
      <LocationPage />
    </PageContent>
  );
}
