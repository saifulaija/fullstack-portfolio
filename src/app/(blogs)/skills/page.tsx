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
import { skillColumn } from './components/skillColumn'
import { SkillDataTable } from './components/skillDataTable'
import CreateSkillForm from '@/components/form/CreateSkillForm'



const ProjectsPage = () => {
  const query: Record<string, any> = {};
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  query["page"] = page;
  query["limit"] = limit;
  const [q, setQ] = useState<string>("");


 

  const { data, isLoading } = useGetAllSkillsQuery({ ...query });
  console.log(data)


  const meta = data?.meta;

  const handlePrePage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < pageCount) {
      setPage(page + 1);
    }
  };

  const pageCount = meta?.total ? Math.ceil(meta.total / limit) : 0;
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);
  return (
<div className="w-full">
  <div className="md:flex md:justify-between items-center mb-5 space-y-2">
    {/* Search input */}
    <div className='flex items-center justify-center mx-auto md:mx-0'>
      <MyDialog
        triggerButton={
          <Button className="group flex items-center gap-2 bg-primary text-white rounded-md py-2 px-4 hover:bg-primary-dark focus:outline-none focus:ring focus:border-primary-dark">
            <span>Create Skills</span>
            <ChevronRight className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1" />
          </Button>
        }
      >
       <CreateSkillForm/>
      </MyDialog>
    </div>
  
  </div>
  <div className="flex-grow">
    {isLoading ? (
      <CustomLoader />
    ) : (
      <SkillDataTable data={data?.data ?? []} columns={skillColumn} />
    )}
  </div>
</div>

  )
}

export default ProjectsPage