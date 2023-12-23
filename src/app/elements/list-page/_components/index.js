'use client';
import React from 'react';
import { Card, Typography, Table as AntTable, Collapse, Divider } from 'antd';
import Prism from 'prismjs';

import '../../../../../public/prism.css';
import ListPage from '@/components/list-page';
import { getCustomers } from '@/services/customer';

export default function OrganizationProfile() {
  const [size] = React.useState('middle');

  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Card title={'LIST PAGE'}>
      <Typography.Title level={3}>List Page</Typography.Title>
      <Typography.Paragraph>
        List page will help you to build up your listing page more quickly with
        built-in helpers. It supports fetching data from the service &
        paginating.
      </Typography.Paragraph>

      <pre>
        <code className="language-javascript">
          import ListPage from &apos;@/components/list-page&apos;;
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
        pagination={false}
        dataSource={[
          {
            name: 'Table props',
            description: 'List page has all props from Table component',
          },
          {
            name: 'fetchApi',
            description: 'Fetch API Action',
            default: '',
          },
        ]}
      />
      <Divider />
      <Typography.Title level={4}>Fetch API</Typography.Title>
      <Typography.Text>
        The fetchApi funtion should returned a promise with data in a format.
        The list page will excute the fetchApi function to get the data and pass
        it through the table. The fetchApi will be excuted automatically once
        the filter, pagination, sorter changed to get new data from server.
      </Typography.Text>
      <pre>
        <code className="language-javascript">
          {`import http from '@/lib/utils/http';

export const getCustomers = (params) => {
  return http.get('/api/customers', params);
};`}
        </code>
      </pre>

      <pre>
        <code className="language-json">
          {`// Format data of fetchApi
{
  data: [], // The server data
  meta: {
    itemCount: 12, // Total item count
    page: 1, // The current page
  }
}`}
        </code>
      </pre>

      <Divider />
      <Typography.Title level={4}>Demo</Typography.Title>
      <Card>
        <ListPage
          size={size}
          filter={{}}
          fetchApi={getCustomers}
          columns={[
            {
              title: 'Contact Name',
              key: 'Name',
              dataIndex: 'customerName',
              default: true,
            },
            {
              title: 'Email',
              key: 'Email',
              dataIndex: 'email',
              default: true,
            },
            {
              title: 'Company Name',
              key: 'Company Name',
              dataIndex: 'companyName',
              default: true,
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
      </Card>
      <Collapse
        defaultActiveKey={'1'}
        items={[
          {
            key: '1',
            label: 'Show Code',
            children: (
              <pre>
                <code className="language-jsx">
                  {`<ListPage
  size={size}
  filter={{}}
  fetchApi={getCustomers}
  columns={[]}
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
