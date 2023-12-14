'use client';
import React from 'react';
import {
  Affix,
  Card,
  Button,
  Form,
  Input,
  Select,
  Divider,
  Space,
  DatePicker,
  Table,
  Row,
  Col,
  Flex,
  Typography,
  Tooltip,
  Upload,
  Grid,
  Dropdown,
  theme,
} from 'antd';
import {
  PlusOutlined,
  SettingOutlined,
  InfoCircleOutlined,
  UploadOutlined,
  EllipsisOutlined,
} from '@ant-design/icons';
import Link from 'next/link';

const { useBreakpoint } = Grid;

export default function NewSaleOrderForm() {
  const customers = ['Mr. Jerry Tan', 'Mr. John Han', 'Miss. Eve Cowan'];
  const [showSaleOrderNumberSetting, setShowSaleOrderNumberSetting] =
    React.useState(false);
  const handleOpenSaleOrderNumberSetting = () => {
    setShowSaleOrderNumberSetting(true);
  };
  const handleCloseSaleOrderNumberSetting = () => {
    setShowSaleOrderNumberSetting(false);
  };
  const [isAffixed, setIsAffixed] = React.useState(false);
  const screens = useBreakpoint();
  const { token } = theme.useToken();
  const affix = (
    <Affix offsetTop={16} key={1} onChange={(affixed) => setIsAffixed(affixed)}>
      <Space
        style={
          isAffixed
            ? {
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'saturate(180%) blur(5px)',
                padding: 16,
                position: 'fixed',
                left: 0,
                top: 0,
                width: '100%',
                display: 'flex',
                justifyContent: 'end',
                boxShadow: 'inset 0 -1px 0 0 #efefef',
              }
            : {}
        }
      >
        <Button>Save as Draft</Button>
        <Button type="primary">Save & Send</Button>
        <Button>Cancel</Button>
      </Space>
    </Affix>
  );
  const dropdownBtn = (
    <Dropdown
      key="2"
      menu={{
        items: [
          {
            key: 1,
            label: 'Save as Draft',
          },
          {
            key: 2,
            label: 'Save & Send',
          },
          {
            key: 3,
            label: 'Cancel',
          },
        ],
      }}
    >
      <Button icon={<EllipsisOutlined />} type="primary" />
    </Dropdown>
  );

  const breakpoint = React.useMemo(() => {
    const breakpoints = Object.entries(screens).filter((screen) => !!screen[1]);
    if (breakpoints.length === 0) return;
    return breakpoints[breakpoints.length - 1][0];
  }, [screens]);
  return (
    <Card
      title="A long form with floating buttons"
      style={{ margin: '16px 0' }}
      extra={[breakpoint === 'sm' || breakpoint === 'xs' ? dropdownBtn : affix]}
    >
      <Form colon={false} labelCol={{ span: 6 }} labelAlign="left">
        <Form.Item
          name="customer"
          label="Customer Name"
          wrapperCol={{ span: 8 }}
          rules={[{ required: true }]}
          initialValue={'Mr. Jerry Tan'}
        >
          <Select
            placeholder="Select Customer"
            showSearch
            dropdownRender={(menu) => (
              <>
                {menu}
                <Divider
                  style={{
                    margin: '8px 0',
                  }}
                />
                <Space
                  style={{
                    padding: '0 4px 4px',
                  }}
                >
                  <Link href="/customer/new">
                    <PlusOutlined /> New Customer
                  </Link>
                </Space>
              </>
            )}
            options={customers.map((item) => ({
              label: item,
              value: item,
            }))}
          />
        </Form.Item>
        <Form.Item
          name="saleOrderNo"
          label="Sale Order#"
          wrapperCol={{ span: 4 }}
          rules={[{ required: true }]}
        >
          <Input
            addonAfter={
              <SettingOutlined
                style={{ cursor: 'pointer' }}
                onClick={handleOpenSaleOrderNumberSetting}
              />
            }
          />
        </Form.Item>
        <Form.Item label="Reference#" wrapperCol={{ span: 4 }}>
          <Input />
        </Form.Item>
        <Form.Item
          name="orderDate"
          label="Sales Order Date"
          rules={[{ required: true }]}
        >
          <DatePicker />
        </Form.Item>
        <Divider />
        <Form.Item label="Salesperson" wrapperCol={{ span: 6 }}>
          <Select
            placeholder="Select a salesperson"
            showSearch
            dropdownRender={(menu) => (
              <>
                {menu}
                <Divider
                  style={{
                    margin: '8px 0',
                  }}
                />
                <Space
                  style={{
                    padding: '0 4px 4px',
                  }}
                >
                  <Link href="#">
                    <PlusOutlined /> New Salesperson
                  </Link>
                </Space>
              </>
            )}
          />
        </Form.Item>
        <Form.Item
          label="Delivery Method"
          wrapperCol={{ span: 6 }}
          name="deliveryMethod"
          initialValue={'Road'}
        >
          <Select
            placeholder="Select or Type to add"
            options={['Road', 'Rail', 'Ocean', 'Air'].map((item) => ({
              label: item,
              value: item,
            }))}
          />
        </Form.Item>
      </Form>
      <Divider />
      <Table
        rowKey="id"
        title={() => <b>Price List</b>}
        size="small"
        pagination={false}
        bordered
        columns={[
          {
            title: 'Item Details',
            key: 'Item Details',
            render: () => 'Click to select an item',
          },
          {
            title: 'Quantity',
            key: 'Quantity',
            dataIndex: 'qty',
          },
          {
            title: 'Rate',
            key: 'Rate',
            dataIndex: 'rate',
          },
          {
            title: 'Tax',
            key: 'Tax',
            dataIndex: 'tax',
          },
          {
            title: 'Amount',
            key: 'Amount',
            dataIndex: 'amount',
          },
        ]}
        dataSource={[
          {
            id: '1',
            qty: 1,
            rate: 0,
            amount: 0,
          },
        ]}
        footer={() => (
          <Row>
            <Col span={10} xs={24} sm={24}>
              <Space wrap={true}>
                <Button type="link" icon={<PlusOutlined />}>
                  Add another line
                </Button>
                <Button type="link" icon={<PlusOutlined />}>
                  Add items in bulk
                </Button>
              </Space>
            </Col>
            <Col span={14} xs={24} sm={24}>
              <Flex vertical>
                <Flex justify="space-between" style={{ padding: 8 }}>
                  <Typography.Text type="secondary">Sub Total</Typography.Text>
                  <Typography.Text type="secondary">0.00</Typography.Text>
                </Flex>
                <Divider />
                <Flex
                  justify="space-between"
                  align="center"
                  style={{ padding: 8 }}
                >
                  <Flex justify="space-between" style={{ width: '70%' }}>
                    <Typography.Text type="secondary">Discount</Typography.Text>
                    <Input
                      style={{ width: 150 }}
                      addonAfter={
                        <Select defaultValue="$">
                          <Select.Option value="$">$</Select.Option>
                          <Select.Option value="%">%</Select.Option>
                        </Select>
                      }
                    />
                  </Flex>
                  <Typography.Text type="secondary">0.00</Typography.Text>
                </Flex>
                <Divider />
                <Flex
                  justify="space-between"
                  align="center"
                  style={{ padding: 8 }}
                >
                  <Flex justify="space-between" style={{ width: '70%' }}>
                    <Typography.Text type="secondary">
                      Shipping Charges
                    </Typography.Text>
                    <Input
                      style={{ width: 150 }}
                      suffix={
                        <Tooltip title="Extra information">
                          <InfoCircleOutlined
                            style={{
                              color: 'rgba(0,0,0,.45)',
                            }}
                          />
                        </Tooltip>
                      }
                    />
                  </Flex>
                  <Typography.Text type="secondary">0.00</Typography.Text>
                </Flex>
                <Divider />
                <Flex
                  justify="space-between"
                  align="center"
                  style={{ padding: 8 }}
                >
                  <Flex justify="space-between" style={{ width: '70%' }}>
                    <Typography.Text type="secondary">
                      Adjustment
                    </Typography.Text>
                    <Input
                      style={{ width: 150 }}
                      suffix={
                        <Tooltip title="Extra information">
                          <InfoCircleOutlined
                            style={{
                              color: 'rgba(0,0,0,.45)',
                            }}
                          />
                        </Tooltip>
                      }
                    />
                  </Flex>
                  <Typography.Text type="secondary">0.00</Typography.Text>
                </Flex>
                <Divider />
                <Flex
                  justify="space-between"
                  style={{ padding: 8, backgroundColor: token.footerBg }}
                >
                  <Typography.Text type="secondary">Total ($)</Typography.Text>
                  <Typography.Text type="secondary">0.00</Typography.Text>
                </Flex>
              </Flex>
            </Col>
          </Row>
        )}
      />
      <Divider />
      <Row gutter={16}>
        <Col md={8} xs={24} sm={24}>
          <Space direction="vertical">
            <Typography.Text>Attach File(s)</Typography.Text>
            <Upload>
              <Button icon={<UploadOutlined />}>Upload File</Button>
            </Upload>
            <Typography.Text type="secondary">
              You can upload a maximum of 5 files, 5MB each
            </Typography.Text>
          </Space>
        </Col>
        <Col md={16} xs={24} sm={24}>
          <Form layout="vertical" style={{ width: '100%' }}>
            <Form.Item label="Customer Notes">
              <Input.TextArea placeholder="Enter any notes to be displayed in your transaction" />
            </Form.Item>
            <Form.Item label="Terms & Conditions">
              <Input.TextArea placeholder="Enter the terms and conditions of your business to be displayed in your transaction" />
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Card>
  );
}
