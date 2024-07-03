


import { baseApi } from "../../api/baseApi";

const projectApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        updateProject: builder.mutation({
            query: (options) => {
                console.log({ options })
                return {
                    url: `/project/update-project/${options.id}`,
                    method: "PATCH",
                    body: options.body,
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
                    url: '/project',
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
                url: `/project/delete-project/${id}`,
                method: "DELETE",
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
