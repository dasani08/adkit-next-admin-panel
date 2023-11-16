import { headers } from 'next/headers';

export async function GET(request) {
  const headersList = headers();
  const referer = headersList.get('referer');

  return Response.json(
    {
      data: [
        {
          id: 1,
          channel: 'Direct Sales',
          draft: 11,
          confirmed: 140,
          packed: 8,
          shipped: 6,
          invoiced: 144,
        },
        {
          id: 2,
          channel: 'Shopify',
          draft: 15,
          confirmed: 0,
          packed: 0,
          shipped: 0,
          invoiced: 1,
        },
      ],
      meta: {
        itemCount: 2,
      },
    },
    {
      status: 200,
      headers: { referer: referer },
    },
  );
}
