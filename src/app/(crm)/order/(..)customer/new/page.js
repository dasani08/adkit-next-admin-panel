import React from 'react';

import RouteModal from '@/components/route-modal';
import NewCustomerForm from '@/components/shared/NewCustomerForm';

export default function NewCustomerModal() {
  return (
    <RouteModal
      title="NEW CUSTOMER"
      width={860}
      cancelText="CANCEL"
      okText="SAVE & CLOSE"
    >
      <NewCustomerForm />
    </RouteModal>
  );
}
