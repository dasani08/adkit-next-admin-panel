'use client';
import {
  Space,
  Form,
  Select,
  Input,
  DatePicker,
  Typography,
  Divider,
  Table,
  Image,
  InputNumber,
  theme,
} from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

export default function NewInvoiceForm() {
  const { token } = theme.useToken();
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Form labelCol={{ span: 6 }} colon={false} labelAlign="left">
        <Form.Item
          label="Customer Name"
          rules={[{ required: true }]}
          name={'customerName'}
          wrapperCol={{ span: 9 }}
        >
          <Select placeholder="Select Customer Name" />
        </Form.Item>
        <Form.Item
          label="Invoice Number"
          rules={[{ required: true }]}
          name="invoiceNo"
          wrapperCol={{ span: 6 }}
        >
          <Input placeholder="Enter Invoice Number" />
        </Form.Item>
        <Form.Item label="Order Number" wrapperCol={{ span: 6 }}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Invoice Date"
          rules={[{ required: true }]}
          name={'invoiceDate'}
        >
          <Form.Item
            style={{ display: 'inline-block', width: 'calc(35% - 8px)' }}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            label="Term"
            rules={[{ required: true }]}
            name={'term'}
            style={{
              display: 'inline-block',
              width: 'calc(30% - 8px)',
              margin: '0 8px',
            }}
            initialValue={'Weekly'}
          >
            <Select
              options={[
                {
                  label: 'Weekly',
                  value: 'Weekly',
                },
                {
                  label: 'Monthly',
                  value: 'Monthly',
                },
              ]}
            />
          </Form.Item>
          <Typography.Text type="danger" style={{ marginLeft: 8 }}>
            Due Date: 01 June 2023
          </Typography.Text>
        </Form.Item>
        <Divider />
        <Form.Item label="Sales Person" wrapperCol={{ span: 6 }}>
          <Select />
        </Form.Item>
      </Form>
      <Table
        columns={[
          {
            title: 'ITEMS & DESCRIPTION',
            key: 'ITEMS & DESCRIPTION',
            render: () => (
              <Space align="start">
                <Image width={36} alt="" src="https://picsum.photos/36" />
                <Space
                  direction="vertical"
                  size={'small'}
                  style={{ rowGap: 0 }}
                >
                  <Typography.Text>The Rebels Light Saber</Typography.Text>
                  <Typography.Text type="secondary">
                    SKU: SKU1234
                  </Typography.Text>
                </Space>
              </Space>
            ),
          },
          {
            title: 'ORDERED',
            key: 'ORDERED',
            dataIndex: 'ordered',
            align: 'center',
          },
          {
            title: 'INVOICED',
            key: 'INVOICED',
            dataIndex: 'invoiced',
            align: 'center',
          },
          {
            title: 'QUANTITY',
            key: 'QUANTITY',
            align: 'center',
          },
          {
            title: 'RATE',
            key: 'RATE',
            dataIndex: 'rate',
          },
          {
            title: 'DISCOUNT',
            key: 'DISCOUNT',
            dataIndex: 'discount',
          },
          {
            title: 'TAX',
            key: 'TAX',
            dataIndex: 'discount',
          },
          {
            title: 'AMOUNT',
            key: 'AMOUNT',
            dataIndex: 'amount',
            align: 'right',
          },
        ]}
        dataSource={[
          {
            ordered: 7,
            warehouseName: 'X Corporation',
            rate: '10',
            amount: '70.00',
          },
        ]}
        pagination={false}
        summary={() => (
          <>
            <Table.Summary.Row>
              <Table.Summary.Cell colSpan={2} />
              <Table.Summary.Cell align="left" colSpan={4}>
                <b>Sub-Total</b>
              </Table.Summary.Cell>
              <Table.Summary.Cell align="right" colSpan={2}>
                $70.00
              </Table.Summary.Cell>
            </Table.Summary.Row>
            <Table.Summary.Row>
              <Table.Summary.Cell colSpan={2} />
              <Table.Summary.Cell align="left" colSpan={4}>
                <Typography.Text type="secondary">Discount</Typography.Text>
              </Table.Summary.Cell>
              <Table.Summary.Cell align="right" colSpan={2}>
                $00.00
              </Table.Summary.Cell>
            </Table.Summary.Row>
            <Table.Summary.Row>
              <Table.Summary.Cell colSpan={2} />
              <Table.Summary.Cell colSpan={4} align="left">
                <Space>
                  <Typography.Text type="secondary">
                    Shipping Charges
                  </Typography.Text>
                  <InputNumber defaultValue={0} />
                  <InfoCircleOutlined />
                </Space>
              </Table.Summary.Cell>
              <Table.Summary.Cell colSpan={2} align="right">
                $00.00
              </Table.Summary.Cell>
            </Table.Summary.Row>
            <Table.Summary.Row
              style={{ padding: 8, backgroundColor: token.footerBg }}
            >
              <Table.Summary.Cell colSpan={2} />
              <Table.Summary.Cell colSpan={4} align="left">
                <Typography.Text strong>Total</Typography.Text>
              </Table.Summary.Cell>
              <Table.Summary.Cell colSpan={2} align="right">
                <Typography.Text strong>$70.00</Typography.Text>
              </Table.Summary.Cell>
            </Table.Summary.Row>
          </>
        )}
      />
    </Space>
  );
}
