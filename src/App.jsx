import React, { useState } from "react";
import useStore from "./store/store";

import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import EmojiList from "../src/components/EmojiList/EmojiList";
import SelectedEmoji from "../src/components/SelectedEmoji/SelectedEmoji";
import FeedbackButton from "../src/components/Button/FeedBackButton/FeedbackButton";
import FeedbackForm from "../src/components/FeedbackForm/FeedbackForm";
import ThankYouMessage from "../src/components/ThankYouMessage/ThankYouMessage";
import "./App.css";

import { Helmet } from "react-helmet";

function App() {
  const siteTitle = "Mood Flow";
  const { selectedEmoji } = useStore();
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleShowFeedbackForm = () => {
    setShowFeedbackForm(true);
  };

  const handleShowThankYou = () => {
    setShowThankYou(!showThankYou);
    setShowFeedbackForm(false);
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-r from-violet-400 to-violet-700 text-white">
      <Helmet>
        <title>{siteTitle}</title>
      </Helmet>
      <Header />
      <div className="m-auto flex flex-col items-center justify-center max-sm:p-4">
        <h1 className="text-4xl mb-4 font-bold max-sm:text-center max-sm:text-2xl">
          Bugün Nasıl Hissediyorsun ?
        </h1>
        {!showFeedbackForm && !showThankYou && (
          <>
            <EmojiList />
            <SelectedEmoji />
            {selectedEmoji && (
              <FeedbackButton onClick={handleShowFeedbackForm} />
            )}
          </>
        )}
        {showFeedbackForm && selectedEmoji && (
          <FeedbackForm
            onSubmit={handleShowThankYou}
            onClose={() => setShowFeedbackForm(!showFeedbackForm)}
          />
        )}
        {showThankYou && <ThankYouMessage onClose={handleShowThankYou} />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
