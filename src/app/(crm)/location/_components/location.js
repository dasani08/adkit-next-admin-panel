'use client';
import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { useMapEvents } from 'react-leaflet/hooks';
import { Card, Row, Col, Table, Space, Typography, Badge, Input } from 'antd';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

const StoreMarker = ({ loc, index, selected }) => {
  const icon = L.divIcon({
    iconSize: selected ? [50, 50] : [25, 25],
    className: selected ? `cus-marker-icon hover` : `cus-marker-icon`,
    html: selected ? index : '',
  });
  return <Marker position={loc} icon={icon} />;
};

export default function LocationPage() {
  const [hoveredStore, setHoveredStore] = React.useState(undefined);

  return (
    <Card
      bodyStyle={{
        height: 'calc(100vh - 200px)',
      }}
    >
      <Row style={{ height: '100%' }} gutter={16}>
        <Col flex={'300px'}>
          <Input.Search
            style={{ width: '100%', marginBottom: 16 }}
            placeholder="Search store location"
          />
          <Table
            showHeader={false}
            pagination={false}
            size="small"
            columns={[
              {
                key: 'No',
                dataIndex: 'index',
                render: (index) => <Badge count={index} />,
                width: 10,
              },
              {
                key: 'Name',
                render: (_, { index }) => (
                  <Space direction="vertical">
                    <Typography.Text strong>Store {index}</Typography.Text>
                    <Typography.Text>123 Ave Island Bay</Typography.Text>
                  </Space>
                ),
              },
            ]}
            dataSource={[
              {
                index: 1,
              },
              {
                index: 2,
              },
              {
                index: 3,
              },
            ]}
            rowKey={'index'}
            onRow={(record) => {
              return {
                onMouseEnter: () => {
                  setHoveredStore(record.index);
                }, // mouse enter row
                onMouseLeave: () => {
                  setHoveredStore(undefined);
                }, // mouse leave row
              };
            }}
          />
        </Col>
        <Col flex="auto">
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
            style={{
              width: '100%',
              height: '100%',
            }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <StoreMarker
              index={1}
              loc={[51.505, -0.09]}
              selected={hoveredStore === 1}
            />
            <StoreMarker
              index={2}
              loc={[51.481, -0.07]}
              selected={hoveredStore === 2}
            />
            <StoreMarker
              index={3}
              loc={[51.513, -0.16]}
              selected={hoveredStore === 3}
            />
          </MapContainer>
        </Col>
      </Row>
    </Card>
  );
}
