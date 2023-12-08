'use client';
import {
  Button,
  Col,
  Row,
  Space,
  theme,
  Typography,
  Divider,
  List,
  Card,
  Flex,
  Progress,
} from 'antd';
import {
  PlusCircleFilled,
  MinusCircleFilled,
  PlusOutlined,
} from '@ant-design/icons';

import StatCard from './card';
import ProgressBar from '@/components/progress-bar';
import Chart1 from './chart1';
import EarningReport from './earning';
import ExpenseReport from './expense';

const data = [
  {
    title: 'Payment in ZARA',
    type: 'payment',
    desc: 'Store payment in the shopping centre',
  },
  {
    title: 'Payment in Indigo',
    type: 'payment',
    desc: 'Store payment in the shopping centre',
  },
  {
    title: 'Deposit from ATM',
    type: 'deposit',
    desc: 'Direct deposit ATM on 123 Ave',
  },
  {
    title: 'Payment in LOWS',
    type: 'payment',
    desc: 'Store payment in the shopping centre',
  },
];

const getActivityIcon = (type) => {
  if (type === 'payment')
    return <MinusCircleFilled style={{ color: '#f50' }} />;
  if (type === 'deposit')
    return <PlusCircleFilled style={{ color: '#00B96B' }} />;
};

export default function Dashboard() {
  const {
    token: { colorBgElevated, colorBgLayout, colorPrimary },
  } = theme.useToken();

  return (
    <Row gutter={[8, 8]}>
      <Col lg={8} md={12} sm={24} xs={24}>
        <Row gutter={[8, 8]}>
          <Col span={24}>
            <StatCard title={'My Spending'} description={'October'}>
              <Chart1 />
            </StatCard>
          </Col>
          <Col span={24}>
            <StatCard title={'Progress of financial goals'}>
              <Row gutter={[8, 8]}>
                <Col span={12}>
                  <Card
                    bodyStyle={{
                      backgroundColor: colorBgLayout,
                      padding: 8,
                    }}
                  >
                    <Typography.Text strong>Trip to Italy</Typography.Text>
                    <Flex align="center" justify="space-between">
                      <Progress
                        type="dashboard"
                        percent={75}
                        size={35}
                        gapDegree={30}
                        strokeColor={colorPrimary}
                      />
                      <Flex vertical>
                        <Typography.Text>
                          <span style={{ color: colorPrimary }}>$2300</span> of
                          $2700
                        </Typography.Text>
                        <Typography.Text type="secondary">
                          7 days left
                        </Typography.Text>
                      </Flex>
                    </Flex>
                  </Card>
                </Col>
                <Col span={12}>
                  <Card
                    bodyStyle={{
                      backgroundColor: colorBgLayout,
                      padding: 8,
                    }}
                  >
                    <Typography.Text strong>New rent</Typography.Text>
                    <Flex align="center" justify="space-between">
                      <Progress
                        type="dashboard"
                        percent={75}
                        size={35}
                        gapDegree={30}
                        strokeColor={colorPrimary}
                      />
                      <Flex vertical>
                        <Typography.Text>
                          <span style={{ color: colorPrimary }}>$2300</span> of
                          $2700
                        </Typography.Text>
                        <Typography.Text type="secondary">
                          7 days left
                        </Typography.Text>
                      </Flex>
                    </Flex>
                  </Card>
                </Col>
                <Col span={12}>
                  <Card
                    bodyStyle={{
                      backgroundColor: colorBgLayout,
                      padding: 8,
                    }}
                  >
                    <Typography.Text strong>New computer</Typography.Text>
                    <Flex align="center" justify="space-between">
                      <Progress
                        type="dashboard"
                        percent={75}
                        size={35}
                        gapDegree={30}
                        strokeColor={colorPrimary}
                      />
                      <Flex vertical>
                        <Typography.Text>
                          <span style={{ color: colorPrimary }}>$2300</span> of
                          $2700
                        </Typography.Text>
                        <Typography.Text type="secondary">
                          7 days left
                        </Typography.Text>
                      </Flex>
                    </Flex>
                  </Card>
                </Col>
                <Col span={12}>
                  <Card
                    bodyStyle={{
                      backgroundColor: colorBgLayout,
                      padding: 8,
                    }}
                  >
                    <Typography.Text strong>Repair the car</Typography.Text>
                    <Flex align="center" justify="space-between">
                      <Progress
                        type="dashboard"
                        percent={75}
                        size={35}
                        gapDegree={30}
                        strokeColor={colorPrimary}
                      />
                      <Flex vertical>
                        <Typography.Text>
                          <span style={{ color: colorPrimary }}>$2300</span> of
                          $2700
                        </Typography.Text>
                        <Typography.Text type="secondary">
                          7 days left
                        </Typography.Text>
                      </Flex>
                    </Flex>
                  </Card>
                </Col>
                <Col span={24}>
                  <Button
                    shape="round"
                    block
                    type="primary"
                    icon={<PlusOutlined />}
                    style={{ marginTop: 8 }}
                  >
                    Set a new financial goal
                  </Button>
                </Col>
              </Row>
            </StatCard>
          </Col>
        </Row>
      </Col>
      <Col lg={8} md={12} sm={24} xs={24}>
        <Row gutter={[8, 8]}>
          <Col span={24}>
            <StatCard title={'My cashflow for October'}>
              <ProgressBar
                title={'Earned'}
                label={'$1024 of $1800'}
                percent={'45%'}
                fill={colorPrimary}
              />
              <ProgressBar title={'Spent'} label={'$1200'} percent={'75%'} />
              <Space
                style={{ width: '100%', justifyContent: 'center' }}
                align="center"
              >
                <Typography.Text>My wallet</Typography.Text>
                <Typography.Text strong style={{ fontSize: 21 }}>
                  $12,999
                </Typography.Text>
              </Space>
            </StatCard>
          </Col>
          <Col span={24}>
            <StatCard
              title={'Earnings report'}
              description={'Last 6 months'}
              height={250}
            >
              <EarningReport />
            </StatCard>
          </Col>
          <Col span={24}>
            <StatCard title={'Track expenses'} height={200}>
              <ExpenseReport />
            </StatCard>
          </Col>
        </Row>
      </Col>
      <Col lg={8} md={24} sm={24} xs={24}>
        <StatCard title={'Recent Activities'}>
          <Divider orientation="left" style={{ margin: 0 }}>
            <Typography.Text type="secondary">
              Today, October 30
            </Typography.Text>
          </Divider>
          <List
            size="small"
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  avatar={getActivityIcon(item.type)}
                  title={<a href="https://ant.design">{item.title}</a>}
                  description={item.desc}
                />
              </List.Item>
            )}
          />
          <Divider orientation="left" style={{ margin: 0 }}>
            <Typography.Text type="secondary">
              Yesterday, October 29
            </Typography.Text>
          </Divider>
          <List
            size="small"
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  avatar={getActivityIcon(item.type)}
                  title={<a href="https://ant.design">{item.title}</a>}
                  description={item.desc}
                />
              </List.Item>
            )}
          />
        </StatCard>
      </Col>
    </Row>
  );
}
