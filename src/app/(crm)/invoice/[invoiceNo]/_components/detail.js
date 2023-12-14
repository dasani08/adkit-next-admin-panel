'use client';
import {
  Alert,
  Card,
  Space,
  Tooltip,
  Button,
  Dropdown,
  Table,
  Typography,
  Flex,
  Divider,
  Row,
  Col,
} from 'antd';
import {
  EditOutlined,
  FilePdfOutlined,
  PrinterOutlined,
  MailOutlined,
  LinkOutlined,
  DownOutlined,
  ShareAltOutlined,
  EllipsisOutlined,
  AuditOutlined,
} from '@ant-design/icons';

import useTableScroll from '@/lib/hooks/useTblScroll';

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

export default function InvoiceDetailPage({ invoiceNo }) {
  const scrollX = useTableScroll();
  return (
    <Card title={invoiceNo} extra={<Toolbox />}>
      <Card.Grid
        style={{ width: '100%', padding: 8, backgroundColor: '#efefef' }}
        hoverable={false}
      >
        <Space size={'small'}>
          <Button icon={<EditOutlined />} type="text">
            Edit
          </Button>
          <Dropdown
            menu={{
              items: [
                {
                  key: '1',
                  label: 'Mails',
                },
                {
                  key: '2',
                  label: 'SMS',
                },
              ],
            }}
          >
            <Button icon={<MailOutlined />} type="text">
              Mails / SMS <DownOutlined />
            </Button>
          </Dropdown>
          <Button icon={<ShareAltOutlined />} type="text">
            Share
          </Button>
          <Dropdown
            menu={{
              items: [
                {
                  key: '1',
                  label: 'Print',
                },
                {
                  key: '2',
                  label: 'PDF',
                },
              ],
            }}
          >
            <Button icon={<FilePdfOutlined />} type="text">
              PDF / Print <DownOutlined />
            </Button>
          </Dropdown>
          <Button icon={<EllipsisOutlined />} type="text" />
        </Space>
      </Card.Grid>
      <Card.Grid style={{ width: '100%' }}>
        <Alert
          message="Get the invoice approved"
          showIcon
          description="Invoice has been created. You can now submit this invoice"
          type="warning"
          icon={<AuditOutlined />}
          action={
            <Button size="small" danger>
              Submit for Approval
            </Button>
          }
        />
        <Flex justify="center" style={{ marginTop: 16 }}>
          <Flex
            style={{
              minWidth: 794,
              padding: 16,
              borderRadius: 4,
              boxShadow: '0px 0px 4px 3px rgba(0,0,0,0.1)',
            }}
            vertical={true}
          >
            <Flex
              align="center"
              justify="space-between"
              style={{ width: '100%' }}
            >
              <Space direction="vertical">
                <Typography.Text strong>Business Name</Typography.Text>
                <Typography.Text type="secondary">
                  Street Address, City, Country <br />
                  Postal Code
                </Typography.Text>
              </Space>
              <Space direction="vertical">
                <Typography.Title level={3}>Invoice</Typography.Title>
                <Typography.Title level={5}>#INV-000007</Typography.Title>
              </Space>
            </Flex>
            <Divider />
            <Row gutter={16}>
              <Col span={8}>
                <Typography.Text strong style={{ marginRight: 8 }}>
                  BILL TO
                </Typography.Text>
                <Space
                  direction="vertical"
                  style={{ rowGap: 0, marginLeft: 8 }}
                >
                  <Typography.Text>Customer Name</Typography.Text>
                  <Typography.Text>Email Address</Typography.Text>
                  <Typography.Text>Phone Number</Typography.Text>
                  <Typography.Text>Street Address</Typography.Text>
                  <Typography.Text>Postal Code, City, Country</Typography.Text>
                </Space>
              </Col>
              <Col span={8}>
                <Typography.Text strong style={{ marginRight: 8 }}>
                  DETAILS
                </Typography.Text>
                <Space style={{ rowGap: 0 }}>
                  <Typography.Text>
                    Enter a brief description about your job or project
                  </Typography.Text>
                </Space>
              </Col>
              <Col span={8}>
                <Typography.Text strong style={{ marginRight: 8 }}>
                  PAYMENT
                </Typography.Text>
                <Space style={{ rowGap: 0 }}>
                  <Typography.Text>Due date mm/dd/yyyy</Typography.Text>
                  <Typography.Text>$0.00</Typography.Text>
                </Space>
              </Col>
            </Row>
            <Divider />
            <Table
              size="small"
              scroll={{ x: scrollX }}
              columns={[
                {
                  title: 'ITEM',
                  key: 'ITEM',
                },
                {
                  title: 'QTY',
                  key: 'QTY',
                },
                {
                  title: 'PRICE',
                  key: 'PRICE',
                },
                {
                  title: 'AMOUNT',
                  key: 'AMOUNT',
                  align: 'right',
                },
              ]}
              summary={() => (
                <>
                  <Table.Summary.Row>
                    <Table.Summary.Cell align="left" colSpan={3}>
                      Sub-Total
                    </Table.Summary.Cell>
                    <Table.Summary.Cell align="right">$0.00</Table.Summary.Cell>
                  </Table.Summary.Row>
                  <Table.Summary.Row>
                    <Table.Summary.Cell align="left" colSpan={3}>
                      HST
                    </Table.Summary.Cell>
                    <Table.Summary.Cell align="right">$0.00</Table.Summary.Cell>
                  </Table.Summary.Row>
                  <Table.Summary.Row>
                    <Table.Summary.Cell align="left" colSpan={3}>
                      <b>Total Due</b>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell align="right">$0.00</Table.Summary.Cell>
                  </Table.Summary.Row>
                </>
              )}
            />
          </Flex>
        </Flex>
      </Card.Grid>
    </Card>
  );
}
