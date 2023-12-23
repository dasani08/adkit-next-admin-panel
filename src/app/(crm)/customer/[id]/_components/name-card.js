'use client';
import React from 'react';
import {
  Button,
  Card,
  Space,
  Avatar,
  Typography,
  Descriptions,
  Dropdown,
} from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

import BackBtn from '@/components/back-button';

export default function NameCard() {
  const [editableTitle, setEditableTitle] = React.useState('—');
  return (
    <Card
      style={{ margin: '16px 0' }}
      title={<BackBtn />}
      extra={
        <Space>
          <Button href="/email" key={'1'} ghost type="primary">
            SEND EMAIL
          </Button>
          <Button key={'2'}>EDIT</Button>
          <Dropdown
            menu={{
              items: [
                {
                  key: 'Clone',
                  label: 'Clone',
                },
                {
                  key: 'Share',
                  label: 'Share',
                },
                {
                  key: 'Delete',
                  label: 'Delete',
                  danger: true,
                },
                {
                  type: 'divider',
                },
                {
                  key: 'Print Preview',
                  label: 'Print Preview',
                },
                {
                  key: 'Meet Now!',
                  label: 'Meet Now!',
                },
                {
                  key: 'Schedule Online Meeting',
                  label: 'Schedule Online Meeting',
                },
                {
                  type: 'divider',
                },
                {
                  key: 'Customize Business Card',
                  label: 'Customize Business Card',
                },
                {
                  key: 'Create BUtton',
                  label: 'Create BUtton',
                },
              ],
            }}
            trigger={['click']}
          >
            <Button key={'3'} icon={<EllipsisOutlined />} />
          </Dropdown>
        </Space>
      }
    >
      <Space>
        <Avatar
          shape="square"
          style={{
            backgroundColor: '#52c41a',
          }}
          size={64}
          src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
        />
        <h4>Max Minsen</h4> /{' '}
        <Typography.Text type="secondary">jsx.group</Typography.Text>
      </Space>
      <Descriptions
        style={{ marginTop: 16, marginLeft: 64, justifyContent: 'flex-end' }}
        labelStyle={{ width: 150 }}
        colon={false}
        column={1}
        items={[
          {
            key: '1',
            label: 'Title',
            children: (
              <Typography.Paragraph
                editable={{
                  onChange: setEditableTitle,
                }}
              >
                {editableTitle}
              </Typography.Paragraph>
            ),
          },
          {
            key: '2',
            label: 'Email',
            children: 'max.minsen@gmail.com',
          },
          {
            key: '3',
            label: 'Date of Birth',
            children: <Typography.Paragraph editable>—</Typography.Paragraph>,
          },
          {
            key: '4',
            label: 'Mobile',
            children: <Typography.Paragraph editable>—</Typography.Paragraph>,
          },
          {
            key: '5',
            label: 'Department',
            children: <Typography.Paragraph editable>—</Typography.Paragraph>,
          },
        ]}
      />
    </Card>
  );
}
