'use client';
import React from 'react';
import { Breadcrumb } from 'antd';

export default function PageContent({ title, children, breadcrumbs }) {
  return (
    <div>
      <Breadcrumb
        style={{
          margin: '16px 0',
        }}
        items={breadcrumbs ? breadcrumbs : [{ title }]}
      />
      {children}
    </div>
  );
}
