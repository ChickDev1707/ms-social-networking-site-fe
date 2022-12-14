/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { createSlice } from '@reduxjs/toolkit';
import { Post } from '../../../api/post/type/post.type';
import { User } from '../../../api/user/type/user.type';
import { extraReducers } from './homeReducers';

export interface HomeState {
  listPost: any[];
  listComment: any[];
  listRecommend: User[];
  isLoadComment: boolean;
  isShowPostDetail: boolean;
  selectedPost: Post;
  isLoading: boolean;
  loadListPostFail: boolean;
}
const initialState: HomeState = {
  listPost: [],
  listComment: [],
  listRecommend: [],
  isLoading: true,
  selectedPost: {} as Post,
  isShowPostDetail: false,
  isLoadComment: true,
  loadListPostFail: false
};

const HomeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setSelectedPost: (state: any, action: any): void => {
      return { ...state, selectedPost: action.payload };
    },
    setShowPostDetail: (state: any, action: any): void => {
      return { ...state, isShowPostDetail: action.payload };
    }
  },
  extraReducers
});
// Action creators are generated for each case reducer function
const { reducer: HomeReducer, actions } = HomeSlice;

export const { setSelectedPost, setShowPostDetail } = actions;

export default HomeReducer;
