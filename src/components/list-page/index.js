import React from 'react';
import { omit } from 'lodash';

import Table from '../table';

import { dispatchService } from '@/lib/utils/service';

const ListPage = ({
  columns,
  filter = {},
  sortedInfo = {},
  fetchApi,
  ...rest
}) => {
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);
  const [meta, setMeta] = React.useState({});
  const [sorter, setSorter] = React.useState(sortedInfo);
  const fetchApiAction = () => {
    if (!fetchApi) return;
    return dispatchService(
      () => {
        let _page = page;
        if (filter.resetPage) {
          _page = 1;
          filter.resetPage = false;
        }
        return fetchApi({
          orderBy: sorter.columnKey,
          order: sorter.order,
          page: _page,
          take: pageSize,
          ...omit(filter, ['resetPage', 'page']),
        });
      },
      (_d, _m) => {
        setData(_d);
        setMeta(_m);
      },
    );
  };
  const onChange = ({ current, pageSize: ps }, ft, _sorter) => {
    setPage(current);
    setPageSize(ps);
    if (_sorter.order) {
      setSorter(_sorter);
    } else {
      // Reset sorted info
      setSorter();
    }
  };

  React.useEffect(fetchApiAction, [fetchApi]);

  return (
    <Table
      rowKey="id"
      columns={columns}
      dataSource={data}
      pagination={{
        pageSize: 10,
        current: meta?.page ?? 1,
        simple: true,
        total: meta?.itemCount ?? 0,
      }}
      onChange={onChange}
      {...rest}
    />
  );
};

export default ListPage;
