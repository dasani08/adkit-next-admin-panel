import React from 'react';
import Link from 'next/link';

import PageContent from '@/components/page-content';
import OrganizationProfile from './_components';

export default function Page() {
  return (
    <PageContent
      breadcrumbs={[
        {
          title: <Link href={'/dashboard'}>SETTINGS</Link>,
        },
        {
          title: 'ORGANIZATION PROFILE',
        },
      ]}
    >
      <OrganizationProfile />
    </PageContent>
  );
}
