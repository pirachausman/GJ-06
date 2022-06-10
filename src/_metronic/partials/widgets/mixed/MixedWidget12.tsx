/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {toAbsoluteUrl} from '../../../helpers'

type Props = {
  className: string
  title: string
  description: string
  bgimage: string
}

const MixedWidget12: React.FC<Props> = ({className, title, description, bgimage}) => {
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
      <div className='card-body d-flex pt-3 pb-0'>
        <div className='d-flex flex-column flex-grow-1 py-5 me-2'>
          <a href='#' className='fw-bolder text-dark fs-4 mb-2 text-hover-primary'>
            {title}
          </a>

          <span
            className='fw-bold text-muted fs-5'
            dangerouslySetInnerHTML={{__html: description}}
          ></span>
        </div>
      </div>
      {/* end::Body */}
    </div>
  )
}

export {MixedWidget12}
