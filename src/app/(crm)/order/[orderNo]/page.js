import React from 'react';
import Link from 'next/link';

import PageContent from '@/components/page-content';
import OrderDetailPage from './_components/detail';

export default function Page({ params }) {
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
          title: params.orderNo,
        },
      ]}
    >
      <OrderDetailPage orderNo={params.orderNo} />
    </PageContent>
  );
}
