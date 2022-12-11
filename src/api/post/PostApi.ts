import { getApiUrl } from '../../utils/api.util';
import axiosClient from '../AxiosClient';
import { CreateCommentDto } from './type/create-comment.dto';
import { LikeDto } from './type/like.dto';
import { Post } from './type/post.type';
class PostAPI {
  // Post API
  getHomePosts = (userId: string): any => {
    const url = `${getApiUrl()}/posts/home`;
    return axiosClient.get(url, { params: { userId } });
  };

  getUserPosts = (userId: string): any => {
    const url = `${getApiUrl()}/posts/`;
    return axiosClient.get(url, { params: { userId } });
  };

  getPostById = (postId: string): any => {
    const url = `${getApiUrl()}/posts/${postId}`;
    return axiosClient.get(url, { params: { postId } });
  };

  createPost = (params: Post): any => {
    const url = `${getApiUrl()}/posts`;
    return axiosClient.post(url, { params });
  };

  updatePost = (postId: string, content: string, images: string): any => {
    const url = `${getApiUrl()}/posts/${postId}`;
    return axiosClient.patch(url, { params: { postId, content, images } });
  };

  deletePost = (postId: string): any => {
    const url = `${getApiUrl()}/posts/${postId}`;
    return axiosClient.delete(url, { params: { postId } });
  };

  likePost = (params: LikeDto): any => {
    const url = `${getApiUrl()}/posts/${params.postId}/like`;
    return axiosClient.patch(url, { params });
  };

  dislikePost = (params: LikeDto): any => {
    const url = `${getApiUrl()}/posts/${params.postId}/unlike`;
    return axiosClient.patch(url, { params });
  };

  // Comment API
  getPostComments = (postId: string): any => {
    const url = `${getApiUrl()}/posts/${postId}/comments`;
    return axiosClient.get(url, { params: { postId } });
  };

  createComment = (params: CreateCommentDto): any => {
    const url = `${getApiUrl()}/posts/${params.postId}/comments`;
    return axiosClient.post(url, { params });
  };

  updateComment = (postId: string, commentId: string, content: string): any => {
    const url = `${getApiUrl()}/posts/${postId}/comments/${commentId}`;
    return axiosClient.patch(url, { params: { postId, commentId, content } });
  };

  deleteComment = (postId: string, commentId: string): any => {
    const url = `${getApiUrl()}/posts/${postId}/comments/${commentId}`;
    return axiosClient.delete(url, { params: { commentId, postId } });
  };

  likeComment = (userId: string, postId: string, commentId: string): any => {
    const url = `${getApiUrl()}/posts/${postId}/comments/${commentId}/like`;
    return axiosClient.get(url, { params: { commentId, userId } });
  };

  unlikeComment = (userId: string, postId: string, commentId: string): any => {
    const url = `${getApiUrl()}/posts/${postId}/comments/${commentId}/unlike`;
    return axiosClient.get(url, { params: { commentId, userId } });
  };
}

const postAPI = new PostAPI();
export default postAPI;
