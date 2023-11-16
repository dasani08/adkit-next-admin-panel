import { Result, Button } from 'antd';

export default function Error() {
  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={
        <Button href="/dashboard" type="primary">
          Back Home
        </Button>
      }
    />
  );
}
