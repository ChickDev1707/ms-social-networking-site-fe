import React, { ReactElement } from 'react';
import { Button } from 'react-bootstrap';
import { useUserHeader } from './useUserHeader';
import FollowList from '../FollowList';
import Dialog from '../Dialog';
import ChangeProfilePhotoPopup from '../ChangeProfilePhotoPopup';
import './style.scss';

const UserHeader = (): ReactElement => {
  const {
    followerList,
    followingList,
    currentUser,
    userInfo,
    posts,
    showModal,
    setShowModal,
    setShowModalFollow,
    showModalFollow,
    isFollowed,
    isShowFollowers,
    isShowChangeAvataPopup,
    setIsShowChangeAvatarPopup,
    handleFollow,
    handleShowFollow,
    // handleChangeAvt,
    handleSendMessage
  } = useUserHeader();

  return (
    <div>
      {(Boolean(showModal)) && <Dialog showModal={showModal} setShowModal={setShowModal} />}
      {(Boolean(showModalFollow)) && (
        <FollowList
          showModal={showModalFollow}
          setShowModal={setShowModalFollow}
          isFollowers={isShowFollowers}
        />
      )}
      {(Boolean(isShowChangeAvataPopup)) && (
        <ChangeProfilePhotoPopup
          showModal={isShowChangeAvataPopup}
          setShowModal={setIsShowChangeAvatarPopup}
        />
      )}
      <div className="header__container ">
        <div className="d-flex flex-row justify-content-center">
          <div className="p-2">
            <div
              className="avatar__container"
              // onClick={() => handleChangeAvt()}
            >
              <img src={userInfo.avatar} />
            </div>
          </div>
          <div className="p-2 ">
            <div className="d-flex flex-column user__info ">
              <div className="p-0 ">
                <div className="">
                  <div className="d-flex  flex-row ">
                    <div className="p-2 username ">{userInfo.name}</div>

                    {userInfo.id === currentUser.id ? (
                      <></>
                    ) : (
                      <>
                        {' '}
                        <Button
                          variant="outline-success"
                          onClick={() => handleSendMessage(currentUser, userInfo)}
                        >
                          Nh???n tin
                        </Button>
                        <Button
                          variant="outline-success"
                          onClick={() => handleFollow(userInfo.id)}
                        >
                          {(Boolean(isFollowed)) ? 'B??? theo d??i' : 'Theo d??i'}
                        </Button>
                      </>
                    )}

                    {currentUser.id === userInfo.id && (
                      <Button variant="outline-success"
                      onClick={() => setShowModal(true)}
                      >
                        S???a th??ng tin
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-0 ">
                <div className="d-flex  flex-row">
                  <div className="p-2 numpost">
                    {' '}
                    <span>{posts?.length}</span>B??i vi???t
                  </div>
                  <div
                    className="p-2 follower"
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleShowFollow(true)}
                    >
                    <span>{followerList.length}</span>Ng?????i theo d??i
                  </div>
                  <div
                    className="p-2 following"
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleShowFollow(false)}
                    >
                    <span>{followingList.length}</span>??ang theo d??i
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
