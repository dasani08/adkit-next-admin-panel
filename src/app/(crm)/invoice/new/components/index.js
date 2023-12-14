'use client';
import { Card, Flex, Space, Button } from 'antd';

import NewInvoiceForm from '@/components/shared/NewInvoiceForm';
import BackBtn from '@/components/back-button';

export default function InvoicePage() {
  return (
    <Card style={{ margin: '16px 0' }} title={<BackBtn />}>
      <NewInvoiceForm />
      <Flex align="center" justify="end">
        <Space style={{ margin: '16px 0' }}>
          <Button>CANCEL</Button>
          <Button type="primary">SAVE & CLOSE</Button>
        </Space>
      </Flex>
    </Card>
  );
}
