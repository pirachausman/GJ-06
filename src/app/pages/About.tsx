import React from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../_metronic/layout/core'

const About = () => {
  return (
    <div className='row gy-5 g-xl-8 card py-5 px-5 bg-background'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel
      sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam
      eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae
      consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto
      fuga praesentium optio, eaque rerum! Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
      numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque
      rerum!
    </div>
  )
}

export const AboutWrapper = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.ABOUT'})}</PageTitle>
      <About />
      {/* <span className='text-white fw-ultragbold'>{intl.formatMessage({id: 'MENU.LOK'})}</span> */}
      {/* &nbsp; //{' '} */}
      {/* <span className='text-danger fw-ultragbold'>{intl.formatMessage({id: 'MENU.DHABA'})}</span> */}
    </>
  )
}
