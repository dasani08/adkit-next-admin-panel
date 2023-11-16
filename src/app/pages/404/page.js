import { Result, Button } from 'antd';

export default function Error() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button href="/dashboard" type="primary">
          Back Home
        </Button>
      }
    />
  );
}
