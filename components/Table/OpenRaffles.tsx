/* eslint-disable camelcase */
import { ReactElement, useMemo, FC } from "react";
import { useTable } from "react-table";

import { RAFFLES } from "../../constants/context";
import tableColumns from "../../fixtures/tablecolumns.json";

interface IRaffles {
  epoch: string;
  prize: string;
  min_stake: string;
  num_participants: string;
}

export const OpenRaffles = ({ fetchedData }: any): ReactElement => {
  const filteredData = fetchedData.filter((item) => item.is_closed === false);

  const data = useMemo(() => filteredData, []);

  const columns = useMemo(() => tableColumns, []);

  const tableInstance = useTable({ columns, data });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <div className="grid grid-cols-1">
      <span className="p-5">{RAFFLES.OPEN_TITLE}</span>
      <table {...getTableProps()} className="w-full mt-3">
        <thead>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column) => (
                    // Apply the header cell props
                    <th
                      {...column.getHeaderProps()}
                      className="py-2 text-purple-light font-normal text-sm text-opacity-40 border-b-2 border-purple-light border-opacity-20"
                    >
                      {
                        // Render the header
                        column.render("Header")
                      }
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            rows.map((row) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr
                  {...row.getRowProps()}
                  className="border-b-2 border-purple-dark"
                >
                  {
                    // Loop over the rows cells
                    row.cells.map((cell) => (
                      // Apply the cell props
                      <td {...cell.getCellProps()} className="text-center p-3">
                        {(cell.column.id === "prize" &&
                          (cell?.row?.original?.asset_name
                            ? `${cell.value} ${cell.row.original.asset_name}`
                            : `${cell.value} ADA`)) ||
                          // Render the cell contents
                          cell.render("Cell")}
                      </td>
                    ))
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};
