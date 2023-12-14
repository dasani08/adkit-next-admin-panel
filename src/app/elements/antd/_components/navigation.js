'use client';
import { Card, Typography, Row, Col } from 'antd';
import { useRouter } from 'next/navigation';

export default function NavigationComponent() {
  const router = useRouter();

  const gotoLink = (link) => {
    router.push(link);
  };

  return (
    <>
      <Typography.Title level={4} style={{ marginTop: 16 }}>
        Navigation
      </Typography.Title>
      <Row gutter={[8, 8]}>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Anchor"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/anchor')}
          >
            <img src="/antd/anchor.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Breadcrumb"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/breadcrumb')}
          >
            <img src="/antd/breadcrumb.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Dropdown"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/dropdown')}
          >
            <img src="/antd/dropdown.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Menu"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/menu')}
          >
            <img src="/antd/menu.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Pagination"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/pagination')}
          >
            <img src="/antd/pagination.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Steps"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/steps')}
          >
            <img src="/antd/step.svg" width={'auto'} />
          </Card>
        </Col>
      </Row>
    </>
  );
}
