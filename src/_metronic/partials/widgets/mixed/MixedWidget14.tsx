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
        backgroundImage: `url(${toAbsoluteUrl(bgimage)})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* begin::Body */}
      <div className='card-body d-flex align-items-center pt-3 pb-0'>
        <div className='d-flex flex-column py-lg-13 py-2 me-2 flex-grow-1'>
          <a
            href='#'
            className='fw-bolder text-white fs-2x mb-2 text-hover-primary flex-grow-1'
            dangerouslySetInnerHTML={{__html: title}}
            style={{maxWidth: '60%'}}
          ></a>

          <a
            href='#'
            className='btn btn-radius btn-bg-danger w-150px btn-color-white mt-5'
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
