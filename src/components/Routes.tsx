import { Navigate, Outlet, Route, Routes as RoutesWrapper } from 'react-router-dom'

import MemberPage from 'pages/MemberPage'
import StartPage from 'pages/StartPage'
import Layout from 'pages/_layout'

export default function Routes() {
  return (
    <RoutesWrapper>
      <Route
        element={
          <Layout>
            <Outlet />
          </Layout>
        }
      >
        <Route path='/mitglied-werden' element={<MemberPage />} />
        <Route path='/' element={<StartPage />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Route>
    </RoutesWrapper>
  )
}
