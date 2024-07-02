

import { baseApi } from "../../api/baseApi";
const backendSkillApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createBackendSkill: builder.mutation({
            query: (backendSkillInfo) => ({
                url: "/backend/create-backend-skill",
                method: "POST",
                body: backendSkillInfo,
            }),
            invalidatesTags: ["backendSkill"],
        }),

        updateBackendSkill: builder.mutation({
            query: (options) => {
                console.log({ options })
                return {
                    url: `/backend/update-backend-skill/${options.id}`,
                    method: "PATCH",
                    body: options.body,
                };
            },
            invalidatesTags: ["backendSkill"],
        }),
        getAllBackendSkills: builder.query({
            query: () => {
                return {
                    url: '/backend',
                    method: "GET",
                };
            },
            providesTags: ['backendSkill']
        }),

        getSingleBackendSkill: builder.query({
            query: (id) => {
                return {
                    url: `/backend/${id}`,
                    method: "GET",
                };
            },
            providesTags: ['backendSkill']
        }),

        deleteBackendSkill: builder.mutation({
            query: (id) => ({
                url: `/backend/delete-backend-skill/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["backendSkill"],
        }),
    }),
});

export const {
useCreateBackendSkillMutation,
useGetAllBackendSkillsQuery,
useGetSingleBackendSkillQuery,
useDeleteBackendSkillMutation,
useUpdateBackendSkillMutation
} = backendSkillApi;
