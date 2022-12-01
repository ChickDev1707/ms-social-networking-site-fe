import { EmojiClickData } from 'emoji-picker-react';
import { useState } from 'react';

export const useAddComment = (postId: any, userPostId: any): any => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser') ?? '');

  const [showEmoji, setShowEmoji] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleEmojiClick = (emojiData: EmojiClickData, event: MouseEvent): void => {
    setInputValue((value: string) => value + emojiData.emoji);
  };

  const deleteReply = (): void => {
    // const action = CancelReplyCmd();
    // dispatch(action);
  };

  const handleKeyDown = async (event: any): Promise<void> => {
    if (event.keyCode === 13) {
      await submitComment();
    }
  };

  const submitComment = (): void => {
    alert('chưa handle')
  }

  return {
    submitComment,
    showEmoji,
    setShowEmoji,
    inputValue,
    setInputValue,
    handleEmojiClick,
    handleKeyDown,
    deleteReply
  };
};
