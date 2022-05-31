import React, { useContext } from 'react';
import Home from '../../pages';
import { Table } from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { store } from '../../pages';

export default function Tables({value}) {
   
    console.log(value);
  return (
    <div>
        {value.length > 1 ? value.map(item => {
          <ul>
              <li>{item.name}</li>
          </ul>
      }) : "Load"}
    
    </div>
  );
}
