import React, { useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableHeadBar from "./TableHeadBar";
const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: "200pt",
    // backgroundColor:'red',
    borderRadius: 0,
    // borderColor: "#000",
    width:'auto', //100%會有些微突出
    borderWidth: "1px 1px 0 1px",
    borderStyle: "solid",
    // boxShadow:'none'
  },
  table: {
    fontSize: "200pt",
  },
  firstCol: {
    width: "50px",
  },
  bids_first: {
    background: "#08bdb4",
    width: "50px",
  },
  asks_first: {
    background: "#f0246b",
    width: "50px",
  },
  title: {
    flex: "1 1 100%",
  },
  tableCell: {
    fontSize: "0.5rem",
  },
  tableCell_bids:{
    color:"#08bdb4",
  },
  tableCell_asks:{
    color:"#f0246b",
  },
  paper:{
    borderWidth: "1px",
    borderStyle: "solid",
  }
}));

function PartialBookDepthTable({ pbd, symbolObj }) {
  const { bids, asks } = useMemo(() => {
    if (!pbd || !pbd.bids) return { bids: [], asks: [] };
    let { bids, asks } = pbd;
    bids.sort((a, b) => b[0] - a[0]);
    asks.sort((a, b) => b[0] - a[0]);
    return { bids, asks };
  }, [pbd]);
  const classes = useStyles();
  if (!pbd || !pbd.bids) return <></>;
  // console.log(bids);
  return (
    <>
      <TableHeadBar title={"Partial Book Depth"} />
      <TableContainer component={Paper} className={classes.root}>
        <Table
          size="small"
          className={classes.table}
          aria-label="AggTrades table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center">Quotation</TableCell>
              <TableCell align="right">
                Price&nbsp;({symbolObj.quoteAsset})
              </TableCell>

              <TableCell align="right">
                Amount&nbsp;({symbolObj.baseAsset})
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          <TableRow>
              <TableCell
                component="th"
                scope="row"
                className={classes.asks_first}
                rowSpan={asks.length + 1}
                align="center"
              >
                Asks
              </TableCell>
            </TableRow>
            {asks.map((row, i) => (
              <TableRow key={`asks_${i}`}>
                <TableCell align="right" className={`${classes.tableCell} ${classes.tableCell_asks}`}>
                  {row[0]}
                </TableCell>
                <TableCell align="right" className={classes.tableCell}>{row[1]}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                className={classes.bids_first}
                rowSpan={bids.length + 1}
                align="center"
              >
                Bids
              </TableCell>
            </TableRow>
            {bids.map((row, i) => (
              <TableRow key={`bids_${i}`}>
                <TableCell align="right" className={`${classes.tableCell} ${classes.tableCell_bids}`}>{row[0]}</TableCell>
                <TableCell align="right" className={classes.tableCell}>{row[1]}</TableCell>
              </TableRow>
            ))}
           
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default PartialBookDepthTable;
