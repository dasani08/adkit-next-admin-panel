'use client';
import { Card, Button, Typography } from 'antd';
import { ExportOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

import GeneralComponent from './general';
import LayoutComponent from './layout';
import NavigationComponent from './navigation';
import DataEntryComponent from './data-entry';
import DataDisplayComponent from './data-display';
import FeedbackComponent from './feedback';

export default function AntdComponent() {
  const router = useRouter();

  const gotoLink = (link) => {
    router.push(link);
  };

  return (
    <Card
      title={'Ant Design Components'}
      extra={
        <Button
          icon={<ExportOutlined />}
          href="https://ant.design/components/overview/"
          type="primary"
        >
          Official docs
        </Button>
      }
    >
      <Typography.Paragraph>
        <Typography.Text strong>Adkit</Typography.Text> is powered by{' '}
        <Typography.Text strong>Ant Design</Typography.Text> which has a large
        number of components. It offers components for layout, navigation, data
        entry, data display, and many more which to enrich your web
        applications.
      </Typography.Paragraph>
      <Typography.Paragraph>
        Surely, you would be loved to use Ant Components for your next project
        because it has everything you need to build an application.
      </Typography.Paragraph>
      <Typography.Title level={3}>Ant Design Components</Typography.Title>
      <GeneralComponent />
      <LayoutComponent />
      <NavigationComponent />
      <DataEntryComponent />
      <DataDisplayComponent />
      <FeedbackComponent />
    </Card>
  );
}
