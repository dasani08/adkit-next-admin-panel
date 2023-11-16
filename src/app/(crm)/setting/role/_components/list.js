'use client';
import React from 'react';
import { Card, Button, Space, Tooltip } from 'antd';
import {
  PlusOutlined,
  DeleteOutlined,
  FormOutlined,
  CopyOutlined,
} from '@ant-design/icons';

import ListPage from '@/components/list-page';
import { getRoles } from '@/services/role';

export default function ListRole() {
  const [filter] = React.useState({});
  const [sortedInfo] = React.useState({});
  const [selectedRowKeys, setSelectedRowKeys] = React.useState([]);
  const [size] = React.useState('small');

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <Card
      title="ROLES"
      extra={[
        <Space key="bar">
          <Button
            href="/setting/role/new"
            key={'new-customer'}
            icon={<PlusOutlined />}
            type="primary"
          >
            NEW ROLE
          </Button>
        </Space>,
      ]}
    >
      <ListPage
        size={size}
        filter={filter}
        sortedInfo={sortedInfo}
        fetchApi={getRoles}
        rowSelection={rowSelection}
        columns={[
          {
            title: 'Name',
            key: 'Name',
            dataIndex: 'roleName',
            default: true,
          },
          {
            title: 'Description',
            key: 'Description',
            dataIndex: 'description',
            default: true,
            ellipsis: true,
          },
          {
            title: 'Users',
            key: 'Users',
            dataIndex: 'noOfUser',
            default: true,
            width: 75,
          },
          {
            title: '',
            key: 'Actions',
            default: true,
            fixed: 'right',
            width: 100,
            render: () => {
              return (
                <Space>
                  <Tooltip title="Clone">
                    <Button size="small" icon={<CopyOutlined />} />
                  </Tooltip>
                  <Tooltip title="Edit">
                    <Button size="small" type="text" icon={<FormOutlined />} />
                  </Tooltip>
                  <Tooltip title="Delete">
                    <Button
                      size="small"
                      type="text"
                      icon={<DeleteOutlined />}
                      danger
                    />
                  </Tooltip>
                </Space>
              );
            },
          },
        ]}
      />
    </Card>
  );
}
