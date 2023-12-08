import Link from 'next/link';
import { Row, Col } from 'antd';

import PageContent from '@/components/page-content';
import AvatarSize from './_components/size';
import AvatarType from './_components/type';
import AvatarGroup from './_components/group';
import AvatarStatus from './_components/status';

export default function Page() {
  return (
    <PageContent
      breadcrumbs={[
        {
          title: <Link href={'/dashboard'}>DASHBOARD</Link>,
        },
        {
          title: 'AVATAR',
        },
      ]}
    >
      <Row>
        <Col span={24}>
          <AvatarSize />
          <AvatarType />
          <AvatarGroup />
          <AvatarStatus />
        </Col>
      </Row>
    </PageContent>
  );
}
