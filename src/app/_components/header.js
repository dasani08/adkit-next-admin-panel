import React from 'react';
import {
  Avatar,
  Badge,
  Button,
  Layout,
  Flex,
  Space,
  theme,
  Input,
  Dropdown,
  Popover,
  Table,
  notification,
  Typography,
  Menu,
} from 'antd';
import {
  PlusCircleFilled,
  BellOutlined,
  MailOutlined,
  SendOutlined,
  SearchOutlined,
  CheckCircleFilled,
  ExclamationCircleFilled,
  ContainerOutlined,
  ContactsOutlined,
} from '@ant-design/icons';

import { useAuth } from '@/state/auth/auth-context';

const { Header } = Layout;

const Context = React.createContext({
  name: 'Default',
});

export default function _Header() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { logOut } = useAuth();

  const handleLogout = () => {
    logOut();
  };
  const [api, contextHolder] = notification.useNotification();
  const showAllNotication = () => {
    api.info({
      message: `Notification`,
      description: (
        <Context.Consumer>
          {() => `This will close automatically after 30s.`}
        </Context.Consumer>
      ),
      duration: 30,
      placement: 'topRight',
    });
    api.warning({
      message: `Notification`,
      description: (
        <Context.Consumer>
          {() => `This will close automatically after 30s.`}
        </Context.Consumer>
      ),
      duration: 30,
      placement: 'topRight',
    });
    api.success({
      message: `Notification`,
      description: (
        <Context.Consumer>
          {() => `This will close automatically after 30s.`}
        </Context.Consumer>
      ),
      duration: 30,
      placement: 'topRight',
    });
    api.error({
      message: `Notification`,
      description: (
        <Context.Consumer>
          {() => `This will close automatically after 30s.`}
        </Context.Consumer>
      ),
      duration: 30,
      placement: 'topRight',
    });
  };

  const notificationContent = (
    <Flex vertical>
      <Flex justify="space-between" style={{ marginBottom: 8 }}>
        <span style={{ fontSize: '14px' }}>
          You have <b>2</b> new notification
        </span>
        <span style={{ fontSize: '14px' }}>Mark all as Read</span>
      </Flex>
      <Table
        size="small"
        pagination={false}
        dataSource={[
          {
            key: '1',
            icon: (
              <CheckCircleFilled
                style={{ fontSize: '24px', color: 'var(--color-primary)' }}
              />
            ),
            msg: 'John has created new purchase order',
            time: '15 mins ago',
          },
          {
            key: '2',
            icon: (
              <ExclamationCircleFilled
                style={{ fontSize: '24px', color: '#1677ff' }}
              />
            ),
            msg: 'You have received an email from Bob',
            time: '45 mins ago',
          },
        ]}
        showHeader={false}
        columns={[
          {
            key: 'Icon',
            dataIndex: 'icon',
            width: 30,
          },
          {
            key: 'Msg',
            dataIndex: 'msg',
            render: (msg, { time }) => (
              <Space direction="vertical">
                <Typography.Text strong>{msg}</Typography.Text>
                <Typography.Text type="secondary">{time}</Typography.Text>
              </Space>
            ),
          },
        ]}
        footer={() => <Typography.Link>View all notifications</Typography.Link>}
      />
    </Flex>
  );

  return (
    <Context.Provider value={{}}>
      {contextHolder}
      <Header
        style={{
          padding: '0 16px',
          background: colorBgContainer,
        }}
      >
        <Flex align="center" justify="space-between">
          <Space align="center">
            <Popover
              trigger={'click'}
              content={
                <Menu
                  style={{ borderInlineEnd: 'none' }}
                  items={[
                    {
                      key: 'Item',
                      label: 'New Item',
                      icon: <ContainerOutlined />,
                    },
                    {
                      key: 'Customer',
                      label: 'New Customer',
                      icon: <ContactsOutlined />,
                    },
                    {
                      key: 'Email',
                      label: 'New Email',
                      icon: <MailOutlined />,
                    },
                  ]}
                />
              }
            >
              <Button
                shape="circle"
                icon={
                  <PlusCircleFilled style={{ color: 'var(--color-primary)' }} />
                }
              />
            </Popover>
            <Input
              placeholder="input search text"
              style={{ width: 250, borderRadius: 16 }}
              suffix={<SearchOutlined />}
            />
          </Space>
          <Space size={'large'} style={{ lineHeight: '21px' }}>
            <Popover trigger="click" content={notificationContent}>
              <Badge dot>
                <BellOutlined style={{ fontSize: 21 }} />
              </Badge>
            </Popover>
            <Badge count={5} size="small">
              <Button
                type="text"
                href="/email"
                icon={<MailOutlined style={{ fontSize: 21 }} />}
              ></Button>
            </Badge>
            <Button
              type="text"
              href="/chat"
              icon={<SendOutlined style={{ fontSize: 21 }} />}
            />
            <Dropdown
              menu={{
                items: [
                  {
                    key: 'Logout',
                    label: 'Logout',
                  },
                ],
                onClick: ({ key }) => {
                  if (key === 'Logout') handleLogout();
                },
              }}
            >
              <Avatar
                shape="circle"
                size={32}
                style={{ border: '1px solid #efefef' }}
                src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
              />
            </Dropdown>
          </Space>
        </Flex>
      </Header>
    </Context.Provider>
  );
}
