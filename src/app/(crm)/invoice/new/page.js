import React from 'react';
import Link from 'next/link';

import PageContent from '@/components/page-content';
import InvoicePage from './components';

export default function Page() {
  return (
    <PageContent
      breadcrumbs={[
        {
          title: <Link href={'/dashboard'}>DASHBOARD</Link>,
        },
        {
          title: <Link href={'/order'}>INVOICES</Link>,
        },
        {
          title: 'NEW INVOICE',
        },
      ]}
    >
      <InvoicePage />
    </PageContent>
  );
}
