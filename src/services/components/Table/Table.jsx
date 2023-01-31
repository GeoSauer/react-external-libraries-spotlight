import MUIDataTable from 'mui-datatables';

export default function Table() {
  const users = require('../../../users.json');
  const columns = [
    {
      name: 'first_name',
      label: 'First',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'last_name',
      label: 'Last',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'email',
      label: 'Email',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'favorite_color',
      label: 'Clearance',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'image',
      label: 'Avartar',
      options: {
        filter: true,
        sort: false,
      },
    },
  ];

  const options = {
    filterType: 'checkbox',
  };

  return <MUIDataTable title={'Employee List'} data={users} columns={columns} options={options} />;
}
