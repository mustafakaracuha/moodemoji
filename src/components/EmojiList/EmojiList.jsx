import React from "react";
import EmojiButton from "../Button/EmojiButton/EmojiButton";
import useStore from "../../store/store";

function EmojiList() {
  const emojiList = ["😃", "😊", "😍", "😔", "😡", "😴"];

  const { setSelectedEmoji } = useStore();

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
  };

  return (
    <div className="flex flex-row space-x-4">
      {emojiList.map((emoji) => (
        <EmojiButton
          key={emoji}
          emoji={emoji}
          onClick={() => handleEmojiClick(emoji)}
          className="animate-fade-in"
        />
      ))}
    </div>
  );
}

export default EmojiList;
