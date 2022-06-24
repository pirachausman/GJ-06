import React from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import {DashboardWrapper} from '../pages/DashboardWrapper'
import {DataVisualizationWrapper} from '../pages/DataVisualisation'
import {DocumentationWrapper} from '../pages/Documentation'
import {BrowseDownloadDataWrapper} from '../pages/BrowseDownloadData'
import {OveriewWrapper} from '../pages/2022Overview'
import {AboutWrapper} from '../pages/About'

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='overview' element={<OveriewWrapper />} />
        <Route path='browse' element={<BrowseDownloadDataWrapper />} />
        <Route path='about' element={<AboutWrapper />} />
        <Route path='data-visualization' element={<DataVisualizationWrapper />} />
        <Route path='documentation' element={<DocumentationWrapper />} />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

export {PrivateRoutes}
