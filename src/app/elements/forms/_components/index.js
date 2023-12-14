'use client';
import { Card } from 'antd';

import NewItemForm from './item';
import NewUserForm from './user';
import NewSaleOrderForm from './sale-order';
import NewRoleForm from './role';

export default function SubPage() {
  return (
    <Card title={'FORMS'}>
      <NewItemForm />
      <NewUserForm />
      <NewRoleForm />
      <NewSaleOrderForm />
    </Card>
  );
}
