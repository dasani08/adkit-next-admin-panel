'use client';
import {
  Card,
  Tooltip,
  Button,
  Form,
  Input,
  Row,
  Col,
  Select,
  Upload,
  Space,
  Typography,
} from 'antd';
import { ArrowLeftOutlined, PlusOutlined } from '@ant-design/icons';
import { timezones } from '@/lib/timezone';

export default function OrganizationProfile() {
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  return (
    <Card
      title={
        <Space>
          <Tooltip title="Back">
            <Button type="text" icon={<ArrowLeftOutlined />} />
          </Tooltip>
          <Typography.Text>ID: COSCO0001</Typography.Text>
        </Space>
      }
      extra={
        <Space>
          <Button type="primary">SAVE</Button>
          <Button>CANCEL</Button>
        </Space>
      }
    >
      <Form
        labelCol={{ md: 8, sm: 12, xs: 12 }}
        colon={false}
        labelAlign="left"
      >
        <Row gutter={16}>
          <Col md={18} xs={24} sm={24}>
            <Form.Item
              label="Organization Name"
              name="orgName"
              wrapperCol={{ md: 12, sm: 12, xs: 12 }}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item label="Industry" wrapperCol={{ span: 12 }}>
              <Select placeholder="Select an industry" />
            </Form.Item>
            <Form.Item label="Business Type" wrapperCol={{ span: 12 }}>
              <Select placeholder="Select business type" />
            </Form.Item>
          </Col>
          <Col md={6} xs={24} sm={24}>
            <Space direction="vertical" align="center">
              <Upload
                action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                listType="picture-circle"
              >
                {uploadButton}
              </Upload>
              <Typography.Text type="secondary">
                Preferred Image Size 240px x 240px
              </Typography.Text>
            </Space>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item
              labelCol={{ md: 6, sm: 12, xs: 12 }}
              label="Company Address"
              wrapperCol={{ md: 12 }}
            >
              <Input placeholder="Building number" />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                md: { offset: 6, span: 12 },
                sm: { offset: 12, span: 12 },
                xs: { offset: 12, span: 12 },
              }}
            >
              <Input placeholder="Street address" />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                md: { offset: 6, span: 12 },
                sm: { offset: 12, span: 12 },
                xs: { offset: 12, span: 12 },
              }}
              style={{
                marginBottom: 0,
              }}
            >
              <Form.Item
                style={{
                  display: 'inline-block',
                  width: 'calc(30% - 8px)',
                }}
              >
                <Input placeholder="City" />
              </Form.Item>
              <Form.Item
                style={{
                  display: 'inline-block',
                  width: 'calc(30% - 8px)',
                  margin: '0 16px',
                }}
              >
                <Select placeholder="Province" />
              </Form.Item>
              <Form.Item
                style={{
                  display: 'inline-block',
                  width: 'calc(30% - 16px)',
                }}
              >
                <Input placeholder="Postcal Code" />
              </Form.Item>
            </Form.Item>
            <Form.Item
              wrapperCol={{
                md: { offset: 6, span: 12 },
                sm: { offset: 12, span: 12 },
                xs: { offset: 12, span: 12 },
              }}
              style={{
                marginBottom: 0,
              }}
            >
              <Form.Item
                style={{
                  display: 'inline-block',
                  width: 'calc(30% - 8px)',
                }}
              >
                <Input placeholder="Phone" />
              </Form.Item>
              <Form.Item
                style={{
                  display: 'inline-block',
                  width: 'calc(30% - 8px)',
                  margin: '0 16px',
                }}
              >
                <Input placeholder="Fax" />
              </Form.Item>
              <Form.Item
                style={{
                  display: 'inline-block',
                  width: 'calc(30% - 16px)',
                }}
              >
                <Input placeholder="Website" />
              </Form.Item>
            </Form.Item>
            <Form.Item
              label="Fiscal Year"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 12 }}
              initialValue={'January - December'}
              name="fy"
            >
              <Select
                options={[
                  'January - December',
                  'May - April',
                  'July - June',
                  'September - August',
                ].map((fy) => ({
                  label: fy,
                  value: fy,
                }))}
              />
            </Form.Item>
            <Form.Item
              label="Timezone"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 12 }}
              initialValue={'UTC-11'}
              name="tz"
            >
              <Select
                showSearch
                optionFilterProp="label"
                options={timezones.map((tz) => ({
                  label: tz.text,
                  value: tz.value,
                }))}
              />
            </Form.Item>
            <Form.Item
              label="Company ID"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 6 }}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Tax ID"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 6 }}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}
