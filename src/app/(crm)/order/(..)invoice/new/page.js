import React from 'react';

import RouteModal from '@/components/route-modal';
import NewInvoiceForm from '@/components/shared/NewInvoiceForm';

export default function NewCustomerModal() {
  return (
    <RouteModal
      title="NEW INVOICE"
      width={1000}
      cancelText="CANCEL"
      okText="SAVE & CLOSE"
    >
      <NewInvoiceForm />
    </RouteModal>
  );
}
