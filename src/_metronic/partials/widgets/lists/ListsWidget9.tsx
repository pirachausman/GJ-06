/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {AssemblyType} from '../../../../app/modules/browsedata/BrowseTypes'
import {KTSVG} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

export interface ListType {
  title: string
  subtitle: string
  id: string
  selected: boolean
}

type Props = {
  data: Array<ListType>
  className: string
  onChange: (e: any) => void
}

const ListsWidget9: React.FC<Props> = ({data, className, onChange}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Body */}
      <div className='card-body pt-10 px-0 d-flex flex-row flex-wrap'>
        {data.map((item) => (
          <div className='d-flex align-items-start mb-8 w-50 ' key={item.id}>
            {/* begin::Checkbox */}
            <div className='form-check form-check-custom form-check-solid me-5'>
              <input
                className='form-check-input'
                type='checkbox'
                value={item.id}
                checked={item.selected}
                onChange={onChange}
              />
            </div>
            {/* end::Checkbox */}
            {/* begin::Description */}
            <div className='flex-grow-1'>
              <a href='#' className='text-gray-800 text-hover-primary fw-bolder fs-6'>
                {item.title}
              </a>
              <span className='text-muted fw-bold d-block'>{item.subtitle}</span>
            </div>
            {/* end::Description */}
          </div>
        ))}
        {/* begin::Item */}

        {/* end:Item */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {ListsWidget9}
