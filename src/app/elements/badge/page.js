import React from 'react';
import Link from 'next/link';
import { Row, Col } from 'antd';

import PageContent from '@/components/page-content';
import BadgeBasic from './_components/basic';
import BadgeColor from './_components/color';
import BadgeRibbon from './_components/ribbon';

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
          title: 'BADGE',
        },
      ]}
    >
      <Row gutter={16}>
        <Col span={24}>
          <BadgeBasic />
          <BadgeColor />
          <BadgeRibbon />
        </Col>
      </Row>
    </PageContent>
  );
}
