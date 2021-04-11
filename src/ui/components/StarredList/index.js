import React from 'react';
import {Table} from 'antd';

import SimpleCard from 'ui/components/SimpleCard';

import strings from 'infra/resources/strings';

const columnsStarreds = [
  {
    title: strings.users.name,
    dataIndex: 'name',
    key: 'name',
    render: (value) => <>{value}</>,
  },
  {
    title: strings.users.watchers,
    dataIndex: 'watchers',
    key: 'watchers',
    render: (value) => <>{value}</>,
  },
  {
    title: strings.users.forks,
    dataIndex: 'forks',
    key: 'forks',
    render: (value) => <>{value}</>,
  },
  {
    title: strings.users.created_at,
    dataIndex: 'created_at',
    key: 'created_at',
    render: (value) => <>{value?.substring(0, 10)}</>,
  },
  {
    title: strings.users.updated_at,
    dataIndex: 'updated_at',
    key: 'updated_at',
    render: (value) => <>{value?.substring(0, 10)}</>,
  },
];

function StarredList({starreds}) {
  return (
    <SimpleCard>
      <h2>{strings.users.starreds}</h2>
      <Table columns={columnsStarreds} dataSource={starreds} />
    </SimpleCard>
  );
}

export default StarredList;
