
import { Metadata } from 'next';
import React from 'react'
import Blogs from './components/Blogs';
export const metadata: Metadata = {
  title: "All-blogs || BlogPlex ",
  description: 'An BlogPlex built with Next.js, Postgres, Shadcn signin'
};

const AllBlogsPage = () => {
  return (
    <div className='mt-5'>
      <Blogs/>
    </div>
  )
}

export default AllBlogsPage