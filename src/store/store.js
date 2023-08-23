import { create } from "zustand";
import { devtools } from "zustand/middleware";
import activities from "../data/data";

const useStore = create(
  devtools(
    (set) => ({
      selectedEmoji: "",
      setSelectedEmoji: (emoji) => set({ selectedEmoji: emoji }),
      
      moodEntries: [],
      addMoodEntry: (entry) =>
        set((state) => ({ moodEntries: [...state.moodEntries, entry] })),

      getAdviceForEmoji: (emoji) => {
        if (emoji in activities) {
          const randomIndex = Math.floor(
            Math.random() * activities[emoji].length
          );
          return activities[emoji][randomIndex];
        }
        return "Seçilen ruh hali için tavsiye bulunamadı.";
      },
    }),
    "moodStore"
  )
);

export default useStore;
