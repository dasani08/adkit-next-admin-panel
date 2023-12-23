'use client';
import React from 'react';
import {
  Button,
  Card,
  Typography,
  Table as AntTable,
  Form,
  Radio,
  Space,
  Switch,
  Collapse,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Prism from 'prismjs';

import '../../../../../public/prism.css';
import Table from '@/components/table';

const data = [];
for (let i = 1; i <= 36; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    age: Number(`${i}2`),
    address: `New York No. ${i} Lake Park`,
    description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
  });
}

export default function OrganizationProfile() {
  const [showInfo, setShowInfo] = React.useState(true);
  const [size, setSize] = React.useState('middle');
  const [showPagination, setShowPagination] = React.useState(true);
  const [selection, setSelection] = React.useState(true);
  const handleShowinfoChange = (e) => {
    setShowInfo(e);
  };
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  const handleShowPaginationChange = (e) => {
    setShowPagination(e);
  };
  const handleSelectionChange = (e) => {
    setSelection(e);
  };
  const tableProps = {
    showInfo,
    size,
    selection,
  };

  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Card title={'TABLE'}>
      <Typography.Title level={3}>Table</Typography.Title>
      <pre>
        <code className="language-javascript">
          import Table from &apos;@/components/table&apos;;
        </code>
      </pre>
      <Typography.Title level={4}>Props</Typography.Title>
      <AntTable
        columns={[
          {
            title: 'Name',
            dataIndex: 'name',
          },
          {
            title: 'Description',
            dataIndex: 'description',
          },
          {
            title: 'Default',
            dataIndex: 'default',
          },
        ]}
        dataSource={[
          {
            name: 'showInfo',
            description: 'Showing table displaying information',
            default: 'true',
          },
          {
            name: 'name',
            description: 'Table name',
            default: '',
          },
          {
            name: 'showAction',
            description: 'Show extra components on the table header',
            default: 'false',
          },
          {
            name: 'size',
            description:
              'Size of table. Available sizes are small | middle | large',
            default: 'middle',
          },
          {
            name: 'selection',
            description: 'Row selection',
            default: 'false',
          },
          {
            name: 'extra',
            description:
              'Content to render in the top-right corner of the table',
            default: '',
          },
          {
            name: 'bulkActions',
            description: 'Bulk actions applies to selected rows only',
            default: '',
          },
        ]}
      />
      <Typography.Title level={4}>Demo</Typography.Title>
      <Card bordered={true}>
        <Form
          layout="inline"
          className="components-table-demo-control-bar"
          style={{
            marginBottom: 16,
          }}
        >
          <Form.Item label="Show info">
            <Switch checked={showInfo} onChange={handleShowinfoChange} />
          </Form.Item>
          <Form.Item label="Size">
            <Radio.Group value={size} onChange={handleSizeChange}>
              <Radio.Button value="large">Large</Radio.Button>
              <Radio.Button value="middle">Middle</Radio.Button>
              <Radio.Button value="small">Small</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Pagination">
            <Switch
              checked={showPagination}
              onChange={handleShowPaginationChange}
            />
          </Form.Item>
          <Form.Item label="Selection">
            <Switch checked={selection} onChange={handleSelectionChange} />
          </Form.Item>
        </Form>
        <Table
          {...tableProps}
          showAction={true}
          extra={
            <Space>
              <Button
                key={'new-customer'}
                icon={<PlusOutlined />}
                type="primary"
              >
                NEW
              </Button>
            </Space>
          }
          bulkActions={{
            items: [
              {
                label: 'Edit',
                key: 'Edit',
              },
              {
                label: 'Delete',
                key: 'Delete',
                danger: true,
              },
            ],
          }}
          columns={[
            {
              title: 'Name',
              key: 'Name',
              dataIndex: 'name',
              default: true,
            },
            {
              title: 'Age',
              key: 'Age',
              dataIndex: 'age',
              default: true,
            },
            {
              title: 'Address',
              key: 'Address',
              dataIndex: 'address',
              default: true,
            },
          ]}
          dataSource={data}
          pagination={
            showPagination
              ? { pageSize: 10, current: 1, simple: true, total: 36 }
              : false
          }
        />
      </Card>
      <Collapse
        defaultActiveKey={'1'}
        items={[
          {
            key: '1',
            label: 'Show Code',
            children: (
              <pre>
                <code className="language-js">
                  {`<Table
  showInfo={showInfo},
  size={size},
  selection={selection},
  showAction={true}
  extra={
    <Space>
      <Button
        key={'new-customer'}
        icon={<PlusOutlined />}
        type="primary"
      >
        NEW
      </Button>
    </Space>
  }
  bulkActions={{
    items: [
      {
        label: 'Edit',
        key: 'Edit',
        onClick: () => {}
      },
      {
        label: 'Delete',
        key: 'Delete',
        danger: true,
        onClick: () => {}
      },
    ],
  }}
  columns={[
    {
      title: 'Name',
      key: 'Name',
      dataIndex: 'name',
      default: true,
    },
    {
      title: 'Age',
      key: 'Age',
      dataIndex: 'age',
      default: true,
    },
    {
      title: 'Address',
      key: 'Address',
      dataIndex: 'address',
      default: true,
    },
  ]}
  dataSource={data}
  pagination={
    showPagination
      ? { pageSize: 10, current: 1, simple: true, total: 36 }
      : false
  }
/>`}
                </code>
              </pre>
            ),
          },
        ]}
      />
    </Card>
  );
}
