/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'

type Props = {
  className: string
  data: {title: string; subtitle: string}[]
  selectCallback: (id: number) => void
}

const ListsWidget10: React.FC<Props> = ({className, data, selectCallback}) => {
  const [selected, setSelected] = useState(0)
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header align-items-center border-0 mt-4'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='fw-bolder mb-2 text-primary'>Metrics</span>
          <span className='text-muted fw-bold fs-7'>
            Check out metrics for Goa, Manipur, Punjab, Uttarakhand and Uttar Pradesh
          </span>
        </h3>
        <div className='card-toolbar'>
          {/* begin::Menu */}

          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body pt-5 d-flex flex-row'>
        {/* begin::Timeline */}
        <div className='timeline-label d-flex flex-column w-100'>
          {/* begin::Item */}
          {data.map((row, id) => {
            return (
              <div className='timeline-item' key={new Date().getTime() + id}>
                {/* begin::Label */}
                <div className='fw-bolder timeline-label text-gray-800 fs-6'>{row.subtitle}</div>
                {/* end::Label */}
                {/* begin::Badge */}
                <div className='timeline-badge'>
                  <i className='fa fa-genderless text-primary fs-1'></i>
                </div>
                {/* end::Badge */}
                {/* begin::Text */}
                <div className='fw-mormal timeline-content ps-3'>
                  <a
                    href={'#' + row.title}
                    onClick={() => {
                      selectCallback(id)
                      setSelected(id)
                    }}
                    className={`${
                      id === selected ? 'text-primary' : 'text-muted'
                    } bg-transparent text-hover-primary  pe-0  border-primary border-dashed`}
                    style={{
                      textAlign: 'left',
                      border: 0,
                      borderBottomWidth: id === selected ? 1 : 0,
                    }}
                  >
                    {row.title}
                  </a>
                </div>
                {/* end::Text */}
              </div>
            )
          })}
          {/* end::Item */}
        </div>

        {/* end::Timeline */}
      </div>
      {/* end: Card Body */}
    </div>
  )
}

export {ListsWidget10}
