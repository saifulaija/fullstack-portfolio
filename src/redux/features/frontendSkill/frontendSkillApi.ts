
import { baseApi } from "../../api/baseApi";
const frontendSkillApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createFrontendSkill: builder.mutation({
            query: (frontendSkillInfo) => ({
                url: "/frontend/create-frontend-skill",
                method: "POST",
                body: frontendSkillInfo,
            }),
            invalidatesTags: ["frontendSkill"],
        }),

        updateFrontendSkill: builder.mutation({
            query: (options) => {
                console.log({ options })
                return {
                    url: `/frontend/update-frontend-skill/${options.id}`,
                    method: "PATCH",
                    body: options.body,
                };
            },
            invalidatesTags: ["frontendSkill"],
        }),
        getAllFrontendSkills: builder.query({
            query: () => {
                return {
                    url: '/frontend',
                    method: "GET",
                };
            },
            providesTags: ['frontendSkill']
        }),

        getSingleFrontendSkill: builder.query({
            query: (id) => {
                return {
                    url: `/frontend/${id}`,
                    method: "GET",
                };
            },
            providesTags: ['frontendSkill']
        }),

        deleteFrontendSkill: builder.mutation({
            query: (id) => ({
                url: `/frontend/delete-frontend-skill/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["frontendSkill"],
        }),
    }),
});

export const {
useCreateFrontendSkillMutation,
useGetAllFrontendSkillsQuery,
useGetSingleFrontendSkillQuery,
useDeleteFrontendSkillMutation,
useUpdateFrontendSkillMutation
} = frontendSkillApi;
