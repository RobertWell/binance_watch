import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableHeadBar from "./TableHeadBar";
import { format } from "date-fns";
const useStyles = makeStyles({
  table: {
    //   minWidth: 650,
  },
});

function AggTable({ aggTrades, symbolObj }) {
  const classes = useStyles();
  let rows = [...aggTrades].reverse();

  return (
    <Paper>
      <TableHeadBar title={"Aggregate Trade"} />
      <TableContainer component={Paper}>
        <Table
          size="small"
          className={classes.table}
          aria-label="AggTrades table"
        >
          <TableHead>
            <TableRow>
              {/* <TableCell>Index</TableCell> */}
              <TableCell>Time</TableCell>
              <TableCell align="right">
                Price&nbsp;({symbolObj.quoteAsset})
              </TableCell>

              <TableCell align="right">
                Amount&nbsp;({symbolObj.baseAsset})
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow key={row.a}>
                {/* <TableCell component="th" scope="row">
                {i + 1}
              </TableCell> */}
                <TableCell component="th" scope="row">
                  {format(new Date(row.T), "HH:mm:ss")}
                </TableCell>

                <TableCell align="right">{row.p}</TableCell>
                <TableCell align="right">{row.q}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default AggTable;
