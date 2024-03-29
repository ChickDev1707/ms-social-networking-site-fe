import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authAPI from '../../api/auth/AuthApi';
import { LoginParams } from '../../api/auth/type/login.type';
import { ApiResponse } from '../../api/api-response.type';
import { AuthState } from './state.type';

export const login = createAsyncThunk(
  'auth/login',
  async (params: LoginParams, thunkAPI): Promise<ApiResponse> => {
    try {
      const response: ApiResponse = await authAPI.login(params);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data) as unknown as ApiResponse;
    }
  }
);

const LoginSlice = createSlice({
  name: 'login',
  initialState: {
    currentUser: {},
    listUser: [],
    loading: false,
    error: '',
    isLogin: false
  },
  reducers: {
    updateCurrentUser: (state: AuthState, action: any) => {
      state.currentUser = action.payload;
    }
  },
  extraReducers: {
    // Login
    [login.pending.toString()]: (state: AuthState) => {
      state.loading = true;
    },

    [login.rejected.toString()]: (state: AuthState, action: any) => {
      state.loading = false;
      state.isLogin = true;
      state.error = 'Đăng nhập thất bại !';
    },

    [login.fulfilled.toString()]: (state: AuthState, action: any) => {
      state.loading = false;
      state.isLogin = true;
      state.error = '';
      localStorage.setItem('accessToken', JSON.stringify(action.payload.data.accessToken));
      state.currentUser = action.payload.data.currentUser;
      localStorage.setItem('currentUser', JSON.stringify(action.payload.data.user));
    }
  }
});

export const { reducer: LoginReducer, actions } = LoginSlice;
export const { updateCurrentUser } = LoginSlice.actions;
// export const { logout } = actions;
export default LoginReducer;
