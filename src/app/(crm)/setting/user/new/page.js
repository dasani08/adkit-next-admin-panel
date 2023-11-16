import React from 'react';
import Link from 'next/link';

import PageContent from '@/components/page-content';
import NewUser from './_components/new';

export default function Page() {
  return (
    <PageContent
      breadcrumbs={[
        {
          title: <Link href={'/dashboard'}>DASHBOARD</Link>,
        },
        {
          title: 'CREATE NEW USER',
        },
      ]}
    >
      <NewUser />
    </PageContent>
  );
}
