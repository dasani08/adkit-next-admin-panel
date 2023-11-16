import React from 'react';
import { Col, Row } from 'antd';

import PageContent from '@/components/page-content';
import SaleActivity from './_components/sale-activity';
import ProductSummary from './_components/product-summary';
import TopSelling from './_components/top-selling';
import SaleReport from './_components/sale-report';
import PieChart from './_components/pie-chart';
import SaleOrders from './_components/sale-order';

export default function Page() {
  return (
    <PageContent title={'DASHBOARD'}>
      <SaleActivity />
      <Row gutter={16}>
        <Col span={12} sm={12} xs={24}>
          <ProductSummary />
        </Col>
        <Col span={12} sm={12} xs={24}>
          <TopSelling />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={18} sm={12} xs={24}>
          <SaleReport />
        </Col>
        <Col span={6} sm={12} xs={24}>
          <PieChart />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24} sm={24}>
          <SaleOrders />
        </Col>
      </Row>
    </PageContent>
  );
}
