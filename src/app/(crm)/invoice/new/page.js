import React from 'react';
import Link from 'next/link';
import { Card, Flex, Space, Button } from 'antd';

import PageContent from '@/components/page-content';
import NewInvoiceForm from '@/components/shared/NewInvoiceForm';
import BackBtn from '@/components/back-button';
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
