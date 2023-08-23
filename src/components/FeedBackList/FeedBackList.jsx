import React, { useState, useEffect } from "react";
import { ImSpinner9 } from "react-icons/im";

import { getFirestore, collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../firebase/config/firebaseConfig";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function FeedbackList() {
  const [feedbackList, setFeedbackList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchFeedbacks() {
      setLoading(true);
      const feedbackCollection = collection(db, "feedback");
      const feedbackSnapshot = await getDocs(feedbackCollection);
      const feedbacks = feedbackSnapshot.docs.map((doc) => doc.data());
      setTimeout(() => {
        setFeedbackList(feedbacks);
        setLoading(false);
      }, 1000);
    }

    fetchFeedbacks();
  }, []);

  return (
    <div className="bg-white h-48 bg-opacity-20 flex p-4 rounded-xl mt-4 overflow-auto">
      {loading ? (
        <div className="w-full h-full flex items-center justify-center">
          <ImSpinner9 size={24} className="text-white animate-spin" />
        </div>
      ) : (
        <ul>
          {
          feedbackList.length > 0 ?
          feedbackList.map((feedback, index) => (
            <li key={index} className="mb-2 max-w-[400px]">
              <strong className="font-bold">{feedback.name} :</strong> {feedback.comment}
            </li>
          )) : 
          <p>Geri bildirim bulunamadı.</p>
          }
        </ul>
      )}
    </div>
  );
}

export default FeedbackList;
