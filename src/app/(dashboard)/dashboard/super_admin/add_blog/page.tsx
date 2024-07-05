'use client'



import MyDialog from '@/components/shadcn/MyDialog'
import CustomLoader from '@/components/shared/customLoader/CustomLoader'


import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'


import { ChevronRight, Search } from 'lucide-react'
import React, { useState } from 'react'

import AddBlogForm from '@/components/form/AddBlogForm'

import { useGetAllBlogsQuery } from '@/redux/features/blog/blogApi'
import { BlogDataTable } from '@/app/(blogs)/add-blog/components/blogDataTable'
import { blogColumn } from '@/app/(blogs)/add-blog/components/blogColumn'



const AddBlogPage = () => {
  const query: Record<string, any> = {};
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(2);
  query["page"] = page;
  query["limit"] = limit;
  const [q, setQ] = useState<string>("");


 

  const { data, isLoading } = useGetAllBlogsQuery({ ...query });
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
            <span>Add Blog</span>
            <ChevronRight className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1" />
          </Button>
        }
      >
       <AddBlogForm/>
      </MyDialog>
    </div>
    <div className="flex  items-center w-full md:w-auto mb-4 md:mb-0">
      <div className="relative w-full md:w-96">
        <Search className="absolute top-2.5 right-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search by name, email, role, address..."
          className="w-full pl-8 bg-background shadow-none appearance-none rounded-md py-2 px-4 focus:outline-none focus:ring-0"
        />
      </div>
    </div>
  </div>
  <div className="flex-grow">
    {isLoading ? (
      <CustomLoader />
    ) : (
      <BlogDataTable data={data?.data ?? []} columns={blogColumn} />
    )}
  </div>
</div>

  )
}

export default AddBlogPage