import React from 'react';
import Link from 'next/link';

import PageContent from '@/components/page-content';
import NewSaleOrder from './_components/create';

export default function Page() {
  return (
    <PageContent
      breadcrumbs={[
        {
          title: <Link href={'/dashboard'}>DASHBOARD</Link>,
        },
        {
          title: <Link href={'/order'}>SALE ORDERS</Link>,
        },
        {
          title: 'NEW SALE ORDERS',
        },
      ]}
    >
      <NewSaleOrder />
    </PageContent>
  );
}
