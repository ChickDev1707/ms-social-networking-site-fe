import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../../app/store';
import './styles.scss';
import { AppState } from '../../../../app/state.type';
import { updateUser } from '../../profileSlice';
import { updateCurrentUser } from '../../../auth/authSlice';
import useImageUpload from '../../../../hooks/useImageUpload';

export const useUpdateProfile = (setShowModal: any): any => {
  const dispatch = useAppDispatch();
  const uploadImage = useImageUpload();

  const UserState = useSelector((state: AppState) => state.user.userInfo);
  const [userInfo, setUserInfo] = useState(UserState);
  const { name, email, mobile, role, avatar } = userInfo;
  const [imageAvt, setImageAvt] = useState(avatar);

  const onChangeUserInfo = (e: any): any => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleFileChange = async (e: any): Promise<void> => {
    const image = await uploadImage(e.target.files[0]);
    setImageAvt(image);
  };

  const onSubmit = async (e: any): Promise<void> => {
    e.preventDefault();
    const action = updateUser({ ...userInfo, avatar: imageAvt });
    const result = await dispatch(action).unwrap();
    dispatch(updateCurrentUser(result.data.user));
    alert(result.statusText);
    setShowModal(false);
  };

  return {
    name,
    email,
    mobile,
    role,
    avatar,
    onChangeUserInfo,
    handleFileChange,
    onSubmit
  };
};
