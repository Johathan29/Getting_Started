import React from 'react'
import Layout from '@theme/Layout'

import UpdatesList from '../../components/UpdatesSection/UpdatesList'
import { useLocation } from 'react-router-dom'
import UpdateSlugPage from '../../components/UpdatesSection/UpdateSlugPage'

export default function UpdatesPage() {
    const location = useLocation()
  const isDetail = location.pathname !== '/updates'
  return (
    <Layout title="Actualizaciones">
         {isDetail ? (
        <UpdateSlugPage />)
        :(
      <main className=" margin-vert--lg">
        <div className='container mx-auto'>
            <UpdatesList />
        </div>
      </main>)}
    </Layout>
  )
}