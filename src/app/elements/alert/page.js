import React from 'react';
import Link from 'next/link';
import { Row, Col } from 'antd';

import PageContent from '@/components/page-content';
import Basic from './_components/basic';
import AlertWithIcon from './_components/alert-icon';
import CustomAlertAction from './_components/custom';

export default function Page() {
  return (
    <PageContent
      breadcrumbs={[
        {
          title: <Link href={'/'}>HOME</Link>,
        },
        {
          title: 'ELEMENTS',
        },
        {
          title: 'ALERT',
        },
      ]}
    >
      <Row gutter={16}>
        <Col span={12}>
          <Basic />
          <CustomAlertAction />
        </Col>
        <Col span={12}>
          <AlertWithIcon />
        </Col>
      </Row>
    </PageContent>
  );
}
