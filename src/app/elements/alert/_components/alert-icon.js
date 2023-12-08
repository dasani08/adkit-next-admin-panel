'use client';
import { Card, Alert, Space } from 'antd';
import {
  CheckCircleOutlined,
  InfoCircleOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons';

export default function AlertWithIcon() {
  return (
    <Card title={'ALERT WITH ICON'} style={{ marginBottom: 16 }}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Alert
          message="Success Tips"
          type="success"
          showIcon
          icon={<CheckCircleOutlined style={{ color: '#fff' }} />}
        />
        <Alert
          message="Informational Notes"
          type="info"
          showIcon
          icon={<InfoCircleOutlined style={{ color: '#fff' }} />}
        />
        <Alert
          message="Warning"
          type="warning"
          showIcon
          closable
          icon={<InfoCircleOutlined style={{ color: '#fff' }} />}
        />
        <Alert
          message="Error"
          type="error"
          showIcon
          icon={<CloseCircleOutlined style={{ color: '#fff' }} />}
        />
        <Alert
          message="Success Tips"
          description="Detailed description and advice about successful copywriting."
          type="success"
          icon={<CheckCircleOutlined style={{ color: '#fff' }} />}
          showIcon
        />
        <Alert
          message="Informational Notes"
          description="Additional description and information about copywriting."
          type="info"
          icon={<InfoCircleOutlined style={{ color: '#fff' }} />}
          showIcon
        />
        <Alert
          message="Warning"
          description="This is a warning notice about copywriting."
          type="warning"
          showIcon
          icon={<InfoCircleOutlined style={{ color: '#fff' }} />}
          closable
        />
        <Alert
          message="Error"
          description="This is an error message about copywriting."
          type="error"
          icon={<CloseCircleOutlined style={{ color: '#fff' }} />}
          showIcon
        />
      </Space>
    </Card>
  );
}
