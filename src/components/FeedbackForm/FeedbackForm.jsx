import React, { useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { AiFillCloseCircle } from "react-icons/ai";

import { toast } from "react-toastify";
import FeedbackList from "../FeedBackList/FeedBackList"; // Geri bildirimleri listeleyen bileşen
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from "../../firebase/firebase";

function FeedbackForm({ onSubmit, onClose }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [showFeedbackList, setShowFeedbackList] = useState(false);

  const handleCommentChange = (event) => {
    const value = event.target.value;
    setComment(value);
  };

  const handleSubmit = async () => {
    if (!name.trim() || !comment.trim()) {
      toast.warning("Lütfen ad ve yorum alanlarını doldurun.");
      return;
    }
  
    setLoading(true);
    const feedbackCollection = collection(db, "feedback");
    const feedbackData = {
      name,
      comment,
      timestamp: serverTimestamp(),
    };
  
    try {
      await addDoc(feedbackCollection, feedbackData);
      setTimeout(() => {
        setLoading(false);
        onSubmit();
      }, 1000);
    } catch (error) {
      toast.error("Geri bildirim gönderirken bir hata oluştu:", error);
      toast.error(error.code, error.message);
    }
  };
  

  const handleShowFeedbacks = () => {
    setShowFeedbackList(true);
  };

  const handleCloseFeedbacks = () => {
    setShowFeedbackList(false);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="w-full bg-white bg-opacity-20 p-4 rounded-xl mt-4">
      <h2 className="text-lg font-semibold mb-2">Geri Bildirim</h2>
      <div>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Adınız"
          className="w-full p-2 bg-transparent border border-white border-opacity-40 rounded-lg resize-none mb-4 text-white outline-none placeholder:text-gray-300"
        />
      </div>
      <textarea
        className="w-full p-2 bg-transparent border border-white border-opacity-40 rounded-lg resize-none mb-4 text-white outline-none placeholder:text-gray-300"
        rows="4"
        placeholder="Görüş ve önerilerinizi buraya yazın..."
        value={comment}
        onChange={handleCommentChange}
      ></textarea>
      <div className="flex">
        <button
          className="bg-white bg-opacity-10 hover:bg-opacity-20 px-4 py-2 rounded-xl flex items-center justify-center transition-colors duration-300"
          onClick={handleSubmit}
        >
          Gönder
          <span className="animate-fade-in">
            {loading && (
              <ImSpinner9 size={20} className="text-white animate-spin ml-2" />
            )}
          </span>
        </button>
        <button
          className="bg-white ml-3 bg-opacity-10 hover:bg-opacity-20 px-4 py-2 rounded-xl transition-colors duration-300"
          onClick={handleShowFeedbacks}
        >
          Geri Bildirimler
        </button>
        <button
          className="bg-white ml-3 bg-opacity-10 hover:bg-opacity-20 px-4 py-2 rounded-xl transition-colors duration-300"
          onClick={handleClose}
        >
          Kapat
        </button>
      </div>
      {showFeedbackList && (
        <div className="modal mt-5">
          <div className="modal-content">
            <div className="flex items-center justify-between">
            <h2 className="ml-1">Geri Bildirimler</h2>
            <button className="modal-close-button mr-1" onClick={handleCloseFeedbacks}>
            <AiFillCloseCircle size={24} className="text-white ml-2" />
            </button>
          </div>
          <FeedbackList /> 
          </div>
        </div>
      )}
    </div>
  );
}

export default FeedbackForm;
