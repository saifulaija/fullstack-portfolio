
import { AdminDashboardChart } from '@/components/adminDashboardChart/AdminDashboardChart'
import SectionHeading from '@/components/home/section-heading'
import React from 'react'

const SuperAdminDashboardPage = () => {
  return (
    <div>
     <SectionHeading>Welcome To Dashboard</SectionHeading>
      <AdminDashboardChart/>
    </div>
  )
}

export default SuperAdminDashboardPage