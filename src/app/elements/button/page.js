import Link from 'next/link';
import { Row, Col } from 'antd';

import PageContent from '@/components/page-content';
import DefaultButton from './_components/type';
import DisabledButton from './_components/disabled';
import IconButton from './_components/icon';
import LoadingButton from './_components/loading';

export default function Page() {
  return (
    <PageContent
      breadcrumbs={[
        {
          title: <Link href={'/dashboard'}>DASHBOARD</Link>,
        },
        {
          title: 'SETTINGS',
        },
      ]}
    >
      <Row>
        <Col span={24}>
          <DefaultButton />
          <DisabledButton />
          <IconButton />
          <LoadingButton />
        </Col>
      </Row>
    </PageContent>
  );
}
