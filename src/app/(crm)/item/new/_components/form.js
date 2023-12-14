'use client';
import {
  Card,
  Form,
  Input,
  Checkbox,
  Row,
  Col,
  Select,
  Upload,
  Divider,
  Space,
  Button,
} from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

export default function ItemForm() {
  return (
    <Card title="New Item">
      <Form labelAlign="left" labelCol={{ span: 6 }} colon={false}>
        <Row>
          <Col lg={12} md={24} sm={24} xs={24}>
            <Form.Item label="Type">
              <Checkbox.Group>
                <Checkbox>Goods</Checkbox>
                <Checkbox>Service</Checkbox>
              </Checkbox.Group>
            </Form.Item>
            <Form.Item
              name="name"
              label="Name"
              rules={[
                {
                  required: true,
                },
              ]}
              wrapperCol={{ span: 12 }}
            >
              <Input />
            </Form.Item>
            <Form.Item label="SKU" wrapperCol={{ span: 6 }}>
              <Input />
            </Form.Item>
            <Form.Item
              name="unit"
              label="Unit"
              rules={[
                {
                  required: true,
                },
              ]}
              wrapperCol={{ span: 6 }}
            >
              <Select
                options={[
                  {
                    label: 'set',
                    value: 'set',
                  },
                  {
                    label: 'box',
                    value: 'box',
                  },
                ]}
              />
            </Form.Item>
            <Form.Item label="Category" wrapperCol={{ span: 6 }}>
              <Select
                options={[
                  {
                    label: 'Fruites',
                    value: 'Fruites',
                  },
                  {
                    label: 'Diary',
                    value: 'Diary',
                  },
                  {
                    label: 'Fish & Seafood',
                    value: 'Fish & Seafood',
                  },
                  {
                    label: 'Snacks',
                    value: 'Snacks',
                  },
                  {
                    label: 'Deli',
                    value: 'Deli',
                  },
                  {
                    label: 'Pet Care',
                    value: 'Pet Care',
                  },
                ]}
              />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 6 }}>
              <Checkbox>Returnable Item</Checkbox>
            </Form.Item>
          </Col>
          <Col lg={12} md={24} sm={24} xs={24}>
            <Dragger
              listType="picture-card"
              fileList={[
                {
                  name: 'IMG1.PNG',
                  status: 'done',
                  thumbUrl: '/Pitaya.png',
                },
                {
                  name: 'IMG2.PNG',
                  status: 'done',
                  thumbUrl: '/Calamansi.png',
                },
              ]}
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibited from
                uploading company data or other banned files.
              </p>
            </Dragger>
          </Col>
        </Row>
        <Divider />
        <Row gutter={16}>
          <Col lg={12} md={24} sm={24} xs={24}>
            <Form.Item>
              <Checkbox>Sales Information</Checkbox>
            </Form.Item>
            <Form.Item
              label="Selling Price"
              name="sellingPrice"
              rules={[
                {
                  required: true,
                },
              ]}
              wrapperCol={{ span: 8 }}
            >
              <Input prefix={'USD'} type="number" />
            </Form.Item>
            <Form.Item
              label="Account"
              name="account"
              rules={[
                {
                  required: true,
                },
              ]}
              wrapperCol={{ span: 8 }}
              initialValue={'Sales'}
            >
              <Select
                options={[
                  {
                    label: 'Sales',
                    value: 'sales',
                  },
                ]}
              />
            </Form.Item>
            <Form.Item label="Description" wrapperCol={{ span: 18 }}>
              <Input.TextArea />
            </Form.Item>
            <Form.Item label="Tax Preference" wrapperCol={{ span: 18 }}>
              <Checkbox.Group>
                <Checkbox>Taxable</Checkbox>
                <Checkbox>Non-Taxable</Checkbox>
              </Checkbox.Group>
            </Form.Item>
          </Col>
          <Col lg={12} md={24} sm={24} xs={24}>
            <Form.Item>
              <Checkbox>Purchase Information</Checkbox>
            </Form.Item>
            <Form.Item
              label="Cost Price"
              name="costPrice"
              rules={[
                {
                  required: true,
                },
              ]}
              wrapperCol={{ span: 8 }}
            >
              <Input prefix={'USD'} type="number" />
            </Form.Item>
            <Form.Item
              label="Account"
              name="account"
              rules={[
                {
                  required: true,
                },
              ]}
              wrapperCol={{ span: 8 }}
              initialValue={'Sales'}
            >
              <Select
                options={[
                  {
                    label: 'Cost of Goods Sold',
                    value: 'Cost of Goods Sold',
                  },
                ]}
              />
            </Form.Item>
            <Form.Item label="Description" wrapperCol={{ span: 18 }}>
              <Input.TextArea />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Space>
              <Button type="primary">CREATE</Button>
              <Button>CANCEL</Button>
            </Space>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}
