'use client';
import { Children } from 'react';
import { Card, Typography } from 'antd';

import style from './card.module.css';

export default function StatCard({
  title,
  description,
  value,
  valueColor,
  children,
  height,
}) {
  return (
    <Card
      bordered={false}
      bodyStyle={{ paddingTop: 16, height }}
      headStyle={{ borderBottom: 'none' }}
    >
      <div className={style.cardHead}>
        <h3>{title}</h3>
        <Typography.Text type="secondary">{description}</Typography.Text>
      </div>
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
