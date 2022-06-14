import React, {useMemo, useState} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../_metronic/layout/core'
import {ChartsWidget9} from '../../_metronic/partials/widgets/charts/ChartsWidget9'
import ElectionForm from '../modules/visualization/components/ElectionForm'

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

const DataVisualization = () => {
  const [, setFormData] = useState({})
  const renderChart = () => {
    setFormData({key: 123})
  }

  const ElectionForm_ = useMemo(() => <ElectionForm onFormChange={renderChart} />, [])
  return (
    <div className='row gy-5 card pb-7 pe-lg-3 d-flex flex-lg-row bg-transparent'>
      <div className='col-lg-4'>
        <div className='card d-flex d-column p-5 card-stretch h-100 bg-foreground'>
          {ElectionForm_}
        </div>
      </div>
      <div className='col-lg-8 ps-3 px-lg-0'>
        <div className='card '>
          <ChartsWidget9 className={'bg-foreground'} />
        </div>
      </div>
    </div>
  )
}

export const DataVisualizationWrapper = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={PAGELINKS}>
        {intl.formatMessage({id: 'MENU.DATAVISUALIZATION'})}
      </PageTitle>
      <DataVisualization />
      {/* <span className='text-white fw-ultragbold'>{intl.formatMessage({id: 'MENU.LOK'})}</span> */}
      {/* &nbsp; //{' '} */}
      {/* <span className='text-danger fw-ultragbold'>{intl.formatMessage({id: 'MENU.DHABA'})}</span> */}
    </>
  )
}
