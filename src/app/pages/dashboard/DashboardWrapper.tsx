/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import {PageTitle} from '../../../_metronic/layout/core'
import {EngageWidget5} from '../../../_metronic/partials/widgets'
import {MixedWidget13} from '../../../_metronic/partials/widgets/mixed/MixedWidget13'
import {MixedWidget14} from '../../../_metronic/partials/widgets/mixed/MixedWidget14'

const DashboardPage: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row gy-5 g-xl-8'>
      <div className='col-lg-6 d-flex flex-column'>
        <MixedWidget14
          className='card-lg-stretch mb-8 h-box h-md-400px'
          title='2022 AE: An Overview'
          description=''
          bgimage='/media/misc/3.png'
          link='/dashboard'
        />
        <EngageWidget5 className='mb-8 p-10 bg-redgradient'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas
          vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum
          quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi
          repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed
          odit fugiat iusto fuga praesentium optio, eaque rerum! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae
          consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat
          iusto fuga praesentium optio, eaque rerum!
        </EngageWidget5>
        <MixedWidget14
          className='card-lg-stretch mb-8 h-box h-md-400px'
          title='Political Career Tracker'
          description=''
          bgimage='/media/misc/4.png'
          link='/dashboard'
        />
      </div>
      <div className='d-flex flex-column col-lg-6'>
        <MixedWidget13
          className='mb-8 bg-danger py-lg-0 py-10'
          title='Trivedi Center for Political Data'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
          optio, eaque rerum!'
        />
        <MixedWidget14
          className='card-lg-stretch mb-8 h-box-small'
          title='Data Visualisation'
          description=''
          bgimage='/media/misc/5.png'
          link='/data-visualization'
        />
        <MixedWidget14
          className='card-lg-stretch mb-8 h-box-small'
          title='Browse Documentation'
          description=''
          bgimage='/media/misc/2.png'
          link='/documentation'
        />
        <MixedWidget14
          className='card-lg-stretch mb-8 h-box-small'
          title='Browse/Download Data'
          description=''
          bgimage='/media/misc/1.png'
          link='/browse'
        />
        {/* <div className='d-flex flex-row'>
          <div className='col-xxl-4 me-5'></div>
          <div className='col-xxl-8'>
            
          </div>
        </div> */}
      </div>
    </div>
    {/* end::Row */}

    {/* <div className='d-flex flex-column col-xxl-8'>
        <div className='d-flex flex-row'>
          <div className='col-xxl-4 me-5'>
           
          </div>
          <div className='col-xxl-8'>
            <MixedWidget13
              className='card-xxl-stretch mb-xl-8 bg-dark'
              title='Trivedi Center for Political Data '
              description=''
            />
          </div>
        </div>
      </div> */}
    {/* <div className='d-flex flex-row col-xxl-stretch'>
          <div className='d-flex flex-column col-xxl-6 col-xxl-stretch me-5'>
            <div className='col-xxl'>
              <MixedWidget13
                className='card-xxl-stretch mb-xl-8 bg-dark'
                title='Trivedi Center for Political Data '
                description=''
              />
            </div>
            <div className='col-xxl'>
              <MixedWidget13
                className='card-xxl-stretch mb-xl-8 bg-dark'
                title='Trivedi Center for Political Data '
                description=''
              />
            </div>
          </div>
        </div> */}
    {/* <div className='col-xxl-6'>
            <div className='col-xxl'>
              <EngageWidget5 className='mb-xl-8 bg-black text-white'>
                <span className='text-white'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                  numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                  optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                  obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil,
                  eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                  harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error
                  repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt
                  excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime
                  adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum
                  voluptates a cumque velit
                </span>
              </EngageWidget5>
            </div>
          </div> */}
  </>
)

const DashboardWrapper: FC = () => {
  //const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>
        <img
          alt='Logo'
          src={toAbsoluteUrl('/media/logos/logo_large.png')}
          className='logo-default'
        />
      </PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
