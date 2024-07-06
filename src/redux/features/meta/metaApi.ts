
import { baseApi } from "../../api/baseApi";
const metaApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
       

       
        getMetaData: builder.query({
            query: () => {
                return {
                    url: '/meta',
                    method: "GET",
                };
            },
            providesTags: ['meta']
        }),

       

       
    }),
});

export const {
useGetMetaDataQuery
} = metaApi;
