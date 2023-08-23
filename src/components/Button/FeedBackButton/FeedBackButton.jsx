import React from "react";

function FeedbackButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-white bg-opacity-10 hover:bg-opacity-20 px-4 py-2 mt-4 rounded-xl animate-translate-in"
    >
     Geri Bildirimde Bulun
    </button>
  );
}

export default FeedbackButton;
