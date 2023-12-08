import React from 'react';
import { Card, Col, Row, Carousel, Image, Button } from 'antd';

import PageContent from '@/components/page-content';

export default function Page() {
  return (
    <PageContent title={'DASHBOARD'}>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Card
            title="Dashboard 1"
            extra={
              <Button href="/dashboard/d1" type="primary">
                View
              </Button>
            }
          >
            <Carousel autoplay>
              <Image alt="d1" src="/photos/d1.png" />
              <Image alt="d1" src="/photos/d1-dark.png" />
            </Carousel>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            title="Dashboard 2"
            extra={
              <Button href="/dashboard/d2" type="primary">
                View
              </Button>
            }
          >
            <Carousel autoplay>
              <Image alt="d1" src="/photos/d2.png" />
              <Image alt="d1" src="/photos/d2-dark.png" />
            </Carousel>
          </Card>
        </Col>

        <Col span={6}>
          <Card
            title="Dashboard 3"
            extra={
              <Button href="/dashboard/d3" type="primary">
                View
              </Button>
            }
          >
            <Carousel autoplay>
              <Image alt="d1" src="/photos/d3.png" />
              <Image alt="d1" src="/photos/d3-dark.png" />
            </Carousel>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            title="Dashboard 4"
            extra={
              <Button href="/dashboard/d4" type="primary">
                View
              </Button>
            }
          >
            <Carousel autoplay>
              <Image
                preview={false}
                alt="d1"
                width={'auto'}
                src="/photos/d4.png"
              />
              <Image
                preview={false}
                alt="d1"
                width={'auto'}
                src="/photos/d4-dark.png"
              />
            </Carousel>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            title="Dashboard 5"
            extra={
              <Button href="/dashboard/d5" type="primary">
                View
              </Button>
            }
          >
            <Carousel autoplay>
              <Image alt="d1" src="/photos/d5.png" />
              <Image alt="d1" src="/photos/d5-dark.png" />
            </Carousel>
          </Card>
        </Col>
      </Row>
    </PageContent>
  );
}
