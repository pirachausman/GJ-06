import React from 'react'

import {
  createTable,
  useTableInstance,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  ColumnDef,
} from '@tanstack/react-table'

let table = createTable().setRowType<string[]>()

type Props = {
  className: string
  head: string[]
  data: Array<string[]>
}

export const SimpleTable: React.FC<Props> = ({className, head, data}) => {
  const columns = React.useMemo(
    () =>
      head.map((title, index) =>
        table.createDataColumn(() => title, {
          id: `${index}`,
          //cell: (info) => ,
          header: () => <span>{title}</span>,
          footer: (props) => props.column.id,
        })
      ),
    [head]
  )

  //  const [data] = React.useState(() => makeData(100000))

  // const [pagination, setPagination] = React.useState<PaginationState>({
  //   pageIndex: 0,
  //   pageSize: 10,
  // })

  return (
    <div className={`card card-p-0 card-flush ${className}`}>
      <div className='card-header align-items-center py-5 gap-2 gap-md-5'>
        <div className='card-body overflow-scroll'>
          <Table
            {...{
              data,
              columns,
              // pagination,
              //setPagination,
            }}
          />
        </div>
      </div>
    </div>
  )
}

type TableProps = {
  data: Array<string[]>
  columns: ColumnDef<typeof table.generics>[]
  //pagination: PaginationState
  //setPagination: OnChangeFn<PaginationState>
}

