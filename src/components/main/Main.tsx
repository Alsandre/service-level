// @ts-nocheck
import React, { useState } from "react";

import { defaultColumn, useFilters, useGlobalFilter, usePagination, useTable } from "react-table";
import { itemColumns, itemData, shopAddresses, shopColumns, shopData } from "../../tableData";
import GlobalSearch from "./GlobalSearch";


import AverageSLA from "./AverageSLA";
import ReportTypeOptions from "./ReportTypeOptions";
import ShopAddress from "./ShopAddress";
import ActionOptions from "./ActionOptions";
import SearchBar from "./SearchBar";
import Table from "./Table";

export default function Main(): JSX.Element {
  const [reportType, setReportType] = useState("shop");
  let columns = reportType === 'item' ? itemColumns :  shopColumns;
  let data = reportType === 'item' ? itemData : shopData;

  const reactTable = useTable(
    { columns, data, defaultColumn, initialState: { pageSize: 7 } },
    useFilters,
    useGlobalFilter,
    usePagination
  );

  function onReportTypeChange(type: string): void {
    setReportType(type);
  }
  return (
    <main className={" w-full h-auto pl-32"}>
      <section
        className={"flex justify-between pt-6 pr-10 min-w-[700px] relative"}
      >
        <h1>SPAR Service Level Report</h1>
        <div className={"flex"}>
          <ActionOptions />
          <GlobalSearch
                preGlobalFilteredRows={reactTable.preGlobalFilteredRows}
                globalFilter={reactTable.state.globalFilter}
                setGlobalFilter={reactTable.setGlobalFilter}
              />
        </div>
        <div className="absolute right-[90px] bottom-[-60px]">
          <ReportTypeOptions reportTypeHandler={onReportTypeChange} />
        </div>
      </section>
      {reportType === "shop" && (
        <>
          <section
            className={"flex justify-between mt-7 pr-[90px] w-[85%] min-w-[600px]"}
          >
            <ShopAddress addresses={shopAddresses} />
            <AverageSLA />
          </section>{" "}
        </>
      )}
      {reportType === "item" && (
        <>
          <section
            className={"flex justify-between mt-7 pr-[90px] w-[85%] min-w-[600px]"}
          >
            Slider
          </section>{" "}
        </>
      )}

      <section className={"mt-12 pr-[90px]"}>
        <Table {...reactTable} />
      </section>
    </main>
  );
}
