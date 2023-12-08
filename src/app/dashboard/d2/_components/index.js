'use client';
import {
  Button,
  Col,
  Calendar,
  Row,
  Space,
  Dropdown,
  Table,
  theme,
  Typography,
  Divider,
  Select,
  List,
  Avatar,
  Tag,
  Card,
  Flex,
  Progress,
} from 'antd';
import { DownOutlined, CrownOutlined, RiseOutlined } from '@ant-design/icons';

import StatCard from './card';
import RevenueChart from './revenue';
import SalePipeChart from './pipeline';
import VisitStats from './visit';

export default function Dashboard() {
  const {
    token: { colorBgElevated, colorBgLayout, colorPrimary },
  } = theme.useToken();

  const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];

  const customers = [
    {
      name: 'Max Minsen',
      code: '12345',
      color: 'volcano',
      type: 'Star Member',
    },
    {
      name: 'John Black',
      code: '12345',
      color: 'gold',
      type: 'Gold Member',
    },
    {
      name: 'Lana Shelton',
      code: '12345',
      color: 'cyan',
      type: 'Silver Member',
    },
    {
      name: 'Cairo Hodge',
      code: '12345',
      color: 'cyan',
      type: 'Silver Member',
    },
    {
      name: 'Lana Shelton',
      code: '12345',
      color: 'cyan',
      type: 'Silver Member',
    },
    {
      name: 'Cairo Hodge',
      code: '12345',
      color: 'cyan',
      type: 'Silver Member',
    },
    {
      name: 'Max Minsen',
      code: '12345',
      color: 'volcano',
      type: 'Star Member',
    },
    {
      name: 'John Black',
      code: '12345',
      color: 'gold',
      type: 'Gold Member',
    },
  ];

  return (
    <>
      <Row gutter={[8, 8]}>
        <Col lg={16} md={24}>
          <Row gutter={[8, 8]}>
            <Col span={24}>
              <StatCard
                title={'Today Tasks'}
                height={400}
                extra={
                  <Dropdown
                    menu={{
                      items: [
                        {
                          label: 'Mark as completed',
                          key: '1',
                        },
                        {
                          label: 'Delete',
                          key: '2',
                          danger: true,
                        },
                      ],
                    }}
                  >
                    <Button type="text">
                      <Space>
                        Action
                        <DownOutlined />
                      </Space>
                    </Button>
                  </Dropdown>
                }
              >
                <Row gutter={16}>
                  <Col xl={16} lg={24} md={24} sm={24} xs={24}>
                    <Table
                      showHeader={false}
                      dataSource={data}
                      rowSelection={{}}
                      size="small"
                      pagination={false}
                      columns={[
                        {
                          title: 'Task',
                          key: 'Task',
                          render: (_, item) => {
                            return (
                              <Space direction="vertical">
                                <Typography.Text strong>
                                  {item.title}
                                </Typography.Text>
                                <Space split={<Divider type="vertical" />}>
                                  <Typography.Text type="secondary">
                                    Submited by Manager
                                  </Typography.Text>
                                  <Typography.Text type="secondary">
                                    12 hours ago
                                  </Typography.Text>
                                </Space>
                              </Space>
                            );
                          },
                        },
                        {
                          key: 'Actions',
                          align: 'right',
                          render: () => <a key="list-loadmore-edit">Detail</a>,
                        },
                      ]}
                    />
                  </Col>
                  <Col xl={8} lg={0} md={0} sm={0} xs={0}>
                    <Calendar
                      fullscreen={false}
                      headerRender={({
                        value,
                        type,
                        onChange,
                        onTypeChange,
                      }) => {
                        const start = 0;
                        const end = 12;
                        const monthOptions = [];
                        let current = value.clone();
                        const localeData = value.localeData();
                        const months = [];
                        for (let i = 0; i < 12; i++) {
                          current = current.month(i);
                          months.push(localeData.monthsShort(current));
                        }
                        for (let i = start; i < end; i++) {
                          monthOptions.push(
                            <Select.Option
                              key={i}
                              value={i}
                              className="month-item"
                            >
                              {months[i]}
                            </Select.Option>,
                          );
                        }
                        const year = value.year();
                        const month = value.month();
                        const options = [];
                        for (let i = year - 10; i < year + 10; i += 1) {
                          options.push(
                            <Select.Option
                              key={i}
                              value={i}
                              className="year-item"
                            >
                              {i}
                            </Select.Option>,
                          );
                        }
                        return (
                          <div
                            style={{
                              padding: 8,
                            }}
                          >
                            <Row gutter={8}>
                              <Col>
                                <Select
                                  size="small"
                                  dropdownMatchSelectWidth={false}
                                  className="my-year-select"
                                  value={year}
                                  onChange={(newYear) => {
                                    const now = value.clone().year(newYear);
                                    onChange(now);
                                  }}
                                >
                                  {options}
                                </Select>
                              </Col>
                              <Col>
                                <Select
                                  size="small"
                                  dropdownMatchSelectWidth={false}
                                  value={month}
                                  onChange={(newMonth) => {
                                    const now = value.clone().month(newMonth);
                                    onChange(now);
                                  }}
                                >
                                  {monthOptions}
                                </Select>
                              </Col>
                            </Row>
                          </div>
                        );
                      }}
                    />
                  </Col>
                </Row>
              </StatCard>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
              <StatCard
                title={'Revenue'}
                description={'Current Week'}
                height={300}
                extra={<Button shape="round">View As</Button>}
              >
                <RevenueChart />
              </StatCard>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
              <StatCard
                title={'Sales Pipeline'}
                description={'Current Week'}
                height={300}
                extra={
                  <Dropdown
                    menu={{
                      items: [
                        {
                          label: 'Weekly',
                          key: '1',
                        },
                        {
                          label: 'Monthly',
                          key: '2',
                        },
                      ],
                    }}
                  >
                    <Button type="primary">
                      <Space>
                        Weekly
                        <DownOutlined />
                      </Space>
                    </Button>
                  </Dropdown>
                }
              >
                <SalePipeChart />
              </StatCard>
            </Col>
          </Row>
        </Col>
        <Col lg={8} md={24} sm={24} xs={24}>
          <StatCard
            title={'Top Customers'}
            height={708}
            extra={
              <Dropdown
                menu={{
                  items: [
                    {
                      label: 'Weekly',
                      key: '1',
                    },
                    {
                      label: 'Monthly',
                      key: '2',
                    },
                  ],
                }}
              >
                <Button type="primary">
                  <Space>
                    Weekly
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
            }
          >
            <List
              itemLayout="horizontal"
              dataSource={customers}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                      />
                    }
                    title={<a href="https://ant.design">{item.name}</a>}
                    description={item.code}
                  />
                  <Tag color={item.color}>{item.type}</Tag>
                </List.Item>
              )}
            />
          </StatCard>
        </Col>
      </Row>
      <Row style={{ marginTop: 8 }} gutter={[8, 8]}>
        <Col lg={8} md={12} sm={24} xs={24}>
          <StatCard title={'Satisfaction Rate'} height={180}>
            <Card
              bodyStyle={{
                backgroundColor: colorBgLayout,
              }}
            >
              <Flex align="center" justify="space-between">
                <Space>
                  <CrownOutlined
                    style={{
                      fontSize: 44,
                      backgroundColor: colorPrimary,
                      padding: 4,
                      borderRadius: 9,
                      color: '#fff',
                    }}
                  />
                  <Flex vertical>
                    <Typography.Text strong>65,123 votes</Typography.Text>
                    <Typography.Text type="secondary">
                      Voted by consumer
                    </Typography.Text>
                  </Flex>
                </Space>
                <Flex vertical align="end">
                  <Typography.Text strong style={{ fontSize: 21 }}>
                    79%
                  </Typography.Text>
                  <Typography.Link strong>
                    2.9% <RiseOutlined />
                  </Typography.Link>
                </Flex>
              </Flex>
            </Card>
          </StatCard>
        </Col>
        <Col lg={8} md={12} sm={24} xs={24}>
          <StatCard title={'Revenue by Industry'} height={180}>
            <Flex vertical>
              <Typography.Text>Facebook</Typography.Text>
              <Progress percent={30} />
            </Flex>
            <Flex vertical>
              <Typography.Text>Instagram</Typography.Text>
              <Progress percent={70} strokeColor={colorPrimary} />
            </Flex>
          </StatCard>
        </Col>
        <Col lg={8} md={12} sm={24} xs={24}>
          <StatCard title={'Customer Visit Online'} height={180}>
            <Row>
              <Col flex="90px">
                <Flex vertical style={{ height: '100%' }}>
                  <Typography.Text type="secondary">
                    Total in Dec
                  </Typography.Text>
                  <Typography.Text strong>34,888</Typography.Text>
                  <Typography.Link strong>
                    2.9% <RiseOutlined />
                  </Typography.Link>
                </Flex>
              </Col>
              <Col flex="auto" style={{ height: 100 }}>
                <VisitStats />
              </Col>
            </Row>
          </StatCard>
        </Col>
      </Row>
    </>
  );
}
