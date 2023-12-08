'use client';
import React from 'react';
import { Card, Divider, Space, Typography, Button, Tooltip } from 'antd';
import {
  StarFilled,
  FieldTimeOutlined,
  PhoneOutlined,
  NodeIndexOutlined,
  GlobalOutlined,
  HeartOutlined,
  CopyOutlined,
} from '@ant-design/icons';

export default function StoreInfo({ store }) {
  return (
    <div className={'leaflet-top leaflet-right'}>
      <div className="leaflet-control leaflet-bar">
        <Card
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <Tooltip title="Website" key={'Website'}>
              <Button shape="circle" icon={<GlobalOutlined />} />
            </Tooltip>,
            <Tooltip title="Make a call" key="call">
              <Button shape="circle" icon={<PhoneOutlined />} />
            </Tooltip>,
            <Tooltip title="Direction" key="direction">
              <Button shape="circle" icon={<NodeIndexOutlined />} />
            </Tooltip>,
            <Tooltip title="Save" key={'Save'}>
              <Button shape="circle" icon={<HeartOutlined />} />
            </Tooltip>,
            <Tooltip title="Copy address" key={'Copy'}>
              <Button shape="circle" icon={<CopyOutlined />} />
            </Tooltip>,
          ]}
        >
          <Card.Meta
            title={store.name}
            description={
              <Space direction="vertical" style={{ width: '100%' }}>
                <Typography.Text>{store.address}</Typography.Text>
                <Space split={<Divider type="vertical" />}>
                  <Typography.Text>
                    {store.rate} <StarFilled style={{ color: '#fadb14' }} />
                  </Typography.Text>
                  <Typography.Text type="danger">
                    <FieldTimeOutlined /> Closed
                  </Typography.Text>
                </Space>
                <table>
                  <tr>
                    <td>Monday</td>
                    <td> 6:30 a.m. - 6 p.m.</td>
                  </tr>
                  <tr>
                    <td>Tuesday</td>
                    <td>6:30 a.m. - 6 p.m.</td>
                  </tr>
                  <tr>
                    <td>Wednesday</td>
                    <td>6:30 a.m. - 6 p.m.</td>
                  </tr>
                  <tr>
                    <td>Thursday</td>
                    <td>6:30 a.m. - 6 p.m.</td>
                  </tr>
                  <tr>
                    <td>Friday</td>
                    <td>6:30 a.m. - 6 p.m.</td>
                  </tr>
                  <tr>
                    <td>Saturday</td>
                    <td>Closed</td>
                  </tr>
                  <tr>
                    <td>Sunday</td>
                    <td>Closed</td>
                  </tr>
                </table>
                {/* <Flex justify="space-between">
                  <Tooltip title="Website">
                    <Button shape="circle" icon={<GlobalOutlined />} />
                  </Tooltip>
                  <Tooltip title="Make a call">
                    <Button shape="circle" icon={<PhoneOutlined />} />
                  </Tooltip>
                  <Tooltip title="Direction">
                    <Button shape="circle" icon={<NodeIndexOutlined />} />
                  </Tooltip>
                  <Tooltip title="Save">
                    <Button shape="circle" icon={<HeartOutlined />} />
                  </Tooltip>
                  <Tooltip title="Copy address">
                    <Button shape="circle" icon={<CopyOutlined />} />
                  </Tooltip>
                </Flex> */}
              </Space>
            }
          />
        </Card>
      </div>
    </div>
  );
}
