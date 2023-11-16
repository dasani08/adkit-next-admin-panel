'use client';
import React from 'react';
import {
  Card,
  Row,
  Col,
  Flex,
  Table,
  Space,
  Typography,
  Avatar,
  Input,
  Tabs,
  Image,
  Tooltip,
} from 'antd';
import {
  PhoneOutlined,
  VideoCameraOutlined,
  InfoCircleOutlined,
  PlusCircleFilled,
  CameraFilled,
  AudioFilled,
  LikeFilled,
  SmileFilled,
  FilePdfOutlined,
  FileExcelOutlined,
  LinkOutlined,
} from '@ant-design/icons';

export default function ChatPage() {
  const [openInfo, setOpenInfo] = React.useState(false);
  return (
    <Card
      bodyStyle={{
        height: 'calc(100vh - 200px)',
      }}
    >
      <Row style={{ height: '100%' }} gutter={16}>
        <Col flex="300px" style={{ borderRight: '1px solid #efefef' }}>
          <Input.Search
            style={{ width: '100%', marginBottom: 16 }}
            placeholder="Search store location"
          />
          <Table
            showHeader={false}
            pagination={false}
            size="small"
            rowKey={'id'}
            columns={[
              {
                key: 'No',
                dataIndex: 'id',
                render: (id) => (
                  <Avatar
                    size="large"
                    src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${id}`}
                    style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}
                  >
                    U
                  </Avatar>
                ),
                width: 10,
              },
              {
                key: 'Name',
                dataIndex: 'name',
                render: (name) => (
                  <Space direction="vertical">
                    <Typography.Text strong>{name}</Typography.Text>
                    <Typography.Text type="secondary">
                      You: 123 Ave Island Bay - 2h
                    </Typography.Text>
                  </Space>
                ),
              },
            ]}
            dataSource={[
              {
                id: 1,
                name: 'John Doe',
              },
              {
                id: 2,
                name: 'Alexander Wang',
              },
              {
                id: 3,
                name: 'Bob Vup',
              },
            ]}
          />
        </Col>
        <Col flex="auto">
          <Flex
            style={{
              position: 'relative',
            }}
            className="chat-app"
          >
            <Flex
              className="chat-header"
              align="center"
              justify="space-between"
            >
              <Space>
                <Avatar
                  size="large"
                  src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
                />
                <Typography.Text strong>John Doe</Typography.Text>
              </Space>
              <Space>
                <PhoneOutlined
                  style={{ color: 'var(--color-primary)', fontSize: 22 }}
                />
                <VideoCameraOutlined
                  style={{ color: 'var(--color-primary)', fontSize: 22 }}
                />
                <InfoCircleOutlined
                  style={{ color: 'var(--color-primary)', fontSize: 22 }}
                  onClick={() => setOpenInfo(!openInfo)}
                />
              </Space>
            </Flex>
            <Flex className="chat-msg" align="end" vertical>
              <Flex justify="left" style={{ width: '100%' }}>
                <Space
                  direction="vertical"
                  styles={{
                    item: {
                      display: 'inline-block',
                      backgroundColor: '#efefef',
                      padding: '4px 16px',
                      borderRadius: 12,
                    },
                  }}
                >
                  <Typography.Text>Hei</Typography.Text>
                  <Typography.Text>How are you?</Typography.Text>
                </Space>
              </Flex>
              <Flex justify="right" style={{ width: '100%' }}>
                <Space
                  direction="vertical"
                  styles={{
                    item: {
                      display: 'inline-block',
                      backgroundColor: 'var(--color-primary)',
                      padding: '4px 16px',
                      borderRadius: 12,
                    },
                  }}
                >
                  <Typography.Text style={{ color: '#fff' }}>
                    I&apos;m Good
                  </Typography.Text>
                </Space>
              </Flex>
            </Flex>
            <Flex className="chat-box" align="center">
              <Row style={{ width: '100%' }} align="middle" gutter={8}>
                <Col flex="100px">
                  <Space>
                    <PlusCircleFilled
                      style={{ color: 'var(--color-primary)', fontSize: 22 }}
                    />
                    <CameraFilled
                      style={{ color: 'var(--color-primary)', fontSize: 22 }}
                    />
                    <AudioFilled
                      style={{ color: 'var(--color-primary)', fontSize: 22 }}
                    />
                    <LikeFilled
                      style={{ color: 'var(--color-primary)', fontSize: 22 }}
                    />
                  </Space>
                </Col>
                <Col flex="auto">
                  <Input
                    size="large"
                    suffix={
                      <SmileFilled style={{ color: 'var(--color-primary)' }} />
                    }
                  />
                </Col>
              </Row>
            </Flex>
          </Flex>
        </Col>

        {openInfo && (
          <Col flex="300px">
            <Flex justify="center">
              <Space
                direction="vertical"
                styles={{ item: { textAlign: 'center' } }}
              >
                <Avatar
                  size={64}
                  src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
                />
                <Typography.Text strong>Thanh Dang</Typography.Text>
              </Space>
            </Flex>
            <Tabs
              items={[
                {
                  key: '1',
                  label: 'Media',
                  children: (
                    <Image.PreviewGroup
                      preview={{
                        onChange: (current, prev) =>
                          console.log(
                            `current index: ${current}, prev index: ${prev}`,
                          ),
                      }}
                    >
                      <Image
                        alt="1"
                        width={90}
                        src="/photos/pexels-thiago-rosarii-18988315.jpg"
                      />
                      <Image
                        alt="2"
                        width={90}
                        src="/photos/pexels-tifeclicks-16001703.jpg"
                      />
                      <Image
                        alt="3"
                        width={90}
                        src="/photos/pexels-line-knipst-18512532.jpg"
                      />
                      <Image
                        alt="4"
                        width={90}
                        src="/photos/pexels-david-9782305.jpg"
                      />
                    </Image.PreviewGroup>
                  ),
                },
                {
                  key: '2',
                  label: 'Files',
                  children: (
                    <Table
                      showHeader={false}
                      size="small"
                      pagination={false}
                      dataSource={[
                        {
                          icon: 'pdf',
                          fileName: 'INV_0001.pdf',
                          fileSize: '200.09 KB',
                        },
                        {
                          icon: 'excel',
                          fileName: 'ITEM_002.csv',
                          fileSize: '100.09 KB',
                        },
                      ]}
                      columns={[
                        {
                          key: 'Icon',
                          dataIndex: 'icon',
                          render: (icon) => {
                            if (icon === 'pdf') return <FilePdfOutlined />;
                            if (icon === 'excel') return <FileExcelOutlined />;
                          },
                        },
                        {
                          key: 'File Name',
                          dataIndex: 'fileName',
                          render: (fileName, { fileSize }) => (
                            <Tooltip title="Click to download">
                              <Space direction="vertical">
                                <Typography.Text strong>
                                  {fileName}
                                </Typography.Text>
                                <Typography.Text type="secondary">
                                  {fileSize}
                                </Typography.Text>
                              </Space>
                            </Tooltip>
                          ),
                        },
                      ]}
                    />
                  ),
                },
                {
                  key: '3',
                  label: 'Links',
                  children: (
                    <Table
                      showHeader={false}
                      size="small"
                      pagination={false}
                      dataSource={[
                        {
                          icon: 'pdf',
                          linkName: 'Link to the attachment 1',
                        },
                        {
                          icon: 'pdf',
                          linkName: 'Link to the attachment 2',
                        },
                      ]}
                      columns={[
                        {
                          key: 'Icon',
                          render: () => {
                            return <LinkOutlined />;
                          },
                        },
                        {
                          key: 'File Name',
                          dataIndex: 'linkName',
                          render: (linkName) => (
                            <Tooltip title="Click to open">
                              <Space direction="vertical">
                                <Typography.Text strong>
                                  {linkName}
                                </Typography.Text>
                              </Space>
                            </Tooltip>
                          ),
                        },
                      ]}
                    />
                  ),
                },
              ]}
            />
          </Col>
        )}
      </Row>
    </Card>
  );
}
