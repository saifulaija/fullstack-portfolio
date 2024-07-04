


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
                    url: `/blog/update-blog/${options.id}`,
                    method: "PATCH",
                    body: options.body,
                };
            },
            invalidatesTags: ["blog"],
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
                url: `/blog/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["blog"],
        }),
        countVote: builder.mutation({
            query: (options) => ({
                url: `/blog/vote-blog/${options.id}`,
                method: "PATCH",
                body: { action: options.action },
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
 useUpdateBlogMutation,
 useCountVoteMutation
} = blogApi;
