import { headers } from 'next/headers';

export async function GET(request) {
  const headersList = headers();
  const referer = headersList.get('referer');

  return Response.json(
    {
      data: [
        {
          id: 1,
          saleOrderNo: 'SO-00001',
          referenceNo: '#0001',
          customerName: 'MTL Group',
          salePerson: 'Joe A.',
          orderedDate: '2023-11-01',
          total: 450,
        },
        {
          id: 2,
          saleOrderNo: 'SO-00002',
          referenceNo: '#0002',
          customerName: 'MTL Group',
          salePerson: 'Joe A.',
          orderedDate: '2023-11-01',
          total: 679,
        },
        {
          customerName: 'Wade Valentine',
          salePerson: 'Hedley Alford',
          id: 'A0D6D30D-2ECD-26DC-BD78-0226767D15C7',
          orderedDate: 'Oct 21, 2023',
          saleOrderNo: 'SO-52769',
          referenceNo: '#3176',
          total: 169,
        },
        {
          customerName: 'Haviva Hunter',
          salePerson: 'Shad Hardin',
          id: '1CB1750D-7341-5877-025D-C080AC4ECD41',
          orderedDate: 'Mar 24, 2023',
          saleOrderNo: 'SO-22327',
          referenceNo: '#1396',
          total: 138,
        },
        {
          customerName: 'Katell Flores',
          salePerson: 'Camille Beck',
          id: 'EA1A9475-6455-A462-5ECB-3B4995E2D12B',
          orderedDate: 'Sep 3, 2024',
          saleOrderNo: 'SO-77301',
          referenceNo: '#8510',
          total: 118,
        },
        {
          customerName: 'Byron Hopper',
          salePerson: 'Fredericka Peters',
          id: '9ABBDE3E-9198-B5A5-E743-C529BAE266EF',
          orderedDate: 'Mar 23, 2023',
          saleOrderNo: 'SO-14516',
          referenceNo: '#6012',
          total: 13,
        },
        {
          customerName: 'Blythe Prince',
          salePerson: 'Xanthus Newton',
          id: '17792627-EA5E-8FD2-46A4-9D070FAA99A4',
          orderedDate: 'Mar 27, 2024',
          saleOrderNo: 'SO-75371',
          referenceNo: '#7015',
          total: 82,
        },
        {
          customerName: 'Karen Robinson',
          salePerson: 'Yoko Cooper',
          id: '81B91B81-6262-6122-1271-5CD74615B742',
          orderedDate: 'Feb 21, 2024',
          saleOrderNo: 'SO-53257',
          referenceNo: '#7559',
          total: 174,
        },
        {
          customerName: 'Abigail Dalton',
          salePerson: 'Orlando Le',
          id: 'CDFD6425-9D8E-5218-6354-1B2EE2B94D3B',
          orderedDate: 'Sep 25, 2023',
          saleOrderNo: 'SO-44616',
          referenceNo: '#8014',
          total: 35,
        },
        {
          customerName: 'Damian Bonner',
          salePerson: 'Alice Bates',
          id: '833CA44D-60F2-7B32-BC23-1BF42820C179',
          orderedDate: 'Jul 11, 2023',
          saleOrderNo: 'SO-27864',
          referenceNo: '#6350',
          total: 57,
        },
        {
          customerName: 'Yolanda William',
          salePerson: 'Beatrice Hill',
          id: 'D61782C7-28B9-AD22-2B35-56D323FCAF4A',
          orderedDate: 'Aug 22, 2023',
          saleOrderNo: 'SO-20831',
          referenceNo: '#6398',
          total: 53,
        },
        {
          customerName: 'Nyssa Barton',
          salePerson: 'Hyatt Dodson',
          id: 'D37C6231-E3C9-01FF-6B3C-A3C7ED154166',
          orderedDate: 'Mar 2, 2023',
          saleOrderNo: 'SO-16477',
          referenceNo: '#2617',
          total: 87,
        },
      ],
      meta: {
        itemCount: 12,
      },
    },
    {
      status: 200,
      headers: { referer: referer },
    },
  );
}
