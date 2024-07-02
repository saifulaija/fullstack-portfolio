
import { Metadata } from 'next';
import React from 'react'
import Blogs from './components/Blogs';
export const metadata: Metadata = {
  title: "All-blogs || BlogPlex ",
  description: 'An Porfolio built with Next.js, MongoDB, Shadcn signin'
};

const AllBlogsPage = () => {
  return (
    <div className='mt-5'>
      <Blogs/>
    </div>
  )
}

export default AllBlogsPage