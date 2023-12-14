'use client';
import { Card, Typography, Row, Col } from 'antd';
import { useRouter } from 'next/navigation';

export default function DataEntryComponent() {
  const router = useRouter();

  const gotoLink = (link) => {
    router.push(link);
  };

  return (
    <>
      <Typography.Title level={4} style={{ marginTop: 16 }}>
        Data Entry
      </Typography.Title>
      <Row gutter={[8, 8]}>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="AutoComplete"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() =>
              gotoLink('https://ant.design/components/auto-complete')
            }
          >
            <img src="/antd/autocomplete.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Cascader"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/cascader')}
          >
            <img src="/antd/cascader.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Checkbox"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/checkbox')}
          >
            <img src="/antd/checkbox.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="ColorPicker"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() =>
              gotoLink('https://ant.design/components/color-picker')
            }
          >
            <img src="/antd/color-picker.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="DatePicker"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() =>
              gotoLink('https://ant.design/components/date-picker')
            }
          >
            <img src="/antd/date-picker.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Form"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/form')}
          >
            <img src="/antd/form.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Input"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/input')}
          >
            <img src="/antd/input.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="InputNumber"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() =>
              gotoLink('https://ant.design/components/input-number')
            }
          >
            <img src="/antd/input-number.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Mentions"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/mentions')}
          >
            <img src="/antd/mention.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Radio"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/radio')}
          >
            <img src="/antd/radio.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Rate"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/rate')}
          >
            <img src="/antd/rate.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Select"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/select')}
          >
            <img src="/antd/select.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Slider"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/slider')}
          >
            <img src="/antd/slider.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Switch"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/switch')}
          >
            <img src="/antd/switch.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="TimePicker"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() =>
              gotoLink('https://ant.design/components/time-picker')
            }
          >
            <img src="/antd/time-picker.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Transfer"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/transfer')}
          >
            <img src="/antd/transfer.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="TreeSelect"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() =>
              gotoLink('https://ant.design/components/tree-select')
            }
          >
            <img src="/antd/tree-select.svg" width={'auto'} />
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xs={24}>
          <Card
            size="small"
            title="Upload"
            hoverable
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
            }}
            onClick={() => gotoLink('https://ant.design/components/upload')}
          >
            <img src="/antd/upload.svg" width={'auto'} />
          </Card>
        </Col>
      </Row>
    </>
  );
}
