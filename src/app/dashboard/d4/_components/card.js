'use client';
import { Children } from 'react';
import { Flex, Card, Typography } from 'antd';

import style from './card.module.css';

export default function StatCard({
  title,
  description,
  value,
  valueColor,
  children,
  height,
  ...rest
}) {
  return (
    <Card
      bordered={false}
      bodyStyle={{ paddingTop: 16, height }}
      headStyle={{ borderBottom: 'none' }}
    >
      <Flex justify="space-between" align="center" className={style.cardHead}>
        <div>
          <h3>{title}</h3>
          <Typography.Text type="secondary">{description}</Typography.Text>
        </div>
        {rest.extra}
      </Flex>
      {value !== undefined ? (
        <span style={{ color: valueColor }} className={style.cardValue}>
          {value}
        </span>
      ) : (
        children
      )}
    </Card>
  );
}
