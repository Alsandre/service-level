import React, { useEffect, useState } from "react";

import { itemTableColumns, shopTableColumns } from "../constants";
import itemsData from "../data/itemsData.json";
import shopsData from "../data/shopsData.json";
import { TableActions, Table, Menu, Header } from "../components";
import {
  defaultColumn,
  useFilters,
  useGlobalFilter,
  usePagination,
  useTable,
  useSortBy,
} from "react-table";
import { calculateAverageSLA } from "../util/calculateAverageSLA";

export default function Dashboard(): JSX.Element {
  const [reportType, setReportType] = useState("item");
  const [isSortEnabled, setIsSortEnabled] = useState(false);
  const [averageSLA, setAverageSLA] = useState("");

  let columns = reportType === "item" ? itemTableColumns : shopTableColumns;
  let data = reportType === "item" ? itemsData : shopsData;

  const reactTableProps = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState: {
        //@ts-ignore
        pageSize: 7,
      },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  function onReportTypeChange(type: string): void {
    setReportType(type);
  }
  const toggleSort = (): void => {
    setIsSortEnabled(!isSortEnabled);
  };
  const filteredRows = reactTableProps.rows;
  useEffect(() => {
    if(filteredRows.length > 0) setAverageSLA(calculateAverageSLA(filteredRows).toString());
  }, [filteredRows]);
  return (
    <>
      <Menu />
      <Header />
      <main className={" w-full h-auto pl-32"}>
        <TableActions
          onReportTypeChange={onReportTypeChange}
          //@ts-ignore
          setGlobalFilter={reactTableProps.setGlobalFilter}
          //@ts-ignore
          globalFilter={reactTableProps.state.globalFilter}
          isSortEnabled={isSortEnabled}
          setIsSortEnabled={setIsSortEnabled}
          setSort={toggleSort}
          averageSLA={averageSLA}
        />

        <section className={"pr-[90px]"}>
          <Table
            {...reactTableProps}
            isSortEnabled={isSortEnabled}
            reportType={reportType}
          />
        </section>
      </main>
    </>
  );
}
