import React, { useState, useEffect } from "react";
import useStore from "../../store/store";

function SelectedEmoji() {
  const { selectedEmoji, getAdviceForEmoji } = useStore();
  const [showAdvice, setShowAdvice] = useState(false);

  useEffect(() => {
    setShowAdvice(true);
  }, [selectedEmoji]);

  if (!selectedEmoji) {
    return null;
  }

  return (
    <div
      className={`bg-white bg-opacity-20 p-4 rounded-xl mt-4 ${
        showAdvice ? "animate-fade-in" : ""
      }`}
    >
      <h2 className="text-lg font-semibold mb-2">İşte Sana Önerim</h2>
      <p className="opacity-100">{getAdviceForEmoji(selectedEmoji)}</p>
    </div>
  );
}

export default SelectedEmoji;
