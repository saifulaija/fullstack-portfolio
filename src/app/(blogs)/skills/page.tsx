'use client'


import CreateProjectForm from '@/components/form/CreateProjectForm'
import MyDialog from '@/components/shadcn/MyDialog'
import CustomLoader from '@/components/shared/customLoader/CustomLoader'


import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useGetAllProjectsQuery } from '@/redux/features/project/projectApi'

import { ChevronRight, Search } from 'lucide-react'
import React, { useState } from 'react'

import { useGetAllSkillsQuery } from '@/redux/features/skill/skillApi'
import { frontendSkillColumn} from './components/frontendSkillColumn'
import { FrontendSkillDataTable } from './components/frontendSkillDataTable'

import AddBlogForm from '@/components/form/AddBlogForm'
import AddFrontendSkillForm from '@/components/form/AddFrontendSkill'
import { SkillsTab } from '@/components/shared/skillsTab/SkillsTab'
import { useGetAllFrontendSkillsQuery } from '@/redux/features/frontendSkill/frontendSkillApi'
import SectionHeading from '@/components/home/section-heading'
import { BackendSkillDataTable } from './components/backendSkillDataTable'
import { backendSkillColumn } from './components/backendSkillColumn'
import { useGetAllBackendSkillsQuery } from '@/redux/features/backendSkill/backendSkillApi'
import { useGetAllToolsSkillsQuery } from '@/redux/features/toolsSkill/tollsSkillApi'
import { ToolsSkillDataTable } from './components/toolsSkillDataTable'
import { toolsSkillColumn } from './components/toolsSkillColumn'



const SkillsPage = () => {
  const query: Record<string, any> = {};
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  query["page"] = page;
  query["limit"] = limit;
  const [q, setQ] = useState<string>("");


 

  const { data:frontendSkill, isLoading:frontendLoading } = useGetAllFrontendSkillsQuery({ ...query });
  const { data:backendSkill, isLoading:backendLoading } = useGetAllBackendSkillsQuery({ ...query });
  const { data:toolsSkill, isLoading:toolsLoading } = useGetAllToolsSkillsQuery({ ...query });

  return (
<div className="w-full">
  <div className=" flex justify-center items-center mb-5 space-y-2">
    {/* Search input */}
   
  <SkillsTab/>
  </div>
  <div className="flex-grow">
    <SectionHeading>All Frontend Skills</SectionHeading>
    {frontendLoading ? (
      <CustomLoader />
    ) : (
      <FrontendSkillDataTable data={frontendSkill?.data ?? []} columns={frontendSkillColumn} />
    )}
  </div>
  <div className="flex-grow">
    <SectionHeading>All Backend Skills</SectionHeading>
    {backendLoading ? (
      <CustomLoader />
    ) : (
      <BackendSkillDataTable data={backendSkill?.data ?? []} columns={backendSkillColumn} />
    )}
  </div>
  <div className="flex-grow">
    <SectionHeading>All Tools Skills</SectionHeading>
    {backendLoading ? (
      <CustomLoader />
    ) : (
      <ToolsSkillDataTable data={toolsSkill?.data ?? []} columns={toolsSkillColumn} />
    )}
  </div>
</div>

  )
}

export default SkillsPage