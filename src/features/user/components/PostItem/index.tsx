import React, { ReactElement } from 'react';
import { Row, Col } from 'react-bootstrap';

import { Favorite, ChatBubble } from '@material-ui/icons';

import PostComment from '../../../home/components/postComment';

import './styles.scss';
import { usePostItem } from './usePostItem';

const PostItem = (post: any): ReactElement => {
  // const dispatch = useDispatch();
  // const { isShowDetail } = useSelector((state) => state.home);

  // const showDialog = async (a) => {
  //   const action2 = getPostById({ postId: a });
  //   await dispatch(action2).unwrap();

  //   const action1 = getCommentsByPostID(a);
  //   await dispatch(action1).unwrap();

  //   const action = ShowDetail(a);
  //   dispatch(action);

  //   socket.emit('joinComment', a);
  // };

  const { isShowDetail } = usePostItem();

  return (
    <>
      {(Boolean(isShowDetail)) && <PostComment />}
      <Col
        sm={4}
        className="flex"
        // onClick={() => showDialog(post._id)}
      >
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
            {/* {post.images[0].split('.')[post.images[0].split('.').length - 1] === 'mp4'
              ? (
              <video className="post-image" src={post.images[0]}></video>
                )
              : (
              <img className="post-image" src={post.images[0]} alt="image" />
                )} */}
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default PostItem;