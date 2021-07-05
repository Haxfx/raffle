/* eslint-disable camelcase */
import { ReactElement, useMemo, useState, useRef } from 'react';
import { useTable } from 'react-table';
import { VscChevronUp } from 'react-icons/vsc';

import { RAFFLES } from '../../constants/context';
import tableColumns from '../../fixtures/tablecolumns.json';

export const ClosedRaffles = ({ fetchedData }): ReactElement => {
  const filteredData = fetchedData.filter((item) => item.is_closed === true);
  const data = useMemo(() => filteredData, []);
  const columns = useMemo(() => tableColumns, []);
  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState('0px');
  const [transform, setTransform] = useState('transform duration-700 ease text-blue-primary');

  const contentSpace = useRef(null);

  function toggleAccordion() {
    setActive(active === false);
    setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`);
    setTransform(
      active
        ? 'transform duration-700 ease text-blue-primary'
        : 'transform duration-700 ease rotate-180 text-orange-primary'
    );
  }

  return (
    <div className="grid grid-cols-1">
      <div>
        <button
          type="button"
          className="w-full flex justify-between box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between"
          onClick={toggleAccordion}
        >
          <span className="p-5">{RAFFLES.CLOSED_TITLE}</span>
          <VscChevronUp className={`${transform} inline-block h-6 w-6 mr-5`} />
        </button>
        <div
          ref={contentSpace}
          style={{ maxHeight: `${height}` }}
          className="overflow-auto transition-max-height duration-700 ease-in-out"
        >
          <div className="text-sm font-thin">
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
                              column.render('Header')
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
                      <tr {...row.getRowProps()} className="border-b-2 border-purple-dark">
                        {
                          // Loop over the rows cells
                          row.cells.map((cell) => (
                            // Apply the cell props
                            <td {...cell.getCellProps()} className="text-center p-3">
                              {
                                // Render the cell contents
                                cell.render('Cell')
                              }
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
        </div>
      </div>
    </div>
  );
};
