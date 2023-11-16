'use client';
import React from 'react';
import { Tabs, Form, Input, Flex, Radio, Space, Select } from 'antd';

import TaxAndPaymentTab from './tax';
import AddressTab from './address';
import CustomFieldTab from './custom-field';
import NoteTab from './note';

export default function NewCustomerForm({ open, onClose }) {
  const options = [
    {
      value: 'Mr',
      label: 'Mr',
    },
    {
      value: 'Mrs',
      label: 'Mrs',
    },
    {
      value: 'Miss',
      label: 'Miss',
    },
  ];
  return (
    // <Modal
    //   open={open}
    //   title="NEW CUSTOMER"
    //   width={860}
    //   cancelText="CANCEL"
    //   okText="SAVE & CLOSE"
    //   onCancel={onClose}
    // >
    <Flex vertical>
      <Form labelCol={{ span: 6 }} wrapperCol={{ span: 12 }} labelAlign="left">
        <Form.Item label="Customer Type" style={{ marginTop: 24 }}>
          <Input.Group>
            <Radio>Business</Radio>
            <Radio>Individual</Radio>
          </Input.Group>
        </Form.Item>
        <Form.Item label="First Name">
          <Space.Compact style={{ width: '100%' }}>
            <Select
              defaultValue="Mr"
              options={options}
              style={{ width: 100 }}
            />
            <Input placeholder="First Name" />
          </Space.Compact>
        </Form.Item>
        <Form.Item label="Last Name">
          <Input placeholder="Last Name" />
        </Form.Item>
        <Form.Item label="Company Name">
          <Input />
        </Form.Item>
        <Form.Item label="Customer Email">
          <Input />
        </Form.Item>
        <Form.Item label="Customer Phone">
          <Form.Item
            style={{
              display: 'inline-block',
              width: 'calc(50% - 8px)',
              margin: '0',
            }}
          >
            <Input placeholder="Work Phone" />
          </Form.Item>
          <Form.Item
            style={{
              display: 'inline-block',
              width: 'calc(50%)',
              marginLeft: 8,
              marginBottom: 0,
            }}
          >
            <Input placeholder="Mobile" />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Website">
          <Input />
        </Form.Item>
      </Form>
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            key: '1',
            label: 'Tax & Payment Details',
            children: <TaxAndPaymentTab />,
          },
          {
            key: '2',
            label: 'Address',
            children: <AddressTab />,
          },
          {
            key: '3',
            label: 'Custom Fields',
            children: <CustomFieldTab />,
          },
          {
            key: '5',
            label: 'Notes',
            children: <NoteTab />,
          },
        ]}
      />
    </Flex>
    // </Modal>
  );
}
