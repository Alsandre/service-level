//@ts-nocheck
import Table from "./Table";
import { useTable,  usePagination, Column } from "react-table";
import { shopData, itemData, shopColumns, itemColumns } from "../../tableData";
import NewTable from "./GlobalfilterAnalyze";

export default function ReportTable(props: {variant: string}): JSX.Element {
  let columns = props.variant === 'item' ? itemColumns :  shopColumns;
  let data = props.variant === 'item' ? itemData : shopData;

  return <Table columns={columns} data={data} />
  // return <NewTable columns={columns} data={data} />
}
