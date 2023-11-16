'use client';
import {
  Card,
  Space,
  Tooltip,
  Button,
  Dropdown,
  Tabs,
  Table,
  Tag,
  Descriptions,
  Typography,
  Flex,
  Image,
  Divider,
} from 'antd';
import {
  EditOutlined,
  FilePdfOutlined,
  PrinterOutlined,
  MailOutlined,
  LinkOutlined,
  DownOutlined,
  ArrowLeftOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import Link from 'next/link';

const Toolbox = () => (
  <Space>
    <Space.Compact block>
      <Tooltip title="Edit">
        <Button icon={<EditOutlined />} />
      </Tooltip>
      <Tooltip title="Export Pdf">
        <Button icon={<FilePdfOutlined />} />
      </Tooltip>
      <Tooltip title="Print">
        <Button icon={<PrinterOutlined />} />
      </Tooltip>
      <Tooltip title="Email">
        <Button icon={<MailOutlined />} />
      </Tooltip>
    </Space.Compact>
    <Tooltip title="Attachment">
      <Button icon={<LinkOutlined />} />
    </Tooltip>
    <Dropdown
      menu={{
        items: [
          {
            key: '1',
            label: 'Mark as Confirmed',
          },
          {
            key: '2',
            label: 'Convert to Purchase Order',
          },
          {
            type: 'divider',
          },
          {
            key: '3',
            label: 'Clone Sales Order',
          },
          {
            key: '4',
            label: 'Delete',
            danger: true,
          },
        ],
      }}
    >
      <Button>
        <Space>
          More
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  </Space>
);

export default function OrderDetailPage({ orderNo }) {
  const tabList = [
    {
      key: 'PACKAGES',
      label: 'PACKAGES',
      children: (
        <Table
          rowKey={'id'}
          pagination={false}
          columns={[
            {
              title: 'PACKAGE SUP#',
              key: 'PACKAGE SUP#',
              dataIndex: 'pkgSupNo',
              render: (pkgSupNo) => <Link href="#">{pkgSupNo}</Link>,
            },
            {
              title: 'DATE',
              key: 'DATE',
              dataIndex: 'pkgDate',
            },
            {
              title: 'STATUS',
              key: 'STATUS',
              dataIndex: 'status',
              render: (status) => <Tag color="#87d068">{status}</Tag>,
            },
            {
              title: 'CARRIER',
              key: 'CARRIER',
              dataIndex: 'carrier',
            },
            {
              title: 'TRACKING#',
              key: 'TRACKING#',
              dataIndex: 'trackingNo',
            },
            {
              title: 'DATE OF SHIPMENT',
              key: 'DATE OF SHIPMENT',
              dataIndex: 'dateOfShipment',
            },
          ]}
          dataSource={[
            {
              id: 1,
              pkgSupNo: 'PKG-0001',
              pkgDate: '06/01/2023',
              status: 'DELIVERED',
              carrier: 'COSCO',
              dateOfShipment: '01/01/2023',
            },
          ]}
        />
      ),
    },
    {
      key: 'INVOICES',
      label: 'INVOICES',
      children: (
        <Table
          showHeader={false}
          columns={[
            {
              title: 'Icon',
              key: 'Icon',
              width: 24,
              render: () => <FileTextOutlined />,
            },
            {
              title: 'Invoice No',
              key: 'Invoice No',
              render: (_, { invoiceNo, invoicedDate }) => (
                <Space
                  direction="vertical"
                  size={'small'}
                  style={{ rowGap: 0 }}
                >
                  <Link href={'#'}>{invoiceNo}</Link>
                  <Typography.Text type="secondary">
                    {invoicedDate}
                  </Typography.Text>
                </Space>
              ),
              width: 200,
            },
            {
              title: 'Status',
              key: 'Status',
              width: 200,
              render: () => 'APPROVED',
            },
            {
              title: 'Balance Due',
              key: 'Balance Due',
              width: 300,
              render: () => (
                <Space direction="vertical" style={{ rowGap: 0 }}>
                  <Typography.Text type="secondary">
                    Balance Due
                  </Typography.Text>
                  <Typography.Text type="secondary">
                    $30.00 (Due On 20 Jul 2023)
                  </Typography.Text>
                </Space>
              ),
            },
            {
              title: 'Amount',
              key: 'Amount',
              render: () => (
                <Space direction="vertical" style={{ rowGap: 0 }}>
                  <Typography.Text type="secondary">Amount</Typography.Text>
                  <Typography.Text strong>$30.00</Typography.Text>
                </Space>
              ),
              align: 'right',
            },
          ]}
          locale={{
            emptyText: (
              <Typography.Text type="secondary">
                No invoices created so far.{' '}
                <Link href="/invoice/new">New Invoice</Link>
              </Typography.Text>
            ),
          }}
          dataSource={[
            {
              invoiceNo: 'INV-0001',
              invoicedDate: '20 Jul 2023',
            },
            {
              invoiceNo: 'INV-0002',
              invoicedDate: '20 Jul 2023',
            },
          ]}
        />
      ),
    },
  ];
  return (
    <Card
      title={<Button type="text" icon={<ArrowLeftOutlined />} />}
      extra={<Toolbox />}
    >
      <Tabs items={tabList} style={{ marginBottom: 16 }} />
      <Descriptions colon={false} layout="vertical" size="small" column={2}>
        <Descriptions.Item
          style={{ paddingBottom: 0 }}
          label={
            <Typography.Title level={4} style={{ marginBottom: 0 }}>
              SALES ORDERS
            </Typography.Title>
          }
        >
          Sales Order# {orderNo}
        </Descriptions.Item>
        <Descriptions.Item style={{ paddingBottom: 0 }} label="BILLING ADDRESS">
          <Space size={'small'} direction="vertical">
            <Typography.Link>John Legg</Typography.Link>
            <Typography.Text>
              701 N Santa Anita Ave
              <br />
              Arcadia,
              <br />
              United States - 91000-2725
            </Typography.Text>
          </Space>
        </Descriptions.Item>
        <Descriptions.Item label="STATUS">
          <Space
            direction="vertical"
            style={{
              paddingLeft: 8,
              borderLeft: '3px solid #f50',
            }}
          >
            <Flex justify="space-between" style={{ width: 200 }}>
              <span>Order</span>
              <Tag color="#87d068">CLOSED</Tag>
            </Flex>
            <Flex justify="space-between" style={{ width: 200 }}>
              <span>Invoice</span>
              <Tag>Invoiced</Tag>
            </Flex>
            <Flex justify="space-between" style={{ width: 200 }}>
              <span>Shipment</span>
              <Tag>Fulfilled</Tag>
            </Flex>
          </Space>
        </Descriptions.Item>
        <Descriptions.Item label="ORDER DATE">01/01/2023</Descriptions.Item>
      </Descriptions>
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
          },
          {
            title: 'WAREHOUSE NAME',
            key: 'WAREHOUSE NAME',
            dataIndex: 'warehouseName',
          },
          {
            title: 'STATUS',
            key: 'STATUS',
          },
          {
            title: 'RATE',
            key: 'RATE',
            dataIndex: 'rate',
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
              <Table.Summary.Cell colSpan={4} align="right">
                <b>Sub-Total</b>
              </Table.Summary.Cell>
              <Table.Summary.Cell colSpan={2} align="right">
                $70.00
              </Table.Summary.Cell>
            </Table.Summary.Row>
            <Table.Summary.Row>
              <Table.Summary.Cell colSpan={4} align="right">
                <Typography.Text type="secondary">Discount</Typography.Text>
              </Table.Summary.Cell>
              <Table.Summary.Cell colSpan={2} align="right">
                $00.00
              </Table.Summary.Cell>
            </Table.Summary.Row>
            <Table.Summary.Row>
              <Table.Summary.Cell colSpan={4} align="right">
                <Typography.Text strong>Total</Typography.Text>
              </Table.Summary.Cell>
              <Table.Summary.Cell colSpan={2} align="right">
                <Typography.Text strong>$70.00</Typography.Text>
              </Table.Summary.Cell>
            </Table.Summary.Row>
          </>
        )}
      />
    </Card>
  );
}
