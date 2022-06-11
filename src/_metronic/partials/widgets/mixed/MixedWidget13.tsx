/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

type Props = {
  className: string
  title: string
  description: string
}

const MixedWidget13: React.FC<Props> = ({className, title, description}) => {
  return (
    <div
      className={`card ${className}`}
      style={{
        background: 'linear-gradient(100deg, rgba(235, 33, 57, 1) 0%, rgba(147, 41, 30, 1) 100%)',
      }}
    >
      {/* begin::Body */}
      <div className='card-body d-flex align-items-center pt-3 pb-0'>
        <div className='d-flex flex-column flex-grow-1 py-lg-13 py-2 me-2 '>
          <a href='#' className='fw-bolder text-white flex-grow-1 fs-4 mb-2 text-hover-primary'>
            {title}
          </a>
          <span className='text-white'>{description}</span>
        </div>
      </div>
      {/* end::Body */}
    </div>
  )
}

export {MixedWidget13}
