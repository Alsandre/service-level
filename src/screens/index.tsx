// @ts-nocheck
import React, { useState } from "react";

import {
  defaultColumn,
  useFilters,
  useGlobalFilter,
  usePagination,
  useTable,
  useSortBy
} from "react-table";
import { itemColumns, itemData, shopColumns, shopData } from "../tableData";
import GlobalSearch from "./GlobalSearch";

import AverageSLA from "./AverageSLA";
import ReportTypeOptions from "./ReportTypeOptions";
import ShopAddress from "./ShopAddress";
import ActionOptions from "./ActionOptions";
import { TableActions, Table, Menu, Header } from "../components";

export default function Dashboard(): JSX.Element {
  const [reportType, setReportType] = useState("shop");
  let columns = reportType === "item" ? itemColumns : shopColumns;
  let data = reportType === "item" ? itemData : shopData;

  const reactTable = useTable(
    { columns, data, defaultColumn, initialState: { pageSize: 7 } },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
  );

  function onReportTypeChange(type: string): void {
    setReportType(type);
  }
  return (
    <>
      <Menu />
      <Header />
      <main className={" w-full h-auto pl-32"}>
        <TableActions
          onReportTypeChange={onReportTypeChange}
          setGlobalFilter={reactTable.setGlobalFilter}
          globalFilter={reactTable.state.globalFilter}
        />

        <section className={"mt-12 pr-[90px]"}>
          <Table {...reactTable} />
        </section>
      </main>
    </>
  );
}
