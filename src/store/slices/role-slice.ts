import { createSlice } from '@reduxjs/toolkit';

const initialRole: number = 3;

export const roleSlice = createSlice({
  name: 'role',
  initialState: {
    role: initialRole,
  },
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const { setRole } = roleSlice.actions;

export default roleSlice.reducer;
