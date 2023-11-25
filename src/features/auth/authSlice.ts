import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { useAppSelector } from "../../hooks/useAppSelector";
import { TAuthToken } from "../../types/Auth";

type AuthSliceInitialState = {
  token: string | null;
};

const initialState: AuthSliceInitialState = {
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<TAuthToken>) => {
      const { accessToken } = action.payload;
      state.token = accessToken;
    },
    logOut: (state) => {
      state.token = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

// export const selectCurrentToken =() => useAppSelector((state: RootState)) => state.auth.token;

export const useCurrentTokenSelector = () =>
  useAppSelector((state: RootState) => state.auth.token);
