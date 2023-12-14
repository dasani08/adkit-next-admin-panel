'use client';
import { Card, Typography, Row, Col } from 'antd';
import { useRouter } from 'next/navigation';

export default function GeneralComponent() {
  const router = useRouter();

  const gotoLink = (link) => {
    router.push(link);
  };

  return (
    <>
      <Typography.Title level={4} style={{ marginTop: 16 }}>
        General
      </Typography.Title>
      <Row gutter={[8, 8]}>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Button"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/button')}
          >
            <img src="/antd/button.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="FloatButton"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() =>
              gotoLink('https://ant.design/components/float-button')
            }
          >
            <img src="/antd/float-button.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Icon"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/icon')}
          >
            <img src="/antd/icon.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Typography"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/typography')}
          >
            <img src="/antd/typography.svg" width={'auto'} />
          </Card>
        </Col>
      </Row>
    </>
  );
}
