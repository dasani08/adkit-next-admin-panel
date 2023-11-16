import React from 'react';
import Link from 'next/link';

import PageContent from '@/components/page-content';
import ItemPage from './_components/item';

export default function Page() {
  return (
    <PageContent
      breadcrumbs={[
        {
          title: <Link href={'/dashboard'}>DASHBOARD</Link>,
        },
        {
          title: 'ITEMS',
        },
      ]}
    >
      <ItemPage />
    </PageContent>
  );
}
