


import { baseApi } from "../../api/baseApi";

const skillApi = baseApi.injectEndpoints({
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
        createSkill: builder.mutation({
            query: (skillInfo) => ({
                url: "/skill/create-skill",
                method: "POST",
                body: skillInfo,
            }),
            invalidatesTags: ["skill"],
        }),

        getAllSkills: builder.query({
            query: () => {
                return {
                    url: '/skill/get-skills',
                    method: "GET",
                };
            },
            providesTags: ['skill']
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

        deleteSkill: builder.mutation({
            query: (id) => ({
                url: `/skill/delete-skill/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["skill"],
        }),
    }),
});

export const {
    useCreateSkillMutation,
    useGetAllSkillsQuery,
    useDeleteSkillMutation
} = skillApi;
