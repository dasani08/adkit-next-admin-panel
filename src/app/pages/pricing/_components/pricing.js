'use client';
import {
  Switch,
  Flex,
  Typography,
  Row,
  Col,
  Card,
  Button,
  Badge,
  Table,
  Space,
  theme,
} from 'antd';
import { CheckOutlined, InfoCircleOutlined } from '@ant-design/icons';
import useTableScroll from '@/lib/hooks/useTblScroll';

function TabBarItem({ label, active = false }) {
  const activeStyle = active
    ? {
        backgroundColor: '#fff',
        color: '#00804a',
      }
    : {};

  return (
    <div
      style={{
        padding: '16px 32px',
        backgroundColor: '#00804a',
        border: '1px solid #fff',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        margin: '0 4px',
        color: '#fff',
        fontWeight: 'bold',
        cursor: 'pointer',
        ...activeStyle,
      }}
    >
      {label}
    </div>
  );
}

function TabBar() {
  return (
    <Flex justify="center" style={{ marginTop: -79 }}>
      <TabBarItem active={true} label={'PRODUCTS AND PLANS'} />
      <TabBarItem label={'BUNDLES'} />
    </Flex>
  );
}

export default function Pricing() {
  const scrollX = useTableScroll();
  const {
    token: { bgPricingColor, colorBgElevated },
  } = theme.useToken();

  return (
    <div>
      <TabBar />
      <Flex justify="center" style={{ marginTop: 32, marginBottom: 32 }}>
        <Typography.Text style={{ margin: '0 4px' }}>Monthly</Typography.Text>
        <Switch style={{ margin: '0 4px' }} />
        <Typography.Text style={{ margin: '0 4px' }}>Yearly</Typography.Text>
      </Flex>
      <Row gutter={[16, 16]} align={'middle'}>
        <Col lg={6} md={12} sm={24} xs={24}>
          <Card
            bodyStyle={{
              padding: '42px 32px',
              backgroundColor: colorBgElevated,
            }}
            hoverable={true}
          >
            <Flex vertical align="center">
              <Typography.Text style={{ fontSize: 24 }}>
                Standard
              </Typography.Text>
              <Typography.Text strong style={{ fontSize: 56 }}>
                <Typography.Text type="secondary">C$</Typography.Text>
                25
              </Typography.Text>
              <Typography.Text type="secondary">
                user/month billed monthly
              </Typography.Text>
              <Button type="primary" style={{ marginTop: 18 }}>
                START FREE TRIAL
              </Button>
              <Typography.Text
                style={{ fontSize: 18, textAlign: 'center', marginTop: 16 }}
              >
                Automate and optimize your sales cycle
              </Typography.Text>
            </Flex>
          </Card>
        </Col>
        <Col lg={6} md={12} sm={24} xs={24}>
          <Card
            bodyStyle={{
              padding: '42px 32px',
              backgroundColor: colorBgElevated,
            }}
            hoverable={true}
          >
            <Flex vertical align="center">
              <Typography.Text style={{ fontSize: 24 }}>
                Professional
              </Typography.Text>
              <Typography.Text strong style={{ fontSize: 56 }}>
                <Typography.Text type="secondary">C$</Typography.Text>
                44
              </Typography.Text>
              <Typography.Text type="secondary">
                user/month billed monthly
              </Typography.Text>
              <Button type="primary" style={{ marginTop: 16 }}>
                START FREE TRIAL
              </Button>
              <Typography.Text
                style={{ fontSize: 18, textAlign: 'center', marginTop: 16 }}
              >
                Improve customer acquisition and accelerate growth
              </Typography.Text>
            </Flex>
          </Card>
        </Col>
        <Col lg={6} md={12} sm={24} xs={24}>
          <Badge.Ribbon text="MOST POPULAR" color="#00B96B">
            <Card
              bodyStyle={{
                padding: '102px 32px',
                backgroundColor: bgPricingColor,
              }}
              hoverable={true}
              bordered={false}
            >
              <Flex vertical align="center">
                <Typography.Text style={{ fontSize: 24 }}>
                  Enterprise
                </Typography.Text>
                <Typography.Text strong style={{ fontSize: 56 }}>
                  <Typography.Text type="secondary">C$</Typography.Text>
                  63
                </Typography.Text>
                <Typography.Text type="secondary">
                  user/month billed monthly
                </Typography.Text>
                <Button type="primary" danger style={{ marginTop: 16 }}>
                  START FREE TRIAL
                </Button>
                <Typography.Text
                  style={{ fontSize: 18, textAlign: 'center', marginTop: 16 }}
                >
                  Manage global CX operations with the complete CRM
                </Typography.Text>
              </Flex>
            </Card>
          </Badge.Ribbon>
        </Col>
        <Col lg={6} md={12} sm={24} xs={24}>
          <Card
            bodyStyle={{
              padding: '42px 32px',
              backgroundColor: colorBgElevated,
            }}
            hoverable={true}
          >
            <Flex vertical align="center">
              <Typography.Text style={{ fontSize: 24 }}>
                Ultimate
              </Typography.Text>
              <Typography.Text strong style={{ fontSize: 56 }}>
                <Typography.Text type="secondary">C$</Typography.Text>
                81
              </Typography.Text>
              <Typography.Text type="secondary">
                user/month billed monthly
              </Typography.Text>
              <Button type="primary" style={{ marginTop: 16 }}>
                START FREE TRIAL
              </Button>
              <Typography.Text
                style={{ fontSize: 18, textAlign: 'center', marginTop: 16 }}
              >
                Scale exponentially with dedicated BI capabilities
              </Typography.Text>
            </Flex>
          </Card>
        </Col>
      </Row>
      <Row justify={'center'}>
        <Col lg={18}>
          <Typography.Title
            style={{ marginTop: 36, textAlign: 'center' }}
            level={1}
          >
            Explore the top features
          </Typography.Title>
          <Table
            bordered
            pagination={false}
            scroll={{ x: scrollX }}
            columns={[
              {
                title: '',
                dataIndex: 'feature',
                width: 400,
              },
              {
                title: (
                  <Space direction="vertical" size={'small'}>
                    <Typography.Text style={{ fontSize: 18 }}>
                      Standard
                    </Typography.Text>
                    <Typography.Text strong style={{ fontSize: 32 }}>
                      <Typography.Text type="secondary">C$</Typography.Text>
                      25
                    </Typography.Text>
                    <Typography.Text type="secondary">
                      user/month billed monthly
                    </Typography.Text>
                    <Button type="primary">TRY FOR FREE</Button>
                  </Space>
                ),
                dataIndex: 'standard',
                align: 'center',
                render: (t) =>
                  t && <CheckOutlined style={{ color: '#00B96B' }} />,
              },
              {
                title: (
                  <Space direction="vertical" size={'small'}>
                    <Typography.Text style={{ fontSize: 18 }}>
                      Professional
                    </Typography.Text>
                    <Typography.Text strong style={{ fontSize: 32 }}>
                      <Typography.Text type="secondary">C$</Typography.Text>
                      44
                    </Typography.Text>
                    <Typography.Text type="secondary">
                      user/month billed monthly
                    </Typography.Text>
                    <Button type="primary">TRY FOR FREE</Button>
                  </Space>
                ),
                dataIndex: 'professional',
                align: 'center',
                render: (t) =>
                  t && <CheckOutlined style={{ color: '#00B96B' }} />,
              },
              {
                title: (
                  <Space direction="vertical" size={'small'}>
                    <Typography.Text style={{ fontSize: 18 }}>
                      Enterprise
                    </Typography.Text>
                    <Typography.Text strong style={{ fontSize: 32 }}>
                      <Typography.Text type="secondary">C$</Typography.Text>
                      63
                    </Typography.Text>
                    <Typography.Text type="secondary">
                      user/month billed monthly
                    </Typography.Text>
                    <Button type="primary">TRY FOR FREE</Button>
                  </Space>
                ),
                dataIndex: 'enterprise',
                align: 'center',
                render: (t) =>
                  t && <CheckOutlined style={{ color: '#00B96B' }} />,
              },
              {
                title: (
                  <Space direction="vertical" size={'small'}>
                    <Typography.Text style={{ fontSize: 18 }}>
                      Utilmate
                    </Typography.Text>
                    <Typography.Text strong style={{ fontSize: 32 }}>
                      <Typography.Text type="secondary">C$</Typography.Text>
                      81
                    </Typography.Text>
                    <Typography.Text type="secondary">
                      user/month billed monthly
                    </Typography.Text>
                    <Button type="primary">TRY FOR FREE</Button>
                  </Space>
                ),
                dataIndex: 'utilmate',
                align: 'center',
                render: (t) =>
                  t && <CheckOutlined style={{ color: '#00B96B' }} />,
              },
            ]}
            dataSource={[
              {
                feature: 'Sales force automation',
                children: [
                  {
                    feature: (
                      <Space
                        style={{
                          width: '85%',
                          justifyContent: 'space-between',
                        }}
                      >
                        Basic modules <InfoCircleOutlined />
                      </Space>
                    ),
                    standard: true,
                    professional: true,
                    enterprise: true,
                    utilmate: true,
                  },
                  {
                    feature: (
                      <Space
                        style={{
                          width: '85%',
                          justifyContent: 'space-between',
                        }}
                      >
                        Tasks, calls, events <InfoCircleOutlined />
                      </Space>
                    ),
                    standard: true,
                    professional: true,
                    enterprise: true,
                    utilmate: true,
                  },
                  {
                    feature: (
                      <Space
                        style={{
                          width: '85%',
                          justifyContent: 'space-between',
                        }}
                      >
                        Advanced filters <InfoCircleOutlined />
                      </Space>
                    ),
                    standard: true,
                    professional: true,
                    enterprise: true,
                    utilmate: true,
                  },
                ],
              },
              {
                feature: 'Automation and process management',
                children: [
                  {
                    feature: (
                      <Space
                        style={{
                          width: '85%',
                          justifyContent: 'space-between',
                        }}
                      >
                        Workflow rules <InfoCircleOutlined />
                      </Space>
                    ),
                    standard: true,
                    professional: true,
                    enterprise: true,
                    utilmate: true,
                  },
                  {
                    feature: (
                      <Space
                        style={{
                          width: '85%',
                          justifyContent: 'space-between',
                        }}
                      >
                        Email notification <InfoCircleOutlined />
                      </Space>
                    ),
                    standard: false,
                    professional: false,
                    enterprise: true,
                    utilmate: true,
                  },
                  {
                    feature: (
                      <Space
                        style={{
                          width: '85%',
                          justifyContent: 'space-between',
                        }}
                      >
                        Blueprint <InfoCircleOutlined />
                      </Space>
                    ),
                    standard: false,
                    professional: false,
                    enterprise: true,
                    utilmate: true,
                  },
                ],
              },
              {
                feature: 'Product customization',
                children: [
                  {
                    feature: (
                      <Space
                        style={{
                          width: '85%',
                          justifyContent: 'space-between',
                        }}
                      >
                        Homepage customization <InfoCircleOutlined />
                      </Space>
                    ),
                    standard: false,
                    professional: false,
                    enterprise: false,
                    utilmate: true,
                  },
                ],
              },
            ]}
          />
        </Col>
      </Row>
    </div>
  );
}
