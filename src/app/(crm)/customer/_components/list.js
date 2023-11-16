'use client';
import React from 'react';
import { Card, Button, Space, Typography, Tooltip, Dropdown } from 'antd';
import {
  PlusOutlined,
  MailOutlined,
  DeleteOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import Link from 'next/link';

import ListPage from '@/components/list-page';
import { getCustomers } from '@/services/customer';
import NewCustomerModal from './new';

export default function ListCustomer() {
  const [isShowingNewCustomerModal, setIsShowingNewCustomerModal] =
    React.useState(false);
  const [filter] = React.useState({});
  const [sortedInfo] = React.useState({});
  const [selectedRowKeys, setSelectedRowKeys] = React.useState([]);
  const [size, setSize] = React.useState('small');

  const showNewCustomerModalHandle = () => {
    setIsShowingNewCustomerModal(true);
  };

  const closeNewCustomerModalHandle = () => {
    setIsShowingNewCustomerModal(false);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <Card
      title="CUSTOMERS"
      style={{ margin: '16px 0' }}
      extra={[
        <Space key="bar">
          <Space.Compact key="actions">
            <Button
              icon={<MailOutlined />}
              disabled={selectedRowKeys.length === 0}
            >
              Email
            </Button>
            <Button
              icon={<DeleteOutlined />}
              disabled={selectedRowKeys.length === 0}
              danger
            >
              Delete
            </Button>
          </Space.Compact>
          <Button
            key={'new-customer'}
            icon={<PlusOutlined />}
            type="primary"
            onClick={showNewCustomerModalHandle}
          >
            NEW
          </Button>
          <Dropdown
            trigger={'click'}
            menu={{
              onClick: (e) => {
                setSize(e.key);
              },
              selectable: true,
              items: [
                {
                  key: 'display',
                  label: 'DISPLAY',
                  type: 'group',
                  children: [
                    {
                      key: 'small',
                      label: 'SMALL',
                    },
                    {
                      key: 'middle',
                      label: 'DEFAULT',
                    },
                    {
                      key: 'large',
                      label: 'LARGE',
                    },
                  ],
                },
              ],
            }}
          >
            <Button icon={<SettingOutlined />} />
          </Dropdown>
        </Space>,
      ]}
    >
      <ListPage
        size={size}
        filter={filter}
        sortedInfo={sortedInfo}
        fetchApi={getCustomers}
        rowSelection={rowSelection}
        columns={[
          {
            title: 'Contact Name',
            key: 'Name',
            dataIndex: 'customerName',
            default: true,
            render: (customerName, { id }) => (
              <Link href={`/customer/${id}`}>{customerName}</Link>
            ),
          },
          {
            title: 'Email',
            key: 'Email',
            dataIndex: 'email',
            default: true,
            render: (email) => (
              <Typography>
                {email}{' '}
                <Tooltip title="Send email">
                  <Typography.Link>
                    <MailOutlined />
                  </Typography.Link>
                </Tooltip>
              </Typography>
            ),
          },
          {
            title: 'Company Name',
            key: 'Company Name',
            dataIndex: 'companyName',
            default: true,
            render: (companyName) => (
              <Typography.Link>{companyName}</Typography.Link>
            ),
          },
          {
            title: 'Type',
            key: 'Type',
            dataIndex: 'customerType',
            default: true,
          },
          {
            title: 'Phone',
            key: 'Phone',
            dataIndex: 'workPhone',
            default: true,
          },
          {
            title: 'Website',
            key: 'Website',
            dataIndex: 'website',
            default: true,
          },
        ]}
      />
      <NewCustomerModal
        open={isShowingNewCustomerModal}
        onClose={closeNewCustomerModalHandle}
      />
    </Card>
  );
}
