/* eslint-disable camelcase */
import { ReactElement, useMemo, useState, useRef, useEffect } from 'react';
import { useTable } from 'react-table';
import { VscChevronUp } from 'react-icons/vsc';

import { MYTICKETS } from '../../constants/context';
import myRaffleColumns from '../../fixtures/myrafflecolumns.json';
import { truncate } from '../../util/Truncate';
import { IMyRaffles } from '../../interfaces/Board';

interface IMyRafflesProps {
  fetchedData: IMyRaffles[];
}

export const MyRaffles = ({ fetchedData }: IMyRafflesProps): ReactElement => {
  const data = useMemo(() => fetchedData, []);
  const columns = useMemo(() => myRaffleColumns, []);
  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState('0px');
  const [transform, setTransform] = useState('transform duration-700 ease text-blue-primary');
  console.log(fetchedData);

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

  function setTxLink(tx) {
    return `https://cardanoscan.io/transaction/${tx}`;
  }

  useEffect(() => {
    toggleAccordion();
  }, []);

  return (
    <div className="grid grid-cols-1">
      <div>
        <button
          type="button"
          className="w-full flex justify-between box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between"
          onClick={toggleAccordion}
        >
          <span className="p-5">{MYTICKETS.TITLE}</span>
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
                              {(cell.column.id === 'tx_id' && (
                                <a
                                  href={setTxLink(cell.value)}
                                  target="_blank"
                                  className="text-blue-primary"
                                  rel="noreferrer"
                                >
                                  {truncate(cell.value, 5)}
                                </a>
                              )) ||
                                (cell.column.id === 'won' &&
                                  (cell.value === true ? (
                                    <span className="text-green-400">Win</span>
                                  ) : (
                                    <span className="text-orange-primary">-</span>
                                  ))) ||
                                (cell.column.id === 'is_closed' &&
                                  (cell.value === true ? (
                                    <span className="text-green-400">V</span>
                                  ) : (
                                    <span className="text-orange-primary">X</span>
                                  ))) ||
                                // Render the cell contents
                                cell.render('Cell')}
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
