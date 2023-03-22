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
    state,
    gotoPage,
    previousPage,
    nextPage,
    setPageSize,
    canPreviousPage,
    canNextPage,
    visibleColumns,
  } = props;

  return (
    <div>
      <table {...getTableProps()} className="w-full min-w-[700px]">
        <thead className="h-9">
          {headerGroups.map((headerGroup) => (
            <tr key={keyGen()} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  key={keyGen()}
                  {...column.getHeaderProps()}
                  className="first:rounded-l-lg last:rounded-r-lg"
                >
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
                className="rounded-xl bg-white h-9 shadow-md border-b-2 hover:bg-rowSelect"
              >
                {row.cells.map((cell) => {
                  return (
                    <td
                      key={keyGen()}
                      {...cell.getCellProps()}
                      className="first:rounded-l-xl last:rounded-r-xl"
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
              className='font-bold'
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
