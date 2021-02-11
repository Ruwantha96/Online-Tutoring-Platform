import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';


const rows  = [
  {
    id: 1,
    Teacher: 'Ajanth Dissanayake',
    Subject: 'Combined Maths',
    Class: '2016 A/L',
    Month: 'July',
  },
  {
    id: 2,
    Teacher: 'Mahen Jecob',
    Subject: 'Physics',
    Class: '2016 A/L',
    Month: 'July',
  },
  {
    id: 3,
    Teacher: 'Manoj Pathiraja',
    Subject: 'Chemistry',
    Class: '2016 A/L',
    Month: 'July',
  },
  {
    id: 4,
    Teacher: 'Nadun Rajakaruna',
    Subject: 'Chemistry',
    Class: '2016 A/L',
    Month: 'July',
  },

 
];

export default function Subscriptions() {
  return (
    <div style={{ height: 480, maxWidth: 920 }}>
      <DataGrid
        columns={[
          { field: 'Teacher', type: 'string' , width: 250 ,},
          { field: 'Subject', type: 'string' , width:150},
          { field: 'Class', type: 'string' , width:100 },
          { field: 'Month', type: 'string' , width:110},
        ]}
        rows={rows}
      />
    </div>
  );
}

