/* eslint-disable multiline-ternary */
import React, { ReactElement } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Favorite, ChatBubble } from '@material-ui/icons';
import './styles.scss';
import { usePostItem } from './usePostItem';
import PostComment from '../../../../components/PostComment/PostComment';

const PostItem = ({ post }: any): ReactElement => {
  const { isShowPostDetail, setShowPostDetail } = usePostItem();

  return (
    <>
      {Boolean(isShowPostDetail) && <PostComment
        isShowPostDetail={isShowPostDetail}
        hideDetail={() => { setShowPostDetail(false) }}
        selectedPost={post}
        handleLikePost={null}
      />}
      <Col sm={4} className="flex" onClick={() => setShowPostDetail(post._id)}>
        <Row>
          <Col className="post-item">
            <div className="post-overlay"></div>

            <div className="content">
              <span className="numtym">
                <Favorite /> {post.likes.length}
              </span>
              <span className="numcomment">
                <ChatBubble /> {post.comments.length}
              </span>
            </div>
            {post.images[0].split('.')[post.images[0].split('.').length - 1] === 'mp4' ? (
              <video className="post-image" src={post.images[0]}></video>
            ) : (
              <img className="post-image" src={post.images[0]} alt="image" />
            )}
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default PostItem;
