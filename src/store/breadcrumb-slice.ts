import { createSlice } from "@reduxjs/toolkit";

interface IBreadcrumbStateProps {
  crumbs: { label: string; href: string }[];
}

const initialState: IBreadcrumbStateProps = {
  crumbs: [],
};

const breadcrumbSlice = createSlice({
  name: "breadcrumb",
  initialState,
  reducers: {
    setBreadcrumbs: (state, action) => {
      state.crumbs = action.payload;
    },
  },
});

export const { setBreadcrumbs } = breadcrumbSlice.actions;
export const breadcrumbReducer = breadcrumbSlice.reducer;
