import React, {useMemo, useState} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../_metronic/layout/core'
import {BarChart} from '../modules/overview/BarChart/BarChart'
import {OverviewHeader} from '../modules/overview/OverviewHeader'
import {data} from '../modules/overview/data'
import {SimpleTable} from '../modules/overview/Tables/SImpleTable'
const PAGELINKS = [
  {
    title: 'Home',
    path: '/home',
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
  const [selected, setSelected] = useState(0)
  const select = (id: number) => {
    console.log(id)
    setSelected(id)
  }

  const ElectionForm_ = useMemo(() => <OverviewHeader select={select} />, [])
  return (
    <div className='row gy-5 card pb-7 pe-lg-3 d-flex flex-lg-row bg-transparent'>
      <div className='col-lg-4'>
        <div className='card d-flex d-column p-5 bg-foreground'>
          <img
            id='india'
            alt=''
            src='https://github.com/srishti-gupta-me/Election_Dashboard/blob/main/map.png?raw=true'
            style={{maxWidth: '100%'}}
          />
          {ElectionForm_}
        </div>
      </div>
      <div className='col-lg-8 ps-3 px-lg-0'>
        {data[selected].graphs?.map((graph) => (
          <BarChart
            className='mb-5 mb-xl-8 bg-foreground px-5'
            title={graph.title}
            options={graph || {}}
            key={graph.title}
          />
        ))}
        {data[selected].tables?.map((table) => (
          <SimpleTable
            className='mb-5 mb-xl-8 bg-foreground px-5'
            head={table.titles || []}
            data={table.data || []}
            key={table.id}
          />
        ))}
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
