import { createAsyncThunk } from '@reduxjs/toolkit';
import postAPI from '../../../api/post/PostApi';
import { CreateCommentDto } from '../../../api/post/type/create-comment.dto';
import { LikeDto } from '../../../api/post/type/like.dto';
import { FollowParams } from '../../../api/user/type/follow.params';
import userAPI from '../../../api/user/UserApi';
import { MessageToastType } from '../../../components/MessageToast/typings.d';
import { showToastMessage } from '../../../utils/toast.util';

// Post
export const getHomePosts = createAsyncThunk('post/getPosts', async (userId: string) => {
  try {
    const response = await postAPI.getHomePosts(userId);
    if (response.code >= 400) {
      showToastMessage(response.message, MessageToastType.ERROR);
    }
    return response;
  } catch (error) {
    showToastMessage('Unexpected error', MessageToastType.ERROR);
  }
});

export const getPostComments = createAsyncThunk('post/getComments', async (postId: any) => {
  try {
    const response = await postAPI.getPostComments(postId);
    if (response.code >= 400) {
      showToastMessage(response.message, MessageToastType.ERROR);
    }
    return response;
  } catch (error) {
    showToastMessage('Unexpected error', MessageToastType.ERROR)
  }
});

export const handleLike = createAsyncThunk('post/Like', async (params: LikeDto) => {
  try {
    const response = await postAPI.likePost(params);
    if (response.code >= 400) {
      showToastMessage(response.message, MessageToastType.ERROR);
    }
    return response;
  } catch (error) {
    showToastMessage('Unexpected error', MessageToastType.ERROR)
  }
});

export const handleDislike = createAsyncThunk('post/UnLike', async (params: LikeDto) => {
  try {
    const response = await postAPI.dislikePost(params);
    if (response.code >= 400) {
      showToastMessage(response.message, MessageToastType.ERROR);
    }
    return response;
  } catch (error) {
    showToastMessage('Unexpected error', MessageToastType.ERROR)
  }
});

export const addNewComment = createAsyncThunk('home/addNewComment', async (params: CreateCommentDto) => {
  try {
    const response = await postAPI.createComment(params);
    if (response.code >= 400) {
      showToastMessage(response.message, MessageToastType.ERROR);
    }
    return response;
  } catch (error) {
    showToastMessage('Unexpected error', MessageToastType.ERROR)
  }
});

export const deleteComment = createAsyncThunk('comment/delete',
  async (params: { postId: any, commentId: any }) => {
    try {
      const response = await postAPI.deleteComment(params.postId, params.commentId);
      if (response.code >= 400) {
        showToastMessage(response.message, MessageToastType.ERROR);
      }
      return response;
    } catch (error) {
      showToastMessage('Unexpected error', MessageToastType.ERROR)
    }
  }
);

// follow actions
export const getListRecommendedFriends = createAsyncThunk('user/getRecommendedFriends',
  async (userId: string) => {
    try {
      const response = await userAPI.getListRecommend(userId);
      if (response.code >= 400) {
        showToastMessage(response.message, MessageToastType.ERROR);
      }
      return response;
    } catch (error) {
      showToastMessage('Unexpected error', MessageToastType.ERROR)
    }
  }
);

export const handleFollow = createAsyncThunk('home/handleFollow', async (params: FollowParams) => {
  try {
    const response = await userAPI.handleFollow(params);
    if (response.code >= 400) {
      showToastMessage(response.message, MessageToastType.ERROR);
    }
    return response;
  } catch (error) {
    showToastMessage('Unexpected error', MessageToastType.ERROR)
  }
});
