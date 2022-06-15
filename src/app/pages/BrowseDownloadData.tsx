import React, {useMemo, useState} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../_metronic/layout/core'
import BrowseForm from '../modules/browsedata/BrowseForm'
import {BrowseTable} from '../modules/browsedata/BrowseTable'

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

const BrowseDownloadData = () => {
  const [, setFormData] = useState({})
  const renderTable = () => {
    setFormData({key: 123})
  }

  const ElectionForm_ = useMemo(() => <BrowseForm onFormChange={renderTable} />, [])
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

export const BrowseDownloadDataWrapper = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={PAGELINKS}>{intl.formatMessage({id: 'MENU.BROWSEDATA'})}</PageTitle>
      <BrowseDownloadData />
      {/* <span className='text-white fw-ultragbold'>{intl.formatMessage({id: 'MENU.LOK'})}</span> */}
      {/* &nbsp; //{' '} */}
      {/* <span className='text-danger fw-ultragbold'>{intl.formatMessage({id: 'MENU.DHABA'})}</span> */}
    </>
  )
}
