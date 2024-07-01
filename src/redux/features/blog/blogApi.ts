


import { baseApi } from "../../api/baseApi";

const blogApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createBlog: builder.mutation({
            query: (projectInfo) => ({
                url: "/blog/create-blog",
                method: "POST",
                body: projectInfo,
            }),
            invalidatesTags: ["blog"],
        }),

        updateBlog: builder.mutation({
            query: (options) => {
                console.log({ options })
                return {
                    url: `/products/update-product/${options.productId}`,
                    method: "PATCH",
                    body: options.data,
                };
            },
            invalidatesTags: ["project"],
        }),
   

        getAllBlogs: builder.query({
            query: () => {
                return {
                    url: '/blog',
                    method: "GET",
                };
            },
            providesTags: ['blog']
        }),

        getSingleBlog: builder.query({
            query: (id) => {
                return {
                    url: `/blog/${id}`,
                    method: "GET",
                };
            },
            providesTags: ['project']
        }),

        deleteBlog: builder.mutation({
            query: (id) => ({
                url: `/blog/delete-blog/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["blog"],
        }),
    }),
});

export const {
 useCreateBlogMutation,
 useGetAllBlogsQuery,
 useGetSingleBlogQuery,
useDeleteBlogMutation,
 useUpdateBlogMutation
} = blogApi;
