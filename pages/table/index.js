import React, { useContext } from 'react';
import { store } from '../index';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default function Tables() {
  const [Item, setItem] = useContext(store);

  const deleteItems = (ids) => {
    const filterItems = Item.filter((element, index) => {
      console.log(element);
      return element.id !== ids;
    });
    setItem(filterItems);
  };
  return (
    <div>
      {Item.length > 0 && (
        <TableContainer container={Paper}>
          <Table
            sx={{ Width: 650, border: 1, mt: '3rem' }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Item.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>
                    <Button color="error" onClick={() => deleteItems(item.id)}>
                      X
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}
