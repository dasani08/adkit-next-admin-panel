'use client';
import React from 'react';
import Link from 'next/link';
import {
  Button,
  Card,
  Collapse,
  Descriptions,
  Typography,
  Space,
  Input,
  Form,
  List,
  Row,
  Col,
} from 'antd';
import {
  RightOutlined,
  HistoryOutlined,
  PlusOutlined,
  NotificationOutlined,
  PhoneOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

import ListItem from '@/components/list';

export default function CustomerDetail() {
  const [isCollapsed, setCollapsed] = React.useState(false);
  const onChange = (keys) => {
    setCollapsed(keys.indexOf('1') === -1);
  };
  const ContactInfo = () => (
    <Descriptions
      title={<b>Contact Information</b>}
      colon={false}
      column={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2, xxl: 2 }}
      labelStyle={{ width: 200, justifyContent: 'flex-end' }}
      items={[
        {
          key: '1',
          label: 'Contact Owner',
          children: <p>ABC Company</p>,
        },
        {
          key: '6',
          label: 'Lead Source',
          children: 'Trade Show',
        },
        {
          key: '2',
          label: 'Contact Name',
          children: <p>ABC Company</p>,
        },
        {
          key: '7',
          label: 'Vendor Name',
          children: <Typography.Paragraph editable>—</Typography.Paragraph>,
        },
        {
          key: '3',
          label: 'Account Name',
          children: <Link href={'#'}>ABC Company</Link>,
        },
        {
          key: '8',
          label: 'Title',
          children: <Typography.Paragraph editable>—</Typography.Paragraph>,
        },
        {
          key: '4',
          label: 'Email',
          children: <Link href={'#'}>ABC Company</Link>,
        },
        {
          key: '9',
          label: 'Department',
          children: <Typography.Paragraph editable>—</Typography.Paragraph>,
        },
        {
          key: '5',
          label: 'Phone',
          children: '+1 (647) 444 1234',
        },
        {
          key: '10',
          label: 'Home Phone',
          children: <Typography.Paragraph editable>—</Typography.Paragraph>,
        },
      ]}
    />
  );
  const DescriptionInfo = () => (
    <Descriptions
      title={<b>Description Information</b>}
      colon={false}
      column={1}
      labelStyle={{ width: 200, justifyContent: 'flex-end' }}
      items={[
        {
          key: '1',
          label: 'Description',
          children: <Typography.Paragraph editable>—</Typography.Paragraph>,
        },
        {
          key: '2',
          label: 'Unique Id',
          children: <Typography.Paragraph editable>—</Typography.Paragraph>,
        },
        {
          key: '3',
          label: 'Class Rating',
          children: <Typography.Paragraph editable>—</Typography.Paragraph>,
        },
      ]}
    />
  );
  const Note = () => (
    <Row>
      <Col span={{ xs: 24, sm: 24, md: 18 }}>
        <Space style={{ width: '100%' }} direction="vertical">
          <h3>Notes</h3>
          <Form.Item style={{ marginBottom: 0 }}>
            <Input.TextArea placeholder="Add a note" />
          </Form.Item>
          <ListItem
            items={[
              {
                key: '1',
                title:
                  'A charming gentleman. He used to buy his mother flowers.',
                content: (
                  <Space split="-">
                    <Typography.Text type="secondary">Contact</Typography.Text>
                    <Typography.Link>Max Minsen</Typography.Link>
                    <Typography.Text type="secondary">
                      <HistoryOutlined /> 1 hr. ago by TM Live Admin
                    </Typography.Text>
                  </Space>
                ),
                icons: [
                  <Button size="small" key="edit" icon={<EditOutlined />} />,
                  <Button
                    size="small"
                    danger
                    key="delete"
                    icon={<DeleteOutlined />}
                  />,
                ],
              },
              {
                key: '2',
                title:
                  'Another charming gentleman. He used to buy his mother chocolate.',
                content: (
                  <Space split="-">
                    <Typography.Text type="secondary">Contact</Typography.Text>
                    <Typography.Link>Max Minsen</Typography.Link>
                    <Typography.Text type="secondary">
                      <HistoryOutlined /> 1 hr. ago by TM Live Admin
                    </Typography.Text>
                  </Space>
                ),
                icons: [
                  <Button size="small" key="edit" icon={<EditOutlined />} />,
                  <Button
                    size="small"
                    danger
                    key="delete"
                    icon={<DeleteOutlined />}
                  />,
                ],
              },
            ]}
          />
        </Space>
      </Col>
    </Row>
  );
  const Activity = () => (
    <div style={{ marginTop: 16 }}>
      <h3 style={{ marginBottom: 16 }}>Open Activities</h3>
      <List
        bordered
        dataSource={[]}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text mark>[ITEM]</Typography.Text> {item}
          </List.Item>
        )}
        locale={{
          emptyText: (
            <Space wrap={true}>
              <span>No records found</span>
              <Button icon={<PlusOutlined />}>New Task</Button>
              <Button icon={<NotificationOutlined />}>New Event</Button>
              <Button icon={<PhoneOutlined />} type="primary">
                New Call
              </Button>
            </Space>
          ),
        }}
      />
    </div>
  );
  const items = React.useMemo(() => {
    const label = isCollapsed ? (
      <Typography.Link style={{ color: '#52c41a' }}>
        VIEW DETAILS
      </Typography.Link>
    ) : (
      <Typography.Link style={{ color: '#52c41a' }}>
        HIDE DETAIL
      </Typography.Link>
    );
    return [
      {
        key: '1',
        label,
        children: (
          <Space direction="vertical">
            <ContactInfo />
            <DescriptionInfo />
            <Note />
            <Activity />
          </Space>
        ),
        onChange,
      },
    ];
  }, [isCollapsed]);

  return (
    <Card style={{ margin: '16px 0' }}>
      <Collapse
        defaultActiveKey={['1']}
        ghost
        items={items}
        onChange={onChange}
        expandIcon={({ isActive }) => (
          <RightOutlined
            style={{ color: '#52c41a' }}
            rotate={isActive ? 90 : 0}
          />
        )}
      />
    </Card>
  );
}
