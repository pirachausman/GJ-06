import React, {useMemo, useState} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../_metronic/layout/core'
import {BrowseTable} from '../modules/browsedata/BrowseTable'
import {OverviewHeader} from '../modules/overview/OverviewHeader'

const PAGELINKS = [
  {
    title: 'Home',
    path: '/dashboard',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const Overview = () => {
  const [, setSelected] = useState(0)
  const select = (id: number) => {
    setSelected(id)
  }

  const ElectionForm_ = useMemo(() => <OverviewHeader select={select} />, [])
  return (
    <div className='row gy-5 card pb-7 pe-lg-3 d-flex flex-lg-row bg-transparent'>
      <div className='col-lg-4'>
        <div className='card d-flex d-column p-5 bg-foreground'>{ElectionForm_}</div>
      </div>
      <div className='col-lg-8 ps-3 px-lg-0'>
        <BrowseTable className='mb-5 mb-xl-8 bg-foreground px-5' />
      </div>
    </div>
  )
}

export const OveriewWrapper = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={PAGELINKS}>
        {intl.formatMessage({id: 'MENU.OVERVIEWTITLE'})}
      </PageTitle>
      <Overview />
      {/* <span className='text-white fw-ultragbold'>{intl.formatMessage({id: 'MENU.LOK'})}</span> */}
      {/* &nbsp; //{' '} */}
      {/* <span className='text-danger fw-ultragbold'>{intl.formatMessage({id: 'MENU.DHABA'})}</span> */}
    </>
  )
}
