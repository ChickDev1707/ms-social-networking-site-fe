import React, { ReactElement } from 'react';
import CommentItem from './CommentItem/CommentItem';

const ListComment = ({ comments }: any): ReactElement => {
  return (
    <>
      {comments.map((comment: any) => {
        return <CommentItem key={comment._id} comment={comment} />;
      })}
    </>
  );
};

export default ListComment;
