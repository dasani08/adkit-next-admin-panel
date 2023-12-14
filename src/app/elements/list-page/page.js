import React from 'react';
import Link from 'next/link';

import PageContent from '@/components/page-content';
import SubPage from './_components';

export default function Page() {
  return (
    <PageContent
      breadcrumbs={[
        {
          title: <Link href={'/'}>HOME</Link>,
        },
        {
          title: 'LIST PAGE',
        },
      ]}
    >
      <SubPage />
    </PageContent>
  );
}
