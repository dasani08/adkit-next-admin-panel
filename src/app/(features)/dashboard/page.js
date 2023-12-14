import React from 'react';
import { Card, Col, Row, Carousel, Button } from 'antd';
import Image from 'next/image';

import PageContent from '@/components/page-content';

export default function Page() {
  return (
    <PageContent title={'DASHBOARD'}>
      <Row gutter={[16, 16]}>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            title="CRM 1"
            bodyStyle={{
              height: 200,
            }}
            extra={
              <Button href="/dashboard/d1" type="primary">
                View
              </Button>
            }
          >
            <Carousel autoplay>
              <div>
                <p
                  style={{
                    backgroundImage: 'url(/photos/d1.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    minWidth: '100%',
                    minHeight: '100%',
                    margin: 0,
                    height: '160px',
                  }}
                />
              </div>
              <div>
                <p
                  style={{
                    backgroundImage: 'url(/photos/d1-dark.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    minWidth: '100%',
                    minHeight: '100%',
                    margin: 0,
                    height: '160px',
                  }}
                />
              </div>
            </Carousel>
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            title="Sale 1"
            bodyStyle={{
              height: 200,
            }}
            extra={
              <Button href="/dashboard/d2" type="primary">
                View
              </Button>
            }
          >
            <Carousel autoplay>
              <div>
                <p
                  style={{
                    backgroundImage: 'url(/photos/d2.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    minWidth: '100%',
                    minHeight: '100%',
                    margin: 0,
                    height: '160px',
                  }}
                />
              </div>
              <div>
                <p
                  style={{
                    backgroundImage: 'url(/photos/d2-dark.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    minWidth: '100%',
                    minHeight: '100%',
                    margin: 0,
                    height: '160px',
                  }}
                />
              </div>
            </Carousel>
          </Card>
        </Col>

        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            title="Financial"
            bodyStyle={{
              height: 200,
            }}
            extra={
              <Button href="/dashboard/d3" type="primary">
                View
              </Button>
            }
          >
            <Carousel autoplay>
              <div>
                <p
                  style={{
                    backgroundImage: 'url(/photos/d3.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    minWidth: '100%',
                    minHeight: '100%',
                    margin: 0,
                    height: '160px',
                  }}
                />
              </div>
              <div>
                <p
                  style={{
                    backgroundImage: 'url(/photos/d3-dark.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    minWidth: '100%',
                    minHeight: '100%',
                    margin: 0,
                    height: '160px',
                  }}
                />
              </div>
            </Carousel>
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            title="Sale 2"
            bodyStyle={{
              height: 200,
            }}
            extra={
              <Button href="/dashboard/d4" type="primary">
                View
              </Button>
            }
          >
            <Carousel autoplay>
              <div>
                <p
                  style={{
                    backgroundImage: 'url(/photos/d4.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    minWidth: '100%',
                    minHeight: '100%',
                    margin: 0,
                    height: '160px',
                  }}
                />
              </div>
              <div>
                <p
                  style={{
                    backgroundImage: 'url(/photos/d4-dark.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    minWidth: '100%',
                    minHeight: '100%',
                    margin: 0,
                    height: '160px',
                  }}
                />
              </div>
            </Carousel>
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            title="CRM 2"
            bodyStyle={{
              height: 200,
            }}
            extra={
              <Button href="/dashboard/d5" type="primary">
                View
              </Button>
            }
          >
            <Carousel autoplay>
              <div>
                <p
                  style={{
                    backgroundImage: 'url(/photos/d5.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    minWidth: '100%',
                    minHeight: '100%',
                    margin: 0,
                    height: '160px',
                  }}
                />
              </div>
              <div>
                <p
                  style={{
                    backgroundImage: 'url(/photos/d5-dark.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    minWidth: '100%',
                    minHeight: '100%',
                    margin: 0,
                    height: '160px',
                  }}
                />
              </div>
            </Carousel>
          </Card>
        </Col>
      </Row>
    </PageContent>
  );
}
