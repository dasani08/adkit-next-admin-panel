import React from 'react';
import Link from 'next/link';

import PageContent from '@/components/page-content';
import ItemForm from './_components/form';

export default function Page() {
  return (
    <PageContent
      breadcrumbs={[
        {
          title: <Link href={'/dashboard'}>DASHBOARD</Link>,
        },
        {
          title: <Link href={'/item'}>ITEMS</Link>,
        },
        {
          title: 'NEW ITEMS',
        },
      ]}
    >
      <ItemForm />
    </PageContent>
  );
}
