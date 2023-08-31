import React from "react";
import useStore from "../../../store/store";

const EmojiButton = ({ emoji, onClick }) => {
  const { selectedEmoji } = useStore();

  return (
    <button
      onClick={onClick}
      className={
        selectedEmoji === emoji
          ? "w-10 h-10 flex items-center justify-center text-center text-[42px] pt-1 animate-fade-in outline-none transition duration-500 ring-4 ring-white rounded-full"
          : "w-10 h-10 flex items-center justify-center text-center text-[42px] pt-1 animate-fade-in outline-none transition duration-500 ring-4 hover:ring-white ring-transparent rounded-full"
      }
    >
      {emoji}
    </button>
  );
};

export default EmojiButton;
