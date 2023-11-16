import { headers } from 'next/headers';

export async function GET(request) {
  const headersList = headers();
  const referer = headersList.get('referer');

  return Response.json(
    {
      data: [
        {
          id: 1,
          roleName: 'User',
          description: 'Users can manage the content they have created',
          noOfUser: 1,
        },
        {
          id: 2,
          roleName: 'Staff',
          description: 'Staffs can manage and publish contents',
          noOfUser: 3,
        },
        {
          id: 3,
          roleName: 'Super Admin',
          description: 'Super Admins can access and manage all features',
          noOfUser: 1,
        },
      ],
      meta: {
        itemCount: 12,
        page: 1,
      },
    },
    {
      status: 200,
      headers: { referer: referer },
    },
  );
}
