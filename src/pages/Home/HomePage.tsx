import React, { ReactElement } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './HomePage.scss';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { AppState } from '../../app/state.type';
import Header from '../../components/Header/Header';
import HomeSkeleton from '../../components/SkeletonLoading/HomeSkeleton';
import AllLikesPopup from '../../components/AllLikesPopup/AllLikesPopup';
import PostComment from '../../components/PostComment/PostComment';
import { useHomePage } from './hooks/useHomePage';
import { usePostComment } from './hooks/usePostComment';
import { usePostItem } from './hooks/usePostItem';
import PostItem from './components/PostItem/PostItem';
import Category from './components/Category/Category';
import { addNewComment } from './state/homeActions';

const HomePage = (): ReactElement => {
  const { listPost, listComment, isLoading, loadListPostFail } = useSelector((state: AppState) => {
    return state.home;
  });
  useHomePage();
  const { showDetail, handleLikePost } = usePostItem();
  const { isShowPostDetail, selectedPost } = useSelector((state: AppState) => state.home);
  const { hideDetail, handleLikePostComment } = usePostComment();
  return (
    <>
      <Container fluid>
        <Row>
          <Header></Header>
        </Row>
        <ToastContainer />
      </Container>
      <Container style={{ marginTop: '100px' }}>
        {(loadListPostFail as boolean) ? (
          <Row>
            <div>Error</div>
          </Row>
        ) : (
          <Row>
            {(isLoading as boolean) ? (
              <HomeSkeleton />
            ) : (
              <>
                <Col md={{ span: 7 }}>
                  {listPost.map((post: any, index: number) => {
                    return (
                      <PostItem
                        key={index}
                        post={post}
                        handleLikePost={handleLikePost}
                        showDetail={showDetail}
                      />
                    );
                  })}
                </Col>
                <Col md={{ span: 4, offset: 1 }}>
                  <Category />
                </Col>
              </>
            )}
          </Row>
        )}
      </Container>
      {(isShowPostDetail as boolean) && (
        <PostComment
          isShowPostDetail={isShowPostDetail}
          selectedPost={selectedPost}
          hideDetail={hideDetail}
          handleLikePost={handleLikePostComment}
          comments={listComment}
          addCommentAction={addNewComment}
        />
      )}
      <AllLikesPopup />
    </>
  );
};

export default HomePage;
