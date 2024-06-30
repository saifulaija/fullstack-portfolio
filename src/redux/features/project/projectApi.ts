


import { baseApi } from "../../api/baseApi";

const projectApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        updateProject: builder.mutation({
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
        createProject: builder.mutation({
            query: (projectInfo) => ({
                url: "/project/create-project",
                method: "POST",
                body: projectInfo,
            }),
            invalidatesTags: ["project"],
        }),

        getAllProjects: builder.query({
            query: () => {
                return {
                    url: '/project/get-projects',
                    method: "GET",
                };
            },
            providesTags: ['project']
        }),

        getSingleProjects: builder.query({
            query: (id) => {
                return {
                    url: `/project/${id}`,
                    method: "GET",
                };
            },
            providesTags: ['project']
        }),

        deleteProjects: builder.mutation({
            query: (id) => ({
                url: `/products/delete-product/${id}`,
                method: "PATCH",
            }),
            invalidatesTags: ["project"],
        }),
    }),
});

export const {
    useCreateProjectMutation,
    useGetAllProjectsQuery,
    useGetSingleProjectsQuery,
    useDeleteProjectsMutation,
    useUpdateProjectMutation

} = projectApi;
