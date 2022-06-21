/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'

type Props = {
  title: string
  subtitle: string
}
const Item9: FC<Props> = ({title, subtitle}: Props) => {
  return (
    <div className='timeline-item'>
      <div className='timeline-line w-40px'></div>

      <div className='timeline-icon symbol symbol-circle symbol-40px me-4'>
        <div className='symbol-label bg-light'>
          <KTSVG
            path='/media/icons/duotune/communication/com003.svg'
            className='svg-icon-2 svg-icon-gray-500'
          />
        </div>
      </div>

      <div className='timeline-content mb-10 mt-n1'>
        <div className='pe-3 mb-5'>
          <div className='fs-5 fw-bold mb-2'>{title}</div>

          <div className='d-flex align-items-center mt-1 fs-6'>
            <div className='text-muted me-2 fs-7'>{subtitle}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {Item9}