const Table: React.FC<TableProps> = ({data, columns}) => {
  const instance = useTableInstance(table, {
    data,
    columns,
    state: {
      //  pagination,
    },
    // onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
  })

  // const getPageNumbers = () => {
  //   let currentpage = instance.getState().pagination.pageIndex + 1
  //   let totalPages = instance.getPageCount()
  //   let numberOfPages = 3
  //   let start, end
  //   if (totalPages <= numberOfPages) {
  //     // less than 5 total pages so show all
  //     start = 1
  //     end = totalPages
  //   } else {
  //     // more than 5 total pages so calculate start and end pages
  //     if (currentpage <= 2) {
  //       start = 1
  //       end = numberOfPages
  //     } else if (currentpage + 1 >= totalPages) {
  //       start = totalPages - 2
  //       end = totalPages
  //     } else {
  //       start = currentpage - 1
  //       end = currentpage + 1
  //     }
  //   }
  //   let data = []
  //   for (let i = start; i <= end; i++) data.push(i)

  //   return data
  // }
  return (
    <>
      <table
        id='kt_datatable_example_1'
        className='table align-middle border rounded table-row-dashed table-striped  fs-6 g-5 dataTable'
      >
        <thead>
          {instance.getHeaderGroups().map((headerGroup) => {
            return (
              <tr
                key={headerGroup.id}
                className='text-start text-gray-400 fw-bolder fs-7 text-uppercase'
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <th key={header.id} colSpan={header.colSpan} className='min-w-100px'>
                      {header.isPlaceholder ? null : <div>{header.renderHeader()}</div>}
                    </th>
                  )
                })}
              </tr>
            )
          })}
        </thead>
        <tbody className='fw-bold text-gray-600'>
          {instance.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id} className='odd'>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td
                      key={cell.id}
                      dangerouslySetInnerHTML={{
                        __html: data[parseInt(cell.row.id)][parseInt(cell.column.id)],
                      }}
                    ></td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className='h-2' />
      {/* <div className='row'>
        <div className='col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start my-10 my-lg-0'>
          <div className='dataTables_length' id='kt_datatable_example_7_length'>
            <label>
              <select
                value={instance.getState().pagination.pageSize}
                onChange={(e) => {
                  instance.setPageSize(Number(e.target.value))
                }}
                name='kt_datatable_example_7_length'
                aria-controls='kt_datatable_example_7'
                className='form-select form-select-sm form-select-solid'
              >
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div
            className='dataTables_info'
            id='kt_datatable_example_7_info'
            role='status'
            aria-live='polite'
          >
            Showing page {instance.getState().pagination.pageIndex + 1} of {instance.getPageCount()}
          </div>
        </div>
        <div className='col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'>
          <div
            className='dataTables_paginate paging_simple_numbers'
            id='kt_datatable_example_7_paginate'
          >
            <ul className='pagination'>
              <li
                className={`paginate_button page-item previous ${
                  instance.getState().pagination.pageIndex === 0 ? 'disabled' : ''
                }`}
                id='kt_datatable_example_7_previous'
              >
                <button
                  aria-controls='kt_datatable_example_7'
                  data-dt-idx='0'
                  tabIndex={0}
                  className='page-link'
                  onClick={() => instance.setPageIndex(0)}
                  disabled={instance.getState().pagination.pageIndex === 0}
                >
                  <KTSVG path='/media/icons/duotune/arrows/arr021.svg' className='page-link' />
                </button>
              </li>
              <li
                className={`paginate_button page-item previous me-2 ${
                  !instance.getCanPreviousPage() ? 'disabled' : ''
                }`}
                id='kt_datatable_example_7_previous'
              >
                <button
                  aria-controls='kt_datatable_example_7'
                  data-dt-idx='0'
                  tabIndex={0}
                  className='page-link'
                  onClick={() => instance.previousPage()}
                  disabled={!instance.getCanPreviousPage()}
                >
                  <i className='previous'></i>
                </button>
              </li>

              {getPageNumbers().map((no) => {
                return (
                  <li
                    key={`${no}-page`}
                    className={`paginate_button page-item ${
                      instance.getState().pagination.pageIndex + 1 === no ? 'active' : ''
                    }`}
                  >
                    <button
                      aria-controls='kt_datatable_example_7'
                      data-dt-idx={no}
                      tabIndex={0}
                      className='page-link'
                      onClick={() => {
                        instance.setPageIndex(no - 1)
                      }}
                    >
                      {no}
                    </button>
                  </li>
                )
              })}
              <li
                className={`paginate_button page-item next ms-2 ${
                  !instance.getCanNextPage() ? 'disabled' : ''
                }`}
                id='kt_datatable_example_7_next'
              >
                <button
                  aria-controls='kt_datatable_example_7'
                  data-dt-idx='7'
                  tabIndex={0}
                  className='page-link'
                  onClick={() => instance.nextPage()}
                  disabled={!instance.getCanNextPage()}
                >
                  <i className='next'></i>
                </button>
              </li>
              <li
                className={`paginate_button page-item next ${
                  instance.getState().pagination.pageIndex === instance.getPageCount() - 1
                    ? 'disabled'
                    : ''
                }`}
                id='kt_datatable_example_7_next'
              >
                <button
                  aria-controls='kt_datatable_example_7'
                  data-dt-idx='7'
                  tabIndex={0}
                  className='page-link'
                  onClick={() => instance.setPageIndex(instance.getPageCount() - 1)}
                  disabled={
                    instance.getState().pagination.pageIndex === instance.getPageCount() - 1
                  }
                >
                  <i className='color-active'>
                    <KTSVG path='/media/icons/duotune/arrows/arr024.svg' className='page-link' />
                  </i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </>
  )
}

// function Filter({column, instance}: {column: Column<any>; instance: TableInstance<any>}) {
//   const firstValue = instance.getPreFilteredRowModel().flatRows[0]?.getValue(column.id)

//   const columnFilterValue = column.getFilterValue()

//   return typeof firstValue === 'number' ? (
//     <div className='flex space-x-2'>
//       <input
//         type='number'
//         value={(columnFilterValue as [number, number])?.[0] ?? ''}
//         onChange={(e) =>
//           column.setFilterValue((old: [number, number]) => [e.target.value, old?.[1]])
//         }
//         placeholder={`Min`}
//         className='w-24 border shadow rounded'
//       />
//       <input
//         type='number'
//         value={(columnFilterValue as [number, number])?.[1] ?? ''}
//         onChange={(e) =>
//           column.setFilterValue((old: [number, number]) => [old?.[0], e.target.value])
//         }
//         placeholder={`Max`}
//         className='w-24 border shadow rounded'
//       />
//     </div>
//   ) : (
//     <input
//       type='text'
//       value={(columnFilterValue ?? '') as string}
//       onChange={(e) => column.setFilterValue(e.target.value)}
//       placeholder={`Search...`}
//       className='w-36 border shadow rounded'
//     />
//   )
// }
