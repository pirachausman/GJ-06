/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import {PageTitle} from '../../../_metronic/layout/core'
import {ListsWidget4, EngageWidget5} from '../../../_metronic/partials/widgets'
import {MixedWidget12} from '../../../_metronic/partials/widgets/mixed/MixedWidget12'
import {MixedWidget13} from '../../../_metronic/partials/widgets/mixed/MixedWidget13'
import {MixedWidget14} from '../../../_metronic/partials/widgets/mixed/MixedWidget14'

const DashboardPage: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row gy-5 g-xl-8'>
      <div className='col-xxl-4'>
        <ListsWidget4
          className='card-xl-stretch mb-5 mb-xl-8'
          items={3}
          chartColor='success'
          chartHeight='200px'
        />
      </div>
      <div className='d-flex flex-column col-xxl-8'>
        <div className='d-flex flex-row' style={{height: '33%'}}>
          <MixedWidget12
            className='card-xxl-stretch mb-xl-8 col-xxl-4 me-5'
            title='Datasets'
            description=''
            bgimage='/media/stock/600x400/img-4.jpg'
          />
          <MixedWidget13
            className='card-xxl-stretch mb-xl-8 col-xxl-8 bg-dark'
            title='Trivedi Center for Political Data '
            description=''
          />
        </div>
        <div className='d-flex flex-row ' style={{height: '67%'}}>
          <div className='col-xxl-6 me-5'>
            <MixedWidget14
              className='card-xxl-stretch-50 mb-xl-8'
              title='Browse <br/>Documentation'
              description=''
              bgimage='/media/stock/600x400/img-33.jpg'
            />
            <MixedWidget12
              className='card-xxl-stretch-50 mb-xl-8'
              title=''
              description=''
              bgimage='/media/misc/pattern-2.png'
            />
          </div>
          <div className='col-xxl-6'>
            <EngageWidget5 className='mb-xl-8 bg-black text-white card-xxl-stretch p-5'>
              <span className='text-white'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae
                quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis
                harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
                Provident similique accusantium nemo autem. Veritatis obcaecati tenetr iure eius
                earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia
                aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis
                quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga?
              </span>
            </EngageWidget5>
          </div>
        </div>

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
        {/* <span className='text-white fw-ultragbold'>{intl.formatMessage({id: 'MENU.LOK'})}</span> */}
        {/* &nbsp; //{' '} */}
        {/* <span className='text-danger fw-ultragbold'>{intl.formatMessage({id: 'MENU.DHABA'})}</span> */}
      </PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
