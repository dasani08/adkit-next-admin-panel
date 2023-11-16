import React from 'react';
import Link from 'next/link';
import { Row, Col, Space } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

import PageContent from '@/components/page-content';
import SaleChart from './_components/sale';
import LeadChart from './_components/lead';
import CustomPieChart from './_components/pie';
import CustomAreaChart from './_components/line';

export default function Page() {
  return (
    <PageContent
      breadcrumbs={[
        {
          title: (
            <Link href={'/'}>
              <Space>
                <HomeOutlined />
                HOME
              </Space>
            </Link>
          ),
        },
        {
          title: 'CHARTS',
        },
      ]}
    >
      <Row>
        <Col span={24}>
          <SaleChart />
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: 16 }}>
        <Col lg={18} md={12} sm={24} xs={24}>
          <LeadChart />
        </Col>
        <Col lg={6} md={12} sm={24} xs={24}>
          <CustomPieChart />
        </Col>
      </Row>
      <Row style={{ marginTop: 16 }}>
        <Col span={24}>
          <CustomAreaChart />
        </Col>
      </Row>
    </PageContent>
  );
}
