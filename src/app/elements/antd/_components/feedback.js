'use client';
import { Card, Typography, Row, Col } from 'antd';
import { useRouter } from 'next/navigation';

export default function FeedbackComponent() {
  const router = useRouter();

  const gotoLink = (link) => {
    router.push(link);
  };

  return (
    <>
      <Typography.Title level={4} style={{ marginTop: 16 }}>
        Feedback
      </Typography.Title>
      <Row gutter={[8, 8]}>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Alert"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/alert')}
          >
            <img src="/antd/alert.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Drawer"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/drawer')}
          >
            <img src="/antd/drawer.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Message"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/message')}
          >
            <img src="/antd/message.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Modal"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/modal')}
          >
            <img src="/antd/modal.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Notification"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() =>
              gotoLink('https://ant.design/components/notification')
            }
          >
            <img src="/antd/notification.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Popconfirm"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/popconfirm')}
          >
            <img src="/antd/popconfirm.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Progress"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/progress')}
          >
            <img src="/antd/progress.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Result"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/result')}
          >
            <img src="/antd/result.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Skeleton"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/skeleton')}
          >
            <img src="/antd/skeleton.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Spin"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/spin')}
          >
            <img src="/antd/spin.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Watermark"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/watermark')}
          >
            <img src="/antd/watermark.svg" width={'auto'} />
          </Card>
        </Col>
      </Row>
    </>
  );
}
