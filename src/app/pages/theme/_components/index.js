'use client';
import React from 'react';
import {
  Card,
  Row,
  Col,
  Button,
  Space,
  Alert,
  ConfigProvider,
  Slider,
  ColorPicker,
} from 'antd';

export default function OrganizationProfile() {
  const [borderRadius, setBorderRadius] = React.useState(0);
  const [fontSize, setFontSize] = React.useState(14);
  const [colorPrimary, setColorPrimary] = React.useState('#00b96b');
  const [colorLink, setColorLink] = React.useState('#1677ff');

  return (
    <Card title="THEME SETTING">
      <Alert
        message="Ant Design allows you to fully customize your UI, including primary color, component size, border, etc."
        type="warning"
        action={
          <Button
            type="primary"
            href="https://ant.design/docs/react/customize-theme"
          >
            View detail on Ant Design
          </Button>
        }
      />
      <Card title="BUTTON" style={{ marginTop: 16 }}>
        <Alert
          message="Full document can be found on https://ant.design/components/button#design-token"
          type="info"
          style={{ marginBottom: 16 }}
        />
        <Row gutter={16}>
          <Col span={12}>
            <Space style={{ width: '100%' }} direction="vertical">
              <b>Primary Color</b>
              <ColorPicker
                onChange={(_, hex) => setColorPrimary(hex)}
                size="small"
                defaultValue={colorPrimary}
                showText
              />
            </Space>
            <Space style={{ width: '100%' }} direction="vertical">
              <b>Color Link</b>
              <ColorPicker
                onChange={(_, hex) => setColorLink(hex)}
                size="small"
                defaultValue={colorLink}
                showText
              />
            </Space>
            <Space style={{ width: '100%', marginTop: 8 }} direction="vertical">
              <b>Border Radius</b>
              <Slider
                min={1}
                max={20}
                value={borderRadius}
                onChange={setBorderRadius}
              />
            </Space>
            <Space style={{ width: '100%', marginTop: 8 }} direction="vertical">
              <b>Font Size</b>
              <Slider
                min={9}
                max={32}
                value={fontSize}
                onChange={setFontSize}
              />
            </Space>
          </Col>
          <Col span={12}>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary,
                  borderRadius,
                  colorLink,
                  fontSize,
                },
              }}
            >
              <Space wrap={true}>
                <Button>Default</Button>
                <Button type="primary">Primary</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="text">Text</Button>
                <Button type="link">Link</Button>
                <Button danger>Danger Default</Button>
                <Button ghost>Ghost</Button>
              </Space>
            </ConfigProvider>
          </Col>
        </Row>
      </Card>
    </Card>
  );
}
