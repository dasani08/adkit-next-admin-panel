---
to: src/app/<%=name%>/_components/index.js
---
'use client';
import { Card, Tooltip, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

export default function SubPage() {
  return (
    <Card
      title={
        <Tooltip title="Back">
          <Button type="text" icon={<ArrowLeftOutlined />} />
        </Tooltip>
      }
    ></Card>
  );
}
