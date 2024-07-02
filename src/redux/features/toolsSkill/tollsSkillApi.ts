
import { baseApi } from "../../api/baseApi";
const toolsSkillApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createToolsSkill: builder.mutation({
            query: (toolsSkillInfo) => ({
                url: "/tool/create-tool-skill",
                method: "POST",
                body:toolsSkillInfo,
            }),
            invalidatesTags: ["toolsSkill"],
        }),

        updateToolsSkill: builder.mutation({
            query: (options) => {
                console.log({ options })
                return {
                    url: `/tool/update-tool-skill/${options.id}`,
                    method: "PATCH",
                    body: options.body,
                };
            },
            invalidatesTags: ["toolsSkill"],
        }),
        getAllToolsSkills: builder.query({
            query: () => {
                return {
                    url: '/tool',
                    method: "GET",
                };
            },
            providesTags: ['toolsSkill']
        }),

        getSingleToolsSkill: builder.query({
            query: (id) => {
                return {
                    url: `/tool/${id}`,
                    method: "GET",
                };
            },
            providesTags: ['toolsSkill']
        }),

        deleteToolsSkill: builder.mutation({
            query: (id) => ({
                url: `/tool/delete-tool-skill/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["toolsSkill"],
        }),
    }),
});

export const {
useGetAllToolsSkillsQuery,
useCreateToolsSkillMutation,
useGetSingleToolsSkillQuery,
useDeleteToolsSkillMutation,
useUpdateToolsSkillMutation
} = toolsSkillApi;
