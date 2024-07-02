'use client'
import { useGetSingleBlogQuery } from "@/redux/features/blog/blogApi";





import Image from "next/image";
import ReactHtmlParser from "html-react-parser";
import { useState } from "react";







import { useToast } from "@/components/ui/use-toast";
import CustomLoader from "@/components/shared/customLoader/CustomLoader";

const BlogDetailsCard = ({ blogId }: { blogId: string }) => {

    const { data, isLoading } = useGetSingleBlogQuery(blogId);
 const blog=data?.data

    if (isLoading) {
        return <CustomLoader />
    }

    return (
        <div className="w-full p-2 md:p-10">
            <div className="wrapper border rounded-md">
                <div className="flex flex-col md:flex-row md:justify-between gap-6 space-y-8 md:space-y-0">
                    
                    <div className="w-full space-y-3">
                        <div className="relative w-full h-[500px]">
                            <Image
                                src={blog?.image || "/placeholder-image.jpg"}
                                alt="Blog Image"
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                                className="rounded-t-lg"
                            />
                        </div>
                        <div className="p-4">
                            <p className="text-xl font-semibold">Category:</p>
                            <p className="text-sm text-muted-foreground/90 font-medium capitalize">{blog?.category}</p>
                        </div>
                        <div className="px-2">
                            <p className="text-xl font-semibold">Title:</p>
                            <p className="text-sm text-muted-foreground/90 font-medium capitalize">{blog?.title}</p>
                        </div>
                        <div className="px-2">
                            <p className="text-xl font-semibold">Description:</p>
                            <div className="text-sm text-muted-foreground/90 font-medium capitalize">
                                {blog?.content ? ReactHtmlParser(blog.content) : "No description available"}
                            </div>
                        </div>
                        <div className="px-2 pb-6">
                            <p className="text-xl font-semibold">Conclusion:</p>
                            <p className="text-sm text-muted-foreground/90 font-medium capitalize">
                                {blog?.conclusion ? ReactHtmlParser(blog.conclusion) : "No conclusion available"}
                            </p>
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
    );
};

export default BlogDetailsCard;

