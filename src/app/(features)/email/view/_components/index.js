'use client';
import React from 'react';
import {
  Card,
  Button,
  Typography,
  Flex,
  Avatar,
  Space,
  Divider,
  Tooltip,
} from 'antd';
import {
  ArrowLeftOutlined,
  ExclamationCircleOutlined,
  DeleteOutlined,
  FlagOutlined,
  FunnelPlotOutlined,
} from '@ant-design/icons';

export default function EmailDetail() {
  return (
    <Card
      title={
        <Space>
          <Tooltip title="Back">
            <Button type="text" icon={<ArrowLeftOutlined />} />
          </Tooltip>
          <Space>
            <Tooltip title="Report spam">
              <Button type="text" icon={<ExclamationCircleOutlined />} />
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
        </Space>
      }
    >
      <Typography.Title level={3}>Fusce a libero pellentesque</Typography.Title>
      <Flex gap={16}>
        <Avatar size={40} style={{ backgroundColor: '#87d068' }}>
          TD
        </Avatar>
        <Space direction="vertical" size={'small'}>
          <Typography.Text strong>enim@icloud.co.uk</Typography.Text>
          <Typography.Text>
            To: <Typography.Text type="secondary">John Black</Typography.Text>
          </Typography.Text>
          <Typography.Text>
            Reploy-To:{' '}
            <Typography.Text type="secondary">
              enim@icloud.co.uk
            </Typography.Text>
          </Typography.Text>
        </Space>
      </Flex>
      <Divider />
      <Typography.Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Id semper risus in
        hendrerit gravida. Ultrices sagittis orci a scelerisque purus semper.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames. Eu consequat ac felis donec. Eget nulla facilisi etiam dignissim
        diam quis. Etiam dignissim diam quis enim lobortis scelerisque. Sem
        integer vitae justo eget magna fermentum iaculis. Lorem donec massa
        sapien faucibus et. Fusce id velit ut tortor pretium viverra
        suspendisse. Tellus cras adipiscing enim eu. Fringilla phasellus
        faucibus scelerisque eleifend donec pretium vulputate.
      </Typography.Paragraph>
    </Card>
  );
}
