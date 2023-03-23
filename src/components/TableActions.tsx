import React from "react";
import { v4 as keyGen } from "uuid";
import shopsData from "../data/shopsData.json";
import { TShopsTable } from "../types";
import Icon from "./Icon";
import { useAsyncDebounce } from "../util/useAsyncDebounce";

const shopAddresses: string[] = findUniqueShopAddresses(
  shopsData as TShopsTable
);

export function TableActions({
  onReportTypeChange,
  globalFilter,
  setGlobalFilter,
  setSort,
  isSortEnabled
}: any): JSX.Element {
  const [globalSearchValue, setGlobalSearchValue] =
    React.useState(globalFilter);
  const globalSearchHandler = useAsyncDebounce((value: any) => {
    setGlobalFilter(value || undefined);
  }, 200);
  return (
    <>
      <div className="flex justify-between items-center min-w-[750px] mr-10">
        <h1 className="pl-4 mt-5 text-lg font-bold font-sans">
          SPAR Service Level Report
        </h1>
        <div className={"flex items-center w-[370px] justify-between"}>
          <Icon icon="filter-symbol" className={"opacity-50"} />
          <Icon icon="sort" className={isSortEnabled ? 'active:opacity-100' : 'opacity-50'} onClick={setSort} />
          <span>
            <img
              className={"w-6 h-6 opacity-50"}
              src="/assets/magnifying-glass.png"
              alt=""
            />
          </span>
          <input
            className="w-[230px] h-8 shadow-md rounded-lg px-1 focus:outline-none"
            value={globalSearchValue || ""}
            onChange={(e) => {
              setGlobalSearchValue(e.target.value);
              globalSearchHandler(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="flex justify-between mr-[88px] pl-4 mt-4 min-w-[690px]">
        <div className={"flex gap-6 items-center"}>
          <span className="font-bold">Shop</span>
          <select
            className={"w-40 h-8 rounded-xl shadow-md"}
            name="shop-address"
            id="select-shop"
          >
            {shopAddresses.map((address) => (
              <option key={keyGen()} value="N.Ramishvili 33">
                {address}
              </option>
            ))}
          </select>
          <div>
            <span>Average SLA: </span>
            <span>--%</span>
          </div>
        </div>

        <div>
          <div>
            <input
              type="radio"
              name="report-type"
              onChange={() => onReportTypeChange("item")}
            />
            <label htmlFor="by-item">By item</label>
          </div>
          <div>
            <input
              type="radio"
              name="report-type"
              onChange={() => onReportTypeChange("shop")}
            />
            <label htmlFor="by-shop">By shop</label>
          </div>
        </div>
      </div>
    </>
  );
}

function findUniqueShopAddresses(data: TShopsTable): string[] {
  const setOfAddresses: Set<string> = new Set([
    ...data.map((dataObj) => dataObj.address),
    "Vazha-Pshavela 7",
  ]);
  return [...setOfAddresses];
}
