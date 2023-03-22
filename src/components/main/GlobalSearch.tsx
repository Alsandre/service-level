//@ts-nocheck
import React from "react";
// import { useAsyncDebounce } from "react-table";
import { useAsyncDebounce } from "../../../util/useAsyncDebounce";

export default function GlobalSearch({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <div className={"flex items-center w-[270px] justify-between"}>
      <span>
        <img
          className={"w-6 h-6 opacity-50"}
          src="/assets/magnifying-glass.png"
          alt=""
        />
      </span>
        <input
         className="w-[230px] h-8 shadow-md rounded-lg px-1 focus:outline-none"
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
        />
    </div>
  );
}
