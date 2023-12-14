'use client';
import { Card, Typography, Row, Col } from 'antd';
import { useRouter } from 'next/navigation';

export default function DataDisplayComponent() {
  const router = useRouter();

  const gotoLink = (link) => {
    router.push(link);
  };

  return (
    <>
      <Typography.Title level={4} style={{ marginTop: 16 }}>
        Data Display
      </Typography.Title>
      <Row gutter={[8, 8]}>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Avatar"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/avatar')}
          >
            <img src="/antd/avatar.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Badge"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/badge')}
          >
            <img src="/antd/badge.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Calendar"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/calendar')}
          >
            <img src="/antd/calendar.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Card"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/card')}
          >
            <img src="/antd/card.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Carousel"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/carousel')}
          >
            <img src="/antd/carousel.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Collapse"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/collapse')}
          >
            <img src="/antd/collapse.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Descriptions"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() =>
              gotoLink('https://ant.design/components/descriptions')
            }
          >
            <img src="/antd/description.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Empty"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/empty')}
          >
            <img src="/antd/empty.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Image"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/image')}
          >
            <img src="/antd/image.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="List"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/list')}
          >
            <img src="/antd/list.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Popover"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/popover')}
          >
            <img src="/antd/popover.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="QRCode"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/qrcode')}
          >
            <img src="/antd/qrcode.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Segmented"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/segmented')}
          >
            <img src="/antd/segmented.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Statistic"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/statistic')}
          >
            <img src="/antd/statistic.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Table"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/table')}
          >
            <img src="/antd/table.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Tabs"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/tab')}
          >
            <img src="/antd/tab.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Tag"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/tag')}
          >
            <img src="/antd/tag.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Timeline"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/timeline')}
          >
            <img src="/antd/timeline.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Tooltip"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/tooltip')}
          >
            <img src="/antd/tooltip.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Tour"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/tour')}
          >
            <img src="/antd/tour.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Tree"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/tree')}
          >
            <img src="/antd/tree.svg" width={'auto'} />
          </Card>
        </Col>
      </Row>
    </>
  );
}
