import { headers } from 'next/headers';

export async function GET(request) {
  const headersList = headers();
  const referer = headersList.get('referer');

  return Response.json(
    {
      data: [
        {
          id: 1,
          invoiceNo: 'INV-0001',
          invoicedDate: '20 Jul 2023',
        },
        {
          id: 2,
          invoiceNo: 'INV-0002',
          invoicedDate: '20 Jul 2023',
        },
        {
          id: 3,
          invoiceNo: 'INV-0003',
          invoicedDate: '20 Jul 2023',
        },
        {
          id: 4,
          invoiceNo: 'INV-0004',
          invoicedDate: '20 Jul 2023',
        },
        {
          id: 5,
          invoiceNo: 'INV-0005',
          invoicedDate: '20 Jul 2023',
        },
        {
          id: 6,
          invoiceNo: 'INV-0006',
          invoicedDate: '20 Jul 2023',
        },
        {
          id: 7,
          invoiceNo: 'INV-0007',
          invoicedDate: '20 Jul 2023',
        },
      ],
      meta: {
        itemCount: 7,
      },
    },
    {
      status: 200,
      headers: { referer: referer },
    },
  );
}
