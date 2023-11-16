import { Result, Button } from 'antd';

export default function Error() {
  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={
        <Button href="/dashboard" type="primary">
          Back Home
        </Button>
      }
    />
  );
}
