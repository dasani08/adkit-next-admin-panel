import React from 'react';
import Link from 'next/link';

import PageContent from '@/components/page-content';
import NewRole from './_components/new';

export default function Page() {
  return (
    <PageContent
      breadcrumbs={[
        {
          title: <Link href={'/dashboard'}>DASHBOARD</Link>,
        },
        {
          title: 'CREATE NEW ROLE',
        },
      ]}
    >
      <NewRole />
    </PageContent>
  );
}
