/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {toAbsoluteUrl} from '../../../helpers'

type Props = {
  className: string
  title: string
  description: string
  bgimage: string
}

const MixedWidget14: React.FC<Props> = ({className, title, description, bgimage}) => {
  return (
    <div
      className={`card ${className}`}
      style={{
        backgroundPosition: 'left top',
        backgroundSize: '100% auto',
        backgroundImage: `url(${toAbsoluteUrl(bgimage)})`,
      }}
    >
      {/* begin::Body */}
      <div className='card-body d-flex align-items-center pt-3 pb-0'>
        <div className='d-flex flex-column py-lg-13 py-2 me-2'>
          <a
            href='#'
            className='fw-bolder text-white fs-3 mb-2 text-hover-primary'
            dangerouslySetInnerHTML={{__html: title}}
          ></a>

          <a
            href='#'
            className='btn btn-bg-danger btn-color-white mt-5'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_create_app'
            id='kt_toolbar_primary_button'
          >
            Explore
          </a>
        </div>
      </div>
      {/* end::Body */}
    </div>
  )
}

export {MixedWidget14}
