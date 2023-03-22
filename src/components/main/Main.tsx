import React, { useState } from "react";

import { shopAddresses } from "../../tableData";

import ReportTable from "./ReportTable";
import TablePagination from "./TablePagination";
import AverageSLA from "./AverageSLA";
import ReportTypeOptions from "./ReportTypeOptions";
import ShopAddress from "./ShopAddress";
import ActionOptions from "./ActionOptions";
import SearchBar from "./SearchBar";
import GlobalSearch from "./GlobalSearch";

export default function Main(): JSX.Element {
  const [reportType, setReportType] = useState("shop");

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
          {/* <GlobalSearch /> */}
          <SearchBar />
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
        <ReportTable variant={reportType} />
        <TablePagination />
      </section>
    </main>
  );
}
