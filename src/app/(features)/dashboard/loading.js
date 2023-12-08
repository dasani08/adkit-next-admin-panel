import { Spin, Flex } from 'antd';

export default function Loading() {
  return (
    <Flex
      style={{
        width: '100%',
        height: '100vh',
      }}
      justify="center"
      align="center"
    >
      <Spin />
    </Flex>
  );
}
