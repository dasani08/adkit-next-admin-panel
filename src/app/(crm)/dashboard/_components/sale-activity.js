import { Row, Col, Card, Statistic } from 'antd';
import {
  FileProtectOutlined,
  CarOutlined,
  SendOutlined,
  PayCircleOutlined,
} from '@ant-design/icons';

export default function SaleActivity() {
  return (
    <Row gutter={16}>
      <Col span={6} md={6} sm={12} xs={24}>
        <Card bordered={false} style={{ marginTop: 8 }}>
          <Statistic
            title="To be packed"
            value={960}
            valueStyle={{ color: '#108ee9' }}
            prefix={<FileProtectOutlined />}
          />
        </Card>
      </Col>
      <Col span={6} md={6} sm={12} xs={24}>
        <Card bordered={false} style={{ marginTop: 8 }}>
          <Statistic
            title="To be shipped"
            value={1212}
            valueStyle={{ color: '#2db7f5' }}
            prefix={<CarOutlined />}
          />
        </Card>
      </Col>
      <Col span={6} md={6} sm={12} xs={24}>
        <Card bordered={false} style={{ marginTop: 8 }}>
          <Statistic
            title="To be delivered"
            value={500}
            valueStyle={{ color: '#f50' }}
            prefix={<SendOutlined />}
          />
        </Card>
      </Col>
      <Col span={6} md={6} sm={12} xs={24}>
        <Card bordered={false} style={{ marginTop: 8 }}>
          <Statistic
            title="To be invoiced"
            value={99}
            valueStyle={{ color: '#3f8600' }}
            prefix={<PayCircleOutlined />}
          />
        </Card>
      </Col>
    </Row>
  );
}
