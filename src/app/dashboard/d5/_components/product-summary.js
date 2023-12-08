'use client';
import { Card, List, Flex } from 'antd';

export default function ProductSummary() {
  const data = [
    {
      group: 'Low stock items',
      value: 12,
    },
    {
      group: 'All item group',
      value: 7,
    },
    {
      group: 'All items',
      value: 99,
    },
  ];
  return (
    <Card
      style={{
        margin: '16px 0',
      }}
      title="PRODUCT SUMMARY"
    >
      <List
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Flex
              style={{ width: '100%' }}
              justify="space-between"
              align="center"
            >
              <span>{item.group}</span>
              <span>{item.value}</span>
            </Flex>
          </List.Item>
        )}
      />
    </Card>
  );
}
