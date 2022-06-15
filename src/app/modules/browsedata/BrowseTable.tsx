import React from 'react'

import {
  createTable,
  PaginationState,
  useTableInstance,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  ColumnDef,
  OnChangeFn,
} from '@tanstack/react-table'

import {makeData, Person} from './data'
import {KTSVG} from '../../../_metronic/helpers'

let table = createTable().setRowType<Person>()

type Props = {
  className: string
}

export const BrowseTable: React.FC<Props> = ({className}) => {
  const columns = React.useMemo(
    () => [
      table.createDataColumn('firstName', {
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      }),
      table.createDataColumn((row) => row.lastName, {
        id: 'lastName',
        cell: (info) => info.getValue(),
        header: () => <span>Last Name</span>,
        footer: (props) => props.column.id,
      }),
      table.createDataColumn('age', {
        header: () => 'Age',
        footer: (props) => props.column.id,
      }),
      table.createDataColumn('visits', {
        header: () => <span>Visits</span>,
        footer: (props) => props.column.id,
      }),
      table.createDataColumn('status', {
        header: 'Status',
        footer: (props) => props.column.id,
      }),
      table.createDataColumn('progress', {
        header: 'Profile Progress',
        footer: (props) => props.column.id,
      }),
    ],
    []
  )

  const [data] = React.useState(() => makeData(100000))

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })

  return (
    <div className={`card card-p-0 card-flush ${className}`}>
      <div className='card-header align-items-center py-5 gap-2 gap-md-5'>
        <div className='card-title'>
          {/*begin::Search*/}
          <div className='d-flex align-items-center position-relative my-1'>
            <span className='svg-icon svg-icon-1 position-absolute ms-4'></span>
            <input
              type='text'
              data-kt-filter='search'
              className='form-control form-control-solid w-250px ps-5'
              placeholder='Search Report'
              autoFocus={true}
            />
          </div>
          {/*end::Search*/}
          {/*begin::Export buttons*/}
          <div id='kt_datatable_example_1_export' className='d-none'></div>
          {/*end::Export buttons*/}
        </div>
        <div className='card-toolbar flex-row-fluid justify-content-end gap-5'>
          {/*begin::Export dropdown*/}
          <button
            type='button'
            className='btn btn-danger'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
          >
            Export
          </button>
          {/*begin::Menu*/}
          <div
            id='kt_datatable_example_1_export_menu'
            className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-200px py-4'
            data-kt-menu='true'
          >
            {/*begin::Menu item*/}
            <div className='menu-item px-3'>
              <button className='menu-link px-3' data-kt-export='copy'>
                Copy to clipboard
              </button>
            </div>
            {/*end::Menu item*/}
            {/*begin::Menu item*/}
            <div className='menu-item px-3'>
              <button className='menu-link px-3' data-kt-export='excel'>
                Export as Excel
              </button>
            </div>
            {/*end::Menu item*/}
            {/*begin::Menu item*/}
            <div className='menu-item px-3'>
              <button className='menu-link px-3' data-kt-export='csv'>
                Export as CSV
              </button>
            </div>
            {/*end::Menu item*/}
            {/*begin::Menu item*/}
            <div className='menu-item px-3'>
              <button className='menu-link px-3' data-kt-export='pdf'>
                Export as PDF
              </button>
            </div>
            {/*end::Menu item*/}
          </div>
          {/*end::Menu*/}
          {/*end::Export dropdown*/}
        </div>
        <div className='card-body overflow-scroll'>
          <Table
            {...{
              data,
              columns,
              pagination,
              setPagination,
            }}
          />
        </div>
      </div>
    </div>
  )
}

type TableProps = {
  data: Person[]
  columns: ColumnDef<typeof table.generics>[]
  pagination: PaginationState
  setPagination: OnChangeFn<PaginationState>
}

const Table: React.FC<TableProps> = ({data, columns, pagination, setPagination}) => {
  const instance = useTableInstance(table, {
    data,
    columns,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
  })

  const getPageNumbers = () => {
    let currentpage = instance.getState().pagination.pageIndex + 1
    let totalPages = instance.getPageCount()
    let numberOfPages = 3
    let start, end
    if (totalPages <= numberOfPages) {
      // less than 5 total pages so show all
      start = 1
      end = totalPages
    } else {
      // more than 5 total pages so calculate start and end pages
      if (currentpage <= 2) {
        start = 1
        end = numberOfPages
      } else if (currentpage + 1 >= totalPages) {
        start = totalPages - 2
        end = totalPages
      } else {
        start = currentpage - 1
        end = currentpage + 1
      }
    }
    let data = []
    for (let i = start; i <= end; i++) data.push(i)

    return data
  }
  console.log(instance.getState().pagination.pageIndex)
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
                  return <td key={cell.id}>{cell.renderCell()}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className='h-2' />
      <div className='row'>
        <div className='col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'>
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
                className={`paginate_button page-item previous ${
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
                className={`paginate_button page-item next ${
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
      </div>
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
