import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Paybutton from './Paybutton';


const rows  = [
  {
    id: 1,
    Teacher: 'Ajanth Dissanayake',
    Subject: 'Combined Maths',
    Class: '2016 A/L',
    Month: 'August',
    Fee  : 1500,
  },
  {
    id: 2,
    Teacher: 'Mahen Jecob',
    Class: '2016 A/L',
    Month: 'August',
    Fee : 1500,
  },
  {
    id: 3,
    Teacher: 'Manoj Pathiraja',
    Class: '2016 A/L',
    Month: 'August',
    Fee : 1500,
  },
  {
    id: 4,
    Teacher: 'Nadun Rajakaruna',
    Class: '2016 A/L',
    Month: 'August',
    Fee  : 1500,
  },

  {
    id: 5,
    Teacher: 'Sunil Rathnayaka',
    Class: '2016 A/L',
    Month: 'August',
    Fee   : 1500,
  },
  {
    id: 6,
    Teacher: 'Nimal Hettiarachchi',
    Class: '2016 A/L',
    Month: 'August',
    Fee : 1500,
  },
  {
    id: 7,
    Teacher: 'Kesiri withanage',
    Class: '2016 A/L',
    Month: 'August',
    Fee: 1500,
  },
  {
    id: 8,
    Teacher: 'Wasantha yapabandara',
    Class: '2016 A/L',
    Month: 'August',
    Fee  : 1500,
  },


  {
    id: 9,
    Teacher: 'Darshana ukuwela',
    Class: '2016 A/L',
    Month: 'August',
    Fee   : 1500,
  },
  {
    id: 10,
    Teacher: 'Nimal perera',
    Class: '2016 A/L',
    Month: 'August',
    Fee : 1500,
  },
  {
    id: 11,
    Teacher: 'Amila suraweera',
    Class: '2016 A/L',
    Month: 'August',
    Fee : 1500,
  },
  {
    id: 12,
    Teacher: 'Amila senadeera',
    Class: '2016 A/L',
    Month: 'August',
    Fee : 1500,
  },

  {
    id: 13,
    Teacher: 'Ajanth Dissanayake',
    Class: '2016 Revision',
    Month: 'August',
    Fee   : 1500,
  },
  {
    id: 14,
    Teacher: 'Mahen Jecob',
    Class: '2016 Revision',
    Month: 'August',
    Fee : 1500,
  },
  {
    id: 15,
    Teacher: 'Manoj Pathiraja',
    Class: '2016 Revision',
    Month: 'August',
    Fee : 1500,
  },
  {
    id: 16,
    Teacher: 'Nadun Rajakaruna',
    Class: '2016 Revision',
    Month: 'August',
    Fee  : 1500,
  },

  {
    id: 17,
    Teacher: 'Akila awantha',
    Class: '2016 A/L',
    Month: 'August',
    Fee  : 1500,
  },
];

export default function Menu() {
  return (
    <div style={{ height: 480, maxWidth: 920 }}>
      <DataGrid
        columns={[
          { field: 'Teacher', type: 'string' , width: 200 ,},
          { field: 'Subject', type: 'string' , width:150},
          { field: 'Class', type: 'string' , width:90 },
          { field: 'Fee', type: 'string' , width:80},
          { field: 'Month', type: 'string' , width:100},
          { field: 'Purchase' , width: 270,
          renderCell: () => (
            <strong style={{marginTop:'10px'}}>
              <Paybutton/>
            </strong>
          )
        }
        ]}
        rows={rows}
      />
    </div>
  );
}


