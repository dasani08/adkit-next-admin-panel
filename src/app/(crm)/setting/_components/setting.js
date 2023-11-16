'use client';
import { Card, Space, message } from 'antd';
import {
  UsergroupAddOutlined,
  SolutionOutlined,
  DollarOutlined,
  PayCircleOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/navigation';

const gridStyle = {
  width: '25%',
  textAlign: 'center',
  cursor: 'pointer',
};

export default function SettingPage() {
  const router = useRouter();
  const [messageApi, contextHolder] = message.useMessage();
  const showMessage = (msg) => {
    messageApi.info(msg);
  };

  return (
    <Card title="ALL SETTINGS">
      {contextHolder}
      <Card.Grid style={gridStyle} onClick={() => router.push('/setting/user')}>
        <Space direction="vertical">
          <UsergroupAddOutlined style={{ fontSize: 24 }} />
          Users
        </Space>
      </Card.Grid>
      <Card.Grid style={gridStyle} onClick={() => router.push('/setting/role')}>
        <Space direction="vertical">
          <PayCircleOutlined style={{ fontSize: 24 }} />
          Roles
        </Space>
      </Card.Grid>
      <Card.Grid style={gridStyle} onClick={() => router.push('/setting/org')}>
        <Space direction="vertical">
          <SolutionOutlined style={{ fontSize: 24 }} />
          Company Profile
        </Space>
      </Card.Grid>
      <Card.Grid
        style={gridStyle}
        onClick={() => router.push('/setting/currency')}
      >
        <Space direction="vertical">
          <DollarOutlined style={{ fontSize: 24 }} />
          Currency
        </Space>
      </Card.Grid>
      <Card.Grid style={gridStyle} onClick={() => router.push('/setting/tax')}>
        <Space direction="vertical">
          <PayCircleOutlined style={{ fontSize: 24 }} />
          VAT
        </Space>
      </Card.Grid>
      <Card.Grid
        style={gridStyle}
        onClick={() => showMessage('Email Settings')}
      >
        <Space direction="vertical">
          <PayCircleOutlined style={{ fontSize: 24 }} />
          Email
        </Space>
      </Card.Grid>
      <Card.Grid
        style={gridStyle}
        onClick={() => showMessage('Subscription Settings')}
      >
        <Space direction="vertical">
          <PayCircleOutlined style={{ fontSize: 24 }} />
          Subscription
        </Space>
      </Card.Grid>

      <Card.Grid
        style={gridStyle}
        onClick={() => showMessage('Preferences Settings')}
      >
        <Space direction="vertical">
          <PayCircleOutlined style={{ fontSize: 24 }} />
          Preferences
        </Space>
      </Card.Grid>
    </Card>
  );
}
