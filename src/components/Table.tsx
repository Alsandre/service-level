//@ts-nocheck
import { useEffect, useState } from "react";
import { v4 as keyGen } from "uuid";
import { inTimeCellRender } from "../util/inTimeCellRender";

export function Table({
  getTableProps,
  getTableBodyProps,
  headerGroups,
  prepareRow,
  pageOptions,
  page,
  gotoPage,
  previousPage,
  nextPage,
  canPreviousPage,
  canNextPage,
  isSortEnabled,
  toggleHideColumn,
  reportType,
}: any): JSX.Element {

  const [isRowHovered, setIsRowHovered] = useState(false);


  useEffect(() => {
    toggleHideColumn("productCategory", true);
    toggleHideColumn("address", true);
  }, [reportType, toggleHideColumn]);


  return (
    <div>
      <table
        {...getTableProps()}
        className="w-full min-w-[700px] seperate-border border-spacing-y-[2px]"
      >
        <thead className="h-9">
          {headerGroups.map((headerGroup: any) => (
            <tr
              key={keyGen()}
              {...headerGroup.getHeaderGroupProps()}
              className="rounded-xl bg-white shadowy"
            >
              {headerGroup.headers.map((column: any) => (
                <th
                  key={keyGen()}
                  {...column.getHeaderProps()}
                  className="first:rounded-l-xl last:rounded-r-xl text-left pl-2"
                >
                  {isSortEnabled && column.Header !== 'Item' && (
                    <button onClick={() => column.getSortByToggleProps()}>
                      <span className="inline-block sort-triangle w-5 h-4 mx-1"></span>
                    </button>
                  )}
                  {column.render("Header")}

                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr
                key={keyGen()}
                {...row.getRowProps()}
                onMouseOver={() => setIsRowHovered(true)}
                className="rounded-xl bg-white h-9 shadowy hover:bg-rowSelect hover:text-white"
              >
                {row.cells.map((cell) => {
                  return (
                    <td
                      key={keyGen()}
                      {...cell.getCellProps()}
                      className="font-bold text-xs first:rounded-l-xl last:rounded-r-xl border-spacing-y-2 text-inherit text-left pl-2"
                    >
                      {inTimeCellRender(cell.value, isRowHovered) ? inTimeCellRender(cell.value, isRowHovered) : cell.render("Cell") }
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-center gap-3 m-auto mt-12 min-w-[700px]">
        {canPreviousPage && (
          <button onClick={previousPage} className="hover:opacity-50">
            &lt;&lt;
          </button>
        )}
        {pageOptions.map((page: any) => {
          return (
            <button
              key={keyGen()}
              className="font-bold focus:font-extrabold"
              onClick={(e) => {
                gotoPage(page);
              }}
            >
              {page + 1}
            </button>
          );
        })}
        {canNextPage && (
          <button onClick={nextPage} className="hover:opacity-50">
            &gt;&gt;
          </button>
        )}
      </div>
    </div>
  );
}
