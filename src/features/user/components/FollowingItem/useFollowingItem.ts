// import { useState } from 'react';

// import { useDispatch, useSelector } from 'react-redux';
// import { socket } from '../../../../App';
// import { createNotification, follow } from '../../../home/homeSlice';
// import { unFollow, addActiveId } from '../../profileSlice';
import { AppState } from '../../../../app/state.type';
import { useSelector } from 'react-redux';

export const useFollowingItem = (user: any, setShowModal: any): any => {
  const { _id, name, avatar, email } = user;
  //   const dispatch = useDispatch();

  const authUserId = useSelector((state: AppState) => state.auth.current._id);
  const currentUserId = useSelector((state: AppState) => state.user.userInfo._id);

  //   const [IsFollow, setIsFollow] = useState(true);

  //   const current = JSON.parse(localStorage.getItem('LoginUser'));

  //   const handleUnFollow = async (e): any => {
  //     e.stopPropagation();
  //     console.log(_id);
  //     const action = unFollow(_id);
  //     await dispatch(action).unwrap();
  //   };

  //   const handleFollow = async (id): any => {
  //     if (IsFollow) {
  //       const action = unFollow(id);
  //       await dispatch(action).unwrap();
  //       setIsFollow(false);
  //     } else {
  //       const action1 = follow(id);
  //       await dispatch(action1).unwrap();
  //       setIsFollow(true);
  //       const notification = {
  //         postId: current._id,
  //         userId: _id,
  //         type: 3,
  //         senderName: current.name,
  //         img: current.avatar
  //       };
  //       socket.emit('send_notificaton', notification);
  //       const paramsCreate = {
  //         receiver: id,
  //         notiType: 3,
  //         desId: current._id
  //       };
  //       const actionCreateNoti = createNotification(paramsCreate);
  //       await dispatch(actionCreateNoti).unwrap();
  //     }
  //   };

  //   const handleDirectToAccount = (e: any): any => {
  //     e.stopPropagation();
  //     setShowModal(false);
  //     const action = addActiveId(_id);
  //     dispatch(action);
  //   };
  return {
    _id,
    name,
    avatar,
    email,
    authUserId,
    currentUserId
    // handleFollow,
    // handleUnFollow,
    // handleDirectToAccount
  };
};