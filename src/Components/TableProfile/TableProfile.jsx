import React from "react";
import { makeStyles } from '@mui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from '@mui/material/TablePagination';
// import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

function createData(orderDate, orderId, totalOrder, status, ) {
  return { orderDate, orderId, totalOrder, status,  };
}

//ini dummy doang
const rows = [
  createData("Frozen yoghurt", 159, 6.0, 'paid', ),
  createData("Ice cream sandwich", 237, 9.0, 'paid', ),
  createData("Eclair", 262, 16.0, 'unpaid', ),
  createData("Cupcake", 305, 3.7, 'paid', ),
  createData("Gingerbread", 356, 16.0, 'unpaid', ),
  createData("Gingerbread2", 356, 16.0, 'paid', ),
  createData("Gingerbread3", 356, 16.0, 'unpaid', ),
  createData("Gingerbread4", 356, 16.0, 'paid', ),
  createData("Gingerbread5", 356, 16.0, 'paid', ),
  createData("Gingerbread6", 356, 16.0, 'unpaid', ),
  createData("Gingerbread7", 356, 16.0, 'paid', ),
  createData("Gingerbread8", 356, 16.0, 'unpaid', ),
  createData("Gingerbread9", 356, 16.0, 'paid', ),
  createData("Gingerbread10", 356, 16.0, 'unpaid', ),
  createData("Gingerbread11", 356, 16.0, 'paid', ),
  createData("Gingerbread12", 356, 16.0, 'unpaid', ),
  createData("Gingerbread13", 356, 16.0, 'paid', )
];

export default function TableOrder() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <TableContainer >
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Order Date</TableCell>
            <TableCell align="right"># Order ID</TableCell>
            <TableCell align="right">Total Order</TableCell>
            <TableCell align="right">Status</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((item, index) => (
              <TableRow key={item.name}>
                <TableCell component="th" scope="row">
                28/03/21
                </TableCell>
                <TableCell align="right">#927467375</TableCell>
                <TableCell align="right">Rp 157.600</TableCell>
                <TableCell align="right" sx={{fontWeight:'bold'}}>{item.status}</TableCell>
                
              </TableRow>
            ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6}/>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10,]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{marginTop: '10px'}}
      />
    </TableContainer>
  );
}
