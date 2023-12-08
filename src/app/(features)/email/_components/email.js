'use client';
import React from 'react';
import {
  Card,
  Layout,
  Button,
  Table,
  Menu,
  Dropdown,
  Space,
  Avatar,
  Typography,
  Flex,
  Tag,
  Tooltip,
  Divider,
  Input,
} from 'antd';
import {
  SearchOutlined,
  ContainerOutlined,
  SendOutlined,
  InboxOutlined,
  FileExclamationOutlined,
  ClearOutlined,
  DeleteOutlined,
  StarOutlined,
  DownOutlined,
  ExclamationCircleOutlined,
  FlagOutlined,
  FunnelPlotOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/navigation';

import { useTheme } from '@/state/theme/theme-context';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Favorites', 'Favorites', null, [
    getItem('Inbox', '5', <InboxOutlined />),
    getItem('Sent', '6', <SendOutlined />),
  ]),
  getItem('Mailbox', 'Mailbox', null, [
    getItem('Inbox', '7', <InboxOutlined />),
    getItem('Sent', '8', <SendOutlined />),
    getItem('Drafts', '9', <FileExclamationOutlined />),
    getItem('Junk', 'Junk', <ClearOutlined />),
    getItem('Trash', 'Trash', <DeleteOutlined />),
    getItem('Archive', 'Archive', <ContainerOutlined />),
  ]),
];

export default function EmailPage() {
  const { theme } = useTheme();
  const router = useRouter();
  const [selectedRowKeys, setSelectedRowKeys] = React.useState([]);
  const [isSearching, setSearching] = React.useState(false);
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  return (
    <Card
      title="MAILBOX"
      extra={
        isSearching ? (
          <Input
            placeholder="Search"
            prefix={<SearchOutlined />}
            autoFocus={true}
            onBlur={() => setSearching(false)}
          />
        ) : (
          <Space>
            <Button type="primary" href="/email/compose">
              COMPOSE
            </Button>
            <Button
              onClick={() => setSearching(true)}
              type="text"
              icon={<SearchOutlined />}
            />
          </Space>
        )
      }
    >
      <Layout hasSider>
        <Layout.Sider theme={theme}>
          <Menu
            defaultOpenKeys={['Favorites', 'Mailbox']}
            mode="inline"
            items={items}
          />
        </Layout.Sider>
        <Layout.Content>
          <Table
            rowKey={'id'}
            showHeader={true}
            rowSelection={{
              onChange: onSelectChange,
            }}
            scroll={{ y: 380 }}
            rowClassName={'mail-item-row'}
            onRow={() => ({
              onClick: () => {
                router.push('/email/view');
              },
            })}
            columns={[
              {
                title: (
                  <Space split={<Divider type="vertical" />}>
                    <Dropdown
                      menu={{
                        items: [
                          {
                            label: 'All',
                            key: 'All',
                          },
                          {
                            label: 'None',
                            key: 'None',
                          },
                          {
                            label: 'Read',
                            key: 'Read',
                          },
                          {
                            label: 'Unread',
                            key: 'Unread',
                          },
                          {
                            label: 'Starred',
                            key: 'Starred',
                          },
                          {
                            label: 'Unstarred',
                            key: 'Unstarred',
                          },
                        ],
                      }}
                    >
                      <Button type="text">
                        <Space>
                          None
                          <DownOutlined />
                        </Space>
                      </Button>
                    </Dropdown>
                    {selectedRowKeys.length > 0 && (
                      <Space>
                        <Tooltip title="Report spam">
                          <Button
                            type="text"
                            icon={<ExclamationCircleOutlined />}
                          />
                        </Tooltip>
                        <Tooltip title="Delete">
                          <Button type="text" icon={<DeleteOutlined />} />
                        </Tooltip>
                        <Tooltip title="Flag important">
                          <Button type="text" icon={<FlagOutlined />} />
                        </Tooltip>
                        <Tooltip title="Create filter">
                          <Button type="text" icon={<FunnelPlotOutlined />} />
                        </Tooltip>
                      </Space>
                    )}
                  </Space>
                ),
                key: 'Flag',
                align: 'left',
                render: () => (
                  <Flex align="center" gap={8}>
                    <Button icon={<StarOutlined />} />
                    <Avatar size={40} style={{ backgroundColor: '#87d068' }}>
                      TD
                    </Avatar>
                    <Flex vertical wrap={true}>
                      <Space split={'|'}>
                        <Typography.Text strong>Domnic Harris</Typography.Text>
                        <Typography.Text strong>
                          Fusce a libero pellentesque
                        </Typography.Text>
                      </Space>
                      <Typography.Text
                        type="secondary"
                        ellipsis={true}
                        style={{ width: 200 }}
                      >
                        Cras quis urna urna. Proin dignissim turpis vel ex //
                        ornare vestibulum. Curabitur sed pellentesque arcu, sit
                        amet placerat eros. Nulla quis interdum tellus
                      </Typography.Text>
                      <Space>
                        <Tag color="magenta">magenta</Tag>
                        <Tag color="volcano">volcano</Tag>
                      </Space>
                    </Flex>
                  </Flex>
                ),
              },
            ]}
            dataSource={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]}
            pagination={false}
          />
        </Layout.Content>
      </Layout>
    </Card>
  );
}
