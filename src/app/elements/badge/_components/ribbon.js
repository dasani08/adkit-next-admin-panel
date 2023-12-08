'use client';
import { Card, Space, Badge, Row, Col } from 'antd';

export default function BadgeRibbon() {
  return (
    <Card title="Basic Usage" style={{ marginBottom: 16 }}>
      <Row>
        <Col span={12}>
          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <Badge.Ribbon text="Hippies">
              <Card title="Pushes open the window" size="small">
                and raises the spyglass.
              </Card>
            </Badge.Ribbon>
            <Badge.Ribbon text="Hippies" color="pink">
              <Card title="Pushes open the window" size="small">
                and raises the spyglass.
              </Card>
            </Badge.Ribbon>
            <Badge.Ribbon text="Hippies" color="red">
              <Card title="Pushes open the window" size="small">
                and raises the spyglass.
              </Card>
            </Badge.Ribbon>
            <Badge.Ribbon text="Hippies" color="cyan">
              <Card title="Pushes open the window" size="small">
                and raises the spyglass.
              </Card>
            </Badge.Ribbon>
            <Badge.Ribbon text="Hippies" color="green">
              <Card title="Pushes open the window" size="small">
                and raises the spyglass.
              </Card>
            </Badge.Ribbon>
            <Badge.Ribbon text="Hippies" color="purple">
              <Card title="Pushes open the window" size="small">
                and raises the spyglass.
              </Card>
            </Badge.Ribbon>
            <Badge.Ribbon text="Hippies" color="volcano">
              <Card title="Pushes open the window" size="small">
                and raises the spyglass.
              </Card>
            </Badge.Ribbon>
            <Badge.Ribbon text="Hippies" color="magenta">
              <Card title="Pushes open the window" size="small">
                and raises the spyglass.
              </Card>
            </Badge.Ribbon>
          </Space>
        </Col>
      </Row>
    </Card>
  );
}
