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
  Badge,
  Drawer,
  theme,
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
import { useTheme } from '@/state/theme/theme-context';
import style from './style.module.css';

const STATUS_COLOR_MAP = {
  active: '#52c41a',
  idle: '#faad14',
};

export default function ChatPage() {
  const [openInfo, setOpenInfo] = React.useState(false);
  const { theme: currentTheme } = useTheme();
  const {
    token: { colorBgElevated },
  } = theme.useToken();
  const onClose = () => {
    setOpenInfo(false);
  };
  return (
    <Card
      bodyStyle={{
        height: 'calc(100vh - 200px)',
      }}
    >
      <Row style={{ height: '100%', flexFlow: 'row nowrap' }} gutter={16}>
        <Col
          flex="300px"
          style={{
            borderRight: '1px solid #efefef',
            height: '100%',
            overflowY: 'scroll',
          }}
        >
          <Input.Search
            style={{ width: '100%', marginBottom: 16 }}
            placeholder="Search or start a new chat"
          />
          <Table
            showHeader={false}
            pagination={false}
            size="small"
            rowKey={'id'}
            rowClassName={(_, index) => {
              if (index === 0) {
                return 'selected-person';
              }
            }}
            columns={[
              {
                key: 'No',
                dataIndex: 'id',
                render: (id, { status }) => (
                  <Badge
                    dot
                    offset={[-3, 30]}
                    styles={{
                      indicator: {
                        width: '8px',
                        height: '8px',
                      },
                    }}
                    text=""
                    color={STATUS_COLOR_MAP[status]}
                  >
                    <Avatar
                      size="large"
                      src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${id}`}
                      style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}
                    >
                      U
                    </Avatar>
                  </Badge>
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
                status: 'active',
              },
              {
                id: 2,
                name: 'Alexander Wang',
                status: 'idle',
              },
              {
                id: 3,
                name: 'Bob Vup',
                status: 'idle',
              },
            ]}
          />
        </Col>
        <Col
          flex="auto"
          style={{
            height: '100%',
          }}
        >
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
                <Badge
                  dot
                  offset={[-3, 30]}
                  styles={{
                    indicator: {
                      width: '8px',
                      height: '8px',
                    },
                  }}
                  text=""
                  color={'#52c41a'}
                >
                  <Avatar
                    size="large"
                    src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
                  />
                </Badge>
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
            <Flex
              className="chat-msg"
              align="end"
              vertical
              gap="small"
              style={{ overflowY: 'scroll' }}
            >
              <Flex
                justify="left"
                className={style.chatBox}
                style={{ width: '100%' }}
              >
                <Avatar
                  size="small"
                  src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
                  style={{ marginRight: 3 }}
                />
                <Space
                  direction="vertical"
                  styles={{
                    item: {
                      display: 'inline-block',
                      backgroundColor:
                        currentTheme === 'light' ? '#efefef' : '#454545',
                      padding: '4px 16px',
                      borderRadius: 12,
                      maxWidth: 500,
                    },
                  }}
                >
                  <div className={style.chatMsg}>
                    <Typography.Text className={style.chatContent}>
                      Cras quis urna urna. Proin dignissim turpis vel ex ornare
                      vestibulum. Curabitur sed pellentesque arcu, sit amet
                      placerat eros. Nulla quis interdum tellus. Donec semper
                      auctor tortor, et egestas odio vestibulum et. Quisque eget
                      felis mauris. Donec vel magna porttitor, bibendum mi vel,
                      porttitor sapien.
                    </Typography.Text>
                    <Typography.Text
                      type="secondary"
                      className={style.chatTimestamp}
                    >
                      2 min ago
                    </Typography.Text>
                  </div>
                </Space>
              </Flex>
              <Flex
                justify="right"
                className={style.chatBox}
                style={{ width: '100%' }}
              >
                <Space
                  direction="vertical"
                  styles={{
                    item: {
                      display: 'inline-block',
                      backgroundColor: 'var(--color-primary)',
                      padding: '4px 16px',
                      borderRadius: 12,
                      maxWidth: 500,
                    },
                  }}
                >
                  <div className={style.chatMsg}>
                    <Typography.Text
                      style={{ color: '#fff' }}
                      className={style.chatContent}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography.Text>
                    <Typography.Text
                      type="secondary"
                      className={style.chatTimestamp}
                      style={{ color: 'rgb(255 255 255 / 75%)' }}
                    >
                      2 min ago
                    </Typography.Text>
                  </div>
                </Space>
                <Avatar
                  size="small"
                  src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2"
                  style={{ marginLeft: 3 }}
                />
              </Flex>
              <Flex
                justify="right"
                className={style.chatBox}
                style={{ width: '100%' }}
              >
                <Space
                  direction="vertical"
                  styles={{
                    item: {
                      display: 'inline-block',
                      backgroundColor: 'var(--color-primary)',
                      padding: '4px 16px',
                      borderRadius: 12,
                      maxWidth: 500,
                    },
                  }}
                >
                  <div className={style.chatMsg}>
                    <Typography.Text
                      style={{ color: '#fff' }}
                      className={style.chatContent}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography.Text>
                    <Typography.Text
                      type="secondary"
                      className={style.chatTimestamp}
                      style={{ color: 'rgb(255 255 255 / 75%)' }}
                    >
                      2 min ago
                    </Typography.Text>
                  </div>
                </Space>
                <Avatar
                  size="small"
                  src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2"
                  style={{ marginLeft: 3 }}
                />
              </Flex>
              <Flex
                justify="left"
                className={style.chatBox}
                style={{ width: '100%' }}
              >
                <Avatar
                  size="small"
                  src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
                  style={{ marginRight: 3 }}
                />
                <Space
                  direction="vertical"
                  styles={{
                    item: {
                      display: 'inline-block',
                      backgroundColor:
                        currentTheme === 'light' ? '#efefef' : '#454545',
                      padding: '4px 16px',
                      borderRadius: 12,
                      maxWidth: 500,
                    },
                  }}
                >
                  <div className={style.chatMsg}>
                    <Typography.Text className={style.chatContent}>
                      Sed fringilla metus non lectus tincidunt tincidunt.
                    </Typography.Text>
                    <Typography.Text
                      type="secondary"
                      className={style.chatTimestamp}
                    >
                      2 min ago
                    </Typography.Text>
                  </div>
                </Space>
              </Flex>
              <Flex
                justify="left"
                className={style.chatBox}
                style={{ width: '100%' }}
              >
                <Avatar
                  size="small"
                  src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
                  style={{ marginRight: 3 }}
                />
                <Space
                  direction="vertical"
                  styles={{
                    item: {
                      display: 'inline-block',
                      backgroundColor:
                        currentTheme === 'light' ? '#efefef' : '#454545',
                      padding: '4px 16px',
                      borderRadius: 12,
                      maxWidth: 500,
                    },
                  }}
                >
                  <div className={style.chatMsg}>
                    <Typography.Text className={style.chatContent}>
                      Sed fringilla metus non lectus tincidunt tincidunt.
                    </Typography.Text>
                    <Typography.Text
                      type="secondary"
                      className={style.chatTimestamp}
                    >
                      2 min ago
                    </Typography.Text>
                  </div>
                </Space>
              </Flex>
              <Flex
                justify="left"
                className={style.chatBox}
                style={{ width: '100%' }}
              >
                <Avatar
                  size="small"
                  src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
                  style={{ marginRight: 3 }}
                />
                <Space
                  direction="vertical"
                  styles={{
                    item: {
                      display: 'inline-block',
                      backgroundColor:
                        currentTheme === 'light' ? '#efefef' : '#454545',
                      padding: '4px 16px',
                      borderRadius: 12,
                      maxWidth: 500,
                    },
                  }}
                >
                  <div className={style.chatMsg}>
                    <Typography.Text className={style.chatContent}>
                      Sed fringilla metus non lectus tincidunt tincidunt.
                    </Typography.Text>
                    <Typography.Text
                      type="secondary"
                      className={style.chatTimestamp}
                    >
                      2 min ago
                    </Typography.Text>
                  </div>
                </Space>
              </Flex>
              <Flex
                justify="left"
                className={style.chatBox}
                style={{ width: '100%' }}
              >
                <Avatar
                  size="small"
                  src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
                  style={{ marginRight: 3 }}
                />
                <Space
                  direction="vertical"
                  styles={{
                    item: {
                      display: 'inline-block',
                      backgroundColor:
                        currentTheme === 'light' ? '#efefef' : '#454545',
                      padding: '4px 16px',
                      borderRadius: 12,
                      maxWidth: 500,
                    },
                  }}
                >
                  <div className={style.chatMsg}>
                    <Typography.Text className={style.chatContent}>
                      Cras quis urna urna. Proin dignissim turpis vel ex ornare
                      vestibulum. Curabitur sed pellentesque arcu, sit amet
                      placerat eros. Nulla quis interdum tellus. Donec semper
                      auctor tortor, et egestas odio vestibulum et. Quisque eget
                      felis mauris. Donec vel magna porttitor, bibendum mi vel,
                      porttitor sapien.
                    </Typography.Text>
                    <Typography.Text
                      type="secondary"
                      className={style.chatTimestamp}
                    >
                      2 min ago
                    </Typography.Text>
                  </div>
                </Space>
              </Flex>
            </Flex>
            <Flex
              className="chat-box"
              align="center"
              style={{ backgroundColor: colorBgElevated }}
            >
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
        <Drawer
          placement="right"
          closable={true}
          onClose={onClose}
          open={openInfo}
          getContainer={false}
          mask={false}
        >
          <Flex justify="center">
            <Space
              direction="vertical"
              styles={{ item: { textAlign: 'center' } }}
            >
              <Badge
                dot
                offset={[-3, 54]}
                styles={{
                  indicator: {
                    width: '12px',
                    height: '12px',
                  },
                }}
                text=""
                color={'#52c41a'}
              >
                <Avatar
                  size={64}
                  src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
                />
              </Badge>
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
                      style={{ padding: 4 }}
                    />
                    <Image
                      alt="2"
                      width={90}
                      src="/photos/pexels-tifeclicks-16001703.jpg"
                      style={{ padding: 4 }}
                    />
                    <Image
                      alt="3"
                      width={90}
                      src="/photos/pexels-line-knipst-18512532.jpg"
                      style={{ padding: 4 }}
                    />
                    <Image
                      alt="4"
                      width={90}
                      src="/photos/pexels-david-9782305.jpg"
                      style={{ padding: 4 }}
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
        </Drawer>
      </Row>
    </Card>
  );
}
