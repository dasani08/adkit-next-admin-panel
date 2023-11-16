import { headers } from 'next/headers';

export async function GET(request) {
  const headersList = headers();
  const referer = headersList.get('referer');

  return Response.json(
    {
      data: [
        {
          firstName: 'Aiko',
          lastName: 'Blake',
          id: 'D5EB3156-5CE1-BA2E-02A5-EA68B6E88381',
          roles: 'User',
          name: 'Nulla',
          email: 'phasellus@hotmail.net',
        },
        {
          firstName: 'Phelan',
          lastName: 'Jenkins',
          id: '87D6B257-312E-2CBA-C345-7328623DA54D',
          roles: 'Staff',
          name: 'ridiculus',
          email: 'mollis@aol.com',
        },
        {
          firstName: 'Quamar',
          lastName: 'Burgess',
          id: '40D29FD1-D26A-9432-B857-09FC4D82351B',
          roles: 'Super Admin',
          name: 'nulla.',
          email: 'aliquam.arcu@outlook.ca',
        },
        {
          firstName: 'Melodie',
          lastName: 'Holder',
          id: '6C21EC69-178A-63DF-C089-7EB87ED8A19D',
          roles: 'Staff',
          name: 'rhoncus.',
          email: 'facilisis.lorem.tristique@hotmail.net',
        },
        {
          firstName: 'Nelle',
          lastName: 'Miranda',
          id: '48121228-D92F-DCE2-2CE2-422468C4C047',
          roles: 'User',
          name: 'lobortis',
          email: 'mauris.morbi@aol.edu',
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
