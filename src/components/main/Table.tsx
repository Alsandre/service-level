//@ts-nocheck
import { v4 as keyGen } from "uuid";

export default function Table(props): JSX.Element {
  const {
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
  } = props;

  return (
    <div>
      <table {...getTableProps()} className="w-full min-w-[700px] seperate-border border-spacing-y-[2px]">
        <thead className="h-9">
          {headerGroups.map((headerGroup) => (
            <tr
              key={keyGen()}
              {...headerGroup.getHeaderGroupProps()}
              className="rounded-xl bg-white shadowy"
            >
              {headerGroup.headers.map((column) => (
                <th
                  key={keyGen()}
                  {...column.getHeaderProps()}
                  className="first:rounded-l-xl last:rounded-r-xl"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} >
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr
                key={keyGen()}
                {...row.getRowProps()}
                className="rounded-xl bg-white h-9 shadowy hover:bg-rowSelect hover:text-white"
              >
                {row.cells.map((cell) => {
                  return (
                    <td
                      key={keyGen()}
                      {...cell.getCellProps()}
                      className="first:rounded-l-xl last:rounded-r-xl border-spacing-y-2 text-inherit"
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-center gap-3 m-auto mt-12 min-w-[700px]">
        {canPreviousPage && <button onClick={previousPage}>&lt;&lt;</button>}
        {pageOptions.map((page) => {
          return (
            <button
              key={keyGen()}
              className="font-bold"
              onClick={(e) => {
                gotoPage(page);
              }}
            >
              {page + 1}
            </button>
          );
        })}
        {canNextPage && <button onClick={nextPage}>&gt;&gt;</button>}
      </div>
    </div>
  );
}
