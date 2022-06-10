/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

type Props = {
  className: string
  title: string
  description: string
}

const MixedWidget13: React.FC<Props> = ({className, title, description}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Body */}
      <div className='card-body d-flex align-items-center pt-3 pb-0'>
        <div className='d-flex flex-row flex-grow-1 py-lg-13 py-2 me-2'>
          <a href='#' className='fw-bolder text-muted flex-grow-1 fs-4 mb-2 text-hover-primary'>
            {title}
          </a>

          <a
            href='#'
            className='btn btn-bg-primary btn-color-white'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_create_app'
            id='kt_toolbar_primary_button'
          >
            Learn More
          </a>
        </div>
      </div>
      {/* end::Body */}
    </div>
  )
}

export {MixedWidget13}
