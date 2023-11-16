'use client';
import React from 'react';
import { Card, Button, Space, Badge } from 'antd';
import { PlusOutlined, DeleteOutlined, FormOutlined } from '@ant-design/icons';

import ListPage from '@/components/list-page';
import { getUsers } from '@/services/user';

export default function ListUser() {
  const [filter] = React.useState({});
  const [sortedInfo] = React.useState({});
  const [selectedRowKeys, setSelectedRowKeys] = React.useState([]);
  const [size, setSize] = React.useState('small');

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <Card
      title="USERS"
      // style={{ margin: '16px 0' }}
      extra={[
        <Space key="bar">
          <Button
            href="/setting/user/new"
            key={'new-customer'}
            icon={<PlusOutlined />}
            type="primary"
          >
            NEW USER
          </Button>
        </Space>,
      ]}
    >
      <ListPage
        size={size}
        filter={filter}
        sortedInfo={sortedInfo}
        fetchApi={getUsers}
        rowSelection={rowSelection}
        columns={[
          {
            title: 'First Name',
            key: 'First Name',
            dataIndex: 'firstName',
            default: true,
            sorter: true,
          },
          {
            title: 'Last Name',
            key: 'Last Name',
            dataIndex: 'lastName',
            default: true,
          },
          {
            title: 'Email',
            key: 'Email',
            dataIndex: 'email',
            default: true,
            width: 200,
          },
          {
            title: 'Roles',
            key: 'Roles',
            dataIndex: 'roles',
            default: true,
            filters: [
              {
                text: 'User',
                value: 'User',
              },
              {
                text: 'Staff',
                value: 'Staff',
              },
              {
                text: 'Super Admin',
                value: 'Super Admin',
              },
            ],
          },
          {
            title: 'Username',
            key: 'Username',
            dataIndex: 'name',
            default: true,
          },
          {
            title: 'Actie User',
            key: 'Actie User',
            dataIndex: 'status',
            default: true,
            filters: [
              {
                text: 'Active',
                value: 'Active',
              },
              {
                text: 'In Active',
                value: 'In Active',
              },
            ],
            render: () => <Badge status="processing" text="Active" />,
          },
          {
            title: '',
            key: 'Actions',
            default: true,
            fixed: 'right',
            width: 75,
            render: () => {
              return (
                <Space>
                  <Button size="small" type="text" icon={<FormOutlined />} />
                  <Button
                    size="small"
                    type="text"
                    icon={<DeleteOutlined />}
                    danger
                  />
                </Space>
              );
            },
          },
        ]}
      />
    </Card>
  );
}
