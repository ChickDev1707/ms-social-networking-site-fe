import { useState } from 'react';
import { AppState } from '../../../../app/state.type';
import { useSelector } from 'react-redux';

export const useUserHeader = (): any => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser') ?? '');

  const { userInfo, posts, followerList, followingList } = useSelector(
    (state: AppState) => state.user
  );

  // State
  const [showModal, setShowModal] = useState(false);
  const [showModalFollow, setShowModalFollow] = useState(false);
  const [isShowFollowers, setIsShowFollowers] = useState(false);
  const [isShowChangeAvataPopup, setIsShowChangeAvatarPopup] = useState(false);
  const isFollow = (): boolean => {
    let isFollowed = false;
    followerList.forEach((user: any) => {
      if (user.id === currentUser.id) {
        isFollowed = true;
      }
    });
    return isFollowed;
  };
  const [isFollowed] = useState(isFollow());

  const handleShowFollow = (isFollowers: boolean): any => {
    setIsShowFollowers(isFollowers);
    setShowModalFollow(true);
  };

  const handleChangeAvt = (): any => {
    setIsShowChangeAvatarPopup(true);
  };

  const handleSendMessage = (currentUser: any, destinationUser: any): any => {
    alert('Chưa handle');
  };

  const handleFollow = async (id: any): Promise<void> => {
    alert('chưa handle');
  };

  return {
    followerList,
    followingList,
    currentUser,
    userInfo,
    posts,
    isFollowed,
    showModal,
    setShowModal,
    showModalFollow,
    setShowModalFollow,
    isShowFollowers,
    setIsShowFollowers,
    isShowChangeAvataPopup,
    setIsShowChangeAvatarPopup,
    handleFollow,
    handleShowFollow,
    handleChangeAvt,
    handleSendMessage
  };
};
