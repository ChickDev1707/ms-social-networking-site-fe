import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/store';
import { INotification } from '../../pages/Chat/types/INotification.Type';
import { MessageToastType } from '../../components/MessageToast/typings.d';
import { showToastMessage } from '../../utils/toast.util';
import { deleteNotification, getNotifications, markAsReadAll } from './state/notificationAction';
import { addNotification } from './state/notificationSlice';
import { socket } from '../../utils/api.util';

interface UseNotificationReturn {
  notifications: INotification[]
  handleChangePage: any
  handleChangePageSize: any
  handleDeleteNotification: any
  handleToggle: any
  handleMarkAsReadAll: any
  isOpen: boolean
  numOfNotifications: number
}

export const UseNotification = (): UseNotificationReturn => {
  const dispatch = useAppDispatch();
  // const currentUser = useSelector((state: AppState) => state.auth.currentUser);
  const currentUser = JSON.parse(localStorage.getItem('currentUser') ?? '');
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [numOfNotifications, setNumOfNotifications] = useState(0);

  const notifications = useSelector((state: any) => state.notification.notifications);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (): void => {
    setIsOpen(!isOpen);
  }

  const handleDeleteNotification = (id: string): void => {
    dispatch(deleteNotification(id))
      .unwrap()
      .then((resultValue) => {})
      .catch((rejectedValue) => {});
  }

  useEffect(() => {
    dispatch(getNotifications({ id: currentUser.id, pageIndex, pageSize }))
      .unwrap()
      .then((resultValue) => {})
      .catch((rejectedValue) => {});
  }, [isOpen])

  useEffect(() => {
    const numUnread = notifications?.filter((n: any) => n.read === false && n.deleted === false);
    setNumOfNotifications(numUnread?.length);
  }, [notifications])

  useEffect(() => {
    if (!socket.connected) socket.connect();
    socket.removeAllListeners('newNotification');
    socket.on('newNotification', function (data: INotification) {
      dispatch(addNotification(data));
      showToastMessage('Bạn có một thông báo mới!', MessageToastType.SUCCESS);
    });
  }, [])

  const handleChangePage = (): void => {
    setPageIndex(pageIndex + 1);
  }

  const handleChangePageSize = (newPageSize: number): void => {
    setPageSize(newPageSize)
  }

  const handleMarkAsReadAll = (): void => {
    dispatch(markAsReadAll({ userId: currentUser.id, pageIndex, pageSize }))
      .unwrap()
      .then((resultValue) => {})
      .catch((rejectedValue) => {});
  }

  return {
    notifications,
    handleChangePage,
    handleChangePageSize,
    handleDeleteNotification,
    handleToggle,
    handleMarkAsReadAll,
    isOpen,
    numOfNotifications
  };
};
