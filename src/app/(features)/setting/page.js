import React from 'react';
import Link from 'next/link';

import PageContent from '@/components/page-content';
import SettingPage from './_components/setting';

export default function Page() {
  return (
    <PageContent
      breadcrumbs={[
        {
          title: <Link href={'/dashboard'}>DASHBOARD</Link>,
        },
        {
          title: 'SETTINGS',
        },
      ]}
    >
      <SettingPage />
    </PageContent>
  );
}
