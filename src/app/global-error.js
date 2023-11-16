'use client';
import { Result, Button } from 'antd';

export default function Error({ error }) {
  return (
    <Result
      status="warning"
      title={`There are some problems with your operation: ${error.message}`}
      extra={
        <Button type="primary" key="console">
          Go Console
        </Button>
      }
    />
  );
}
