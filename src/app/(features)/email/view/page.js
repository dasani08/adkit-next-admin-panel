import React from 'react';
import Link from 'next/link';

import PageContent from '@/components/page-content';
import EmailDetail from './_components';

export default function Page() {
  return (
    <PageContent
      breadcrumbs={[
        {
          title: <Link href={'/dashboard'}>DASHBOARD</Link>,
        },
        {
          title: 'EMAIL',
        },
      ]}
    >
      <EmailDetail />
    </PageContent>
  );
}
