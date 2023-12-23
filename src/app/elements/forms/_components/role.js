'use client';
import React from 'react';
import {
  Card,
  Button,
  Form,
  Row,
  Col,
  Input,
  Typography,
  Space,
  Tabs,
  Table,
  Checkbox,
  message,
} from 'antd';
import { useRouter } from 'next/navigation';
import useTableScroll from '@/lib/hooks/useTblScroll';

export default function NewRoleForm() {
  const [form] = Form.useForm();
  const scrollX = useTableScroll();
  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter();
  const key = 'updatable';
  const openMessage = () => {
    messageApi.open({
      key,
      type: 'loading',
      content: 'Saving...',
    });
    setTimeout(() => {
      router.back();
      messageApi.open({
        key,
        type: 'success',
        content: 'Saved!',
        duration: 2,
      });
    }, 1000);
  };

  return (
    <Card
      title={'Horizontal form with Tab & Table'}
      extra={
        <Space>
          <Button type="primary" onClick={openMessage}>
            CREATE
          </Button>
          <Button>CANCEL</Button>
        </Space>
      }
    >
      {contextHolder}
      <Form
        layout="vertical"
        form={form}
        initialValues={{
          name: 'Editor',
          description:
            'Edit can manage and publish contents including those of other users',
        }}
      >
        <Typography.Title level={4}>Role Details</Typography.Title>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="name" label="Name">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="description" label="Description">
              <Input.TextArea rows={3} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Tabs
              defaultActiveKey="1"
              type="line"
              size={'middle'}
              items={[
                {
                  label: `Components`,
                  key: 'Components',
                  children: (
                    <Table
                      scroll={{ x: scrollX }}
                      columns={[
                        {
                          title: '',
                          dataIndex: 'name',
                          render: (name) => (
                            <Space>
                              <Checkbox />
                              {name}
                            </Space>
                          ),
                        },
                        {
                          title: (
                            <Space direction="vertical">
                              CREATE
                              <Checkbox indeterminate />
                            </Space>
                          ),
                          key: 'CREATE',
                          align: 'center',
                          dataIndex: 'create',
                          render: (chked) => <Checkbox checked={chked} />,
                        },
                        {
                          title: (
                            <Space direction="vertical">
                              READ
                              <Checkbox indeterminate />
                            </Space>
                          ),
                          key: 'READ',
                          align: 'center',
                          dataIndex: 'read',
                          render: (chked) => <Checkbox checked={chked} />,
                        },
                        {
                          title: (
                            <Space direction="vertical">
                              UPDATE
                              <Checkbox indeterminate />
                            </Space>
                          ),
                          key: 'UPDATE',
                          align: 'center',
                          dataIndex: 'update',
                          render: (chked) => <Checkbox checked={chked} />,
                        },
                        {
                          title: (
                            <Space direction="vertical">
                              DELETE
                              <Checkbox indeterminate />
                            </Space>
                          ),
                          key: 'DELETE',
                          align: 'center',
                          dataIndex: 'delete',
                          render: (chked) => <Checkbox checked={chked} />,
                        },
                        {
                          title: (
                            <Space direction="vertical">
                              PUBLISH
                              <Checkbox indeterminate />
                            </Space>
                          ),
                          key: 'PUBLISH',
                          align: 'center',
                          dataIndex: 'publish',
                          render: (chked) => <Checkbox checked={chked} />,
                        },
                      ]}
                      pagination={false}
                      dataSource={[
                        {
                          name: 'ITEMS',
                          create: true,
                          update: true,
                        },
                        {
                          name: 'CUSTOMERS',
                          publish: true,
                        },
                        {
                          name: 'SALE ORDERS',
                          publish: true,
                        },
                        {
                          name: 'INVOICES/BILLS',
                          publish: true,
                        },
                      ]}
                    />
                  ),
                },
                {
                  label: `Setting`,
                  key: 'Settings',
                  children: (
                    <Space direction="vertical">
                      <Checkbox checked>Users</Checkbox>
                      <Checkbox checked>Export data</Checkbox>
                      <Checkbox checked>General preferences</Checkbox>
                      <Checkbox checked>Taxes</Checkbox>
                      <Checkbox checked>Payment Terms</Checkbox>
                      <Checkbox checked>Email Template</Checkbox>
                    </Space>
                  ),
                },
                {
                  label: `Reports`,
                  key: 'Reports',
                  children: (
                    <Space direction="vertical">
                      <Checkbox checked>Dashboard</Checkbox>
                      <Checkbox checked>Sales reports</Checkbox>
                      <Checkbox checked>Purchase reports</Checkbox>
                      <Checkbox checked>Inventory reports</Checkbox>
                    </Space>
                  ),
                },
              ]}
            />
          </Col>
        </Row>
      </Form>
    </Card>
  );
}
