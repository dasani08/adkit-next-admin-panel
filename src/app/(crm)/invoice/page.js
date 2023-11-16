import React from 'react';
import Link from 'next/link';

import PageContent from '@/components/page-content';
import InvoicePage from './_components/invoice';

export default function Page() {
  return (
    <PageContent
      breadcrumbs={[
        {
          title: <Link href={'/dashboard'}>DASHBOARD</Link>,
        },
        {
          title: 'INVOICES',
        },
      ]}
    >
      <InvoicePage />
    </PageContent>
  );
}
