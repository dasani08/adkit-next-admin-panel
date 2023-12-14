'use client';
import { Flex, Typography, Row, Col, Space } from 'antd';
import {
  FieldTimeOutlined,
  FileDoneOutlined,
  FundProjectionScreenOutlined,
  SmileOutlined,
} from '@ant-design/icons';

export default function Header() {
  return (
    <Flex justify="center" align="center" vertical style={{ height: 300 }}>
      <Typography.Title level={1} style={{ color: '#FFF' }}>
        Sensational software, Sensible price
      </Typography.Title>
      <Row gutter={[64, 16]} style={{ marginTop: 32 }}>
        <Col lg={6} md={12} sm={12} xs={12}>
          <Space align="top">
            <FieldTimeOutlined style={{ fontSize: 42, color: '#fff' }} />
            <Flex vertical>
              <Typography.Text style={{ color: '#fff', fontSize: 18 }}>
                Free trial
              </Typography.Text>
              <Typography.Text style={{ color: '#fffc', fontWeight: 400 }}>
                No credit card required
              </Typography.Text>
            </Flex>
          </Space>
        </Col>
        <Col lg={6} md={12} sm={12} xs={12}>
          <Space align="top">
            <FileDoneOutlined style={{ fontSize: 42, color: '#fff' }} />
            <Flex vertical>
              <Typography.Text style={{ color: '#fff', fontSize: 18 }}>
                Flexible contracts
              </Typography.Text>
              <Typography.Text style={{ color: '#fffc', fontWeight: 400 }}>
                Straightforward pricing, no lock-ins
              </Typography.Text>
            </Flex>
          </Space>
        </Col>
        <Col lg={6} md={12} sm={12} xs={12}>
          <Space align="top">
            <FundProjectionScreenOutlined
              style={{ fontSize: 42, color: '#fff' }}
            />
            <Flex vertical>
              <Typography.Text style={{ color: '#fff', fontSize: 18 }}>
                Minimal learning curve
              </Typography.Text>
              <Typography.Text style={{ color: '#fffc', fontWeight: 400 }}>
                50% faster implementation
              </Typography.Text>
            </Flex>
          </Space>
        </Col>
        <Col lg={6} md={12} sm={12} xs={12}>
          <Space align="top">
            <SmileOutlined style={{ fontSize: 42, color: '#fff' }} />
            <Flex vertical>
              <Typography.Text style={{ color: '#fff', fontSize: 18 }}>
                Intuitive UX
              </Typography.Text>
              <Typography.Text style={{ color: '#fffc', fontWeight: 400 }}>
                Better adoption, easier training
              </Typography.Text>
            </Flex>
          </Space>
        </Col>
      </Row>
    </Flex>
  );
}
