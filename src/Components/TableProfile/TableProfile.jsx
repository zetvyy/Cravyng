import React, { useEffect } from "react";
import { makeStyles } from '@mui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from '@mui/material/TablePagination';
import { useDispatch, useSelector } from "react-redux";
import { getSalesSummary } from "../../redux/action/profileAction";
import moment from 'moment';
// import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

export default function TableOrder() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };


  const data = useSelector(state => state.profile.data)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSalesSummary())
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  return (
    <TableContainer sx={{marginBottom: '30px'}} >
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
          {data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((item) => (
              <TableRow key={item.name}>
                <TableCell component="th" scope="row">
                {moment.utc(item["order.createdAt"]).format("DD/MM/YY")} 
                </TableCell>
                <TableCell align="right">
                  {item.orderId}
                </TableCell>
                <TableCell align="right">
                  { new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" })
                    .format(item.totalOrder)
                  }   
                </TableCell>
                <TableCell 
                  align="right" 
                  sx={item["order.status"] === "paid" ? 
                        {color:"green", fontWeight:'bold'} 
                        : 
                        {color:"red", fontWeight:'bold'}
                     }
                >
                  {item["order.status"]}
                </TableCell>
                
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
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{marginTop: '10px'}}
      />
     
    </TableContainer>
  );
}
