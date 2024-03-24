import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { customFetch } from "../../utils/axios";
import { toast } from "react-toastify";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "../../utils/localStorage";

const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  user: getUserFromLocalStorage(),
};

export const userRegister = createAsyncThunk(
  "user/register",
  async (user, thunkAPI) => {
    try {
      const response = await customFetch.post("/auth/register", user);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.msg);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async (user, thunkAPI) => {
    try {
      const response = await customFetch.post("/auth/login", user);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.msg);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    logOutUser: (state) => {
      state.user = null;
      state.isSidebarOpen = false;
      removeUserFromLocalStorage();
      toast.success("Logged out");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userRegister.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userRegister.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`Welcome ${user.name}`);
      })
      .addCase(userRegister.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`Welcome back ${user.name}`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export const { toggleSidebar, logOutUser } = userSlice.actions;

export default userSlice.reducer;
