'use client';
import React from 'react';
import { Modal } from 'antd';
import { useRouter } from 'next/navigation';

export default function RouteModal({ children, ...rest }) {
  const router = useRouter();

  const onDismiss = React.useCallback(() => {
    router.back();
  }, [router]);

  return (
    <Modal open={true} onCancel={onDismiss} destroyOnClose={true} {...rest}>
      {children}
    </Modal>
  );
}
