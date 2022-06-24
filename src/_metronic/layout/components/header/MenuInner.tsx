import React from 'react'
import {MenuItem} from './MenuItem'
import {useIntl} from 'react-intl'

export function MenuInner() {
  const intl = useIntl()
  return (
    <>
      <MenuItem title={intl.formatMessage({id: 'MENU.HOME'})} to='/home' />
      <MenuItem title={intl.formatMessage({id: 'MENU.2022'})} to='/overview' />
      <MenuItem
        title={intl.formatMessage({id: 'MENU.DATAVISUALIZATION'})}
        to='/data-visualization'
      />
      <MenuItem title={intl.formatMessage({id: 'MENU.BROWSEDATA'})} to='/browse' />
      <MenuItem title={intl.formatMessage({id: 'MENU.POLITICALCAREER'})} to='#' />
      <MenuItem title={intl.formatMessage({id: 'MENU.DOCUMENTATION'})} to='/documentation' />
    </>
  )
}
