import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
    initialState: {
        blogs: [],
            page: 1,
                totalPages: 1,
                  },
                    reducers: {
                        setBlogs: (state, action) => {
                              state.blogs = action.payload;
                                  },
                                    },
                                    });

                                    export const { setBlogs } = blogSlice.actions;
                                    export default blogSlice.reducer;