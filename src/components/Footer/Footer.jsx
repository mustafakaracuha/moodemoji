import React from "react";

function Footer() {
  return (
    <footer className="mt-8 text-gray-300 text-center">
      <p className="text-white max-sm:text-[13px] text-center text-sm max-sm:px-5 px-32 mb-2 opacity-60 max-sm:hidden">
        <span className="font-bold">Mood Emoji</span> Nedir ? <br /> Duygusal
        durumunuzu ifade etmek ve içsel dengeyi bulmak için özel olarak
        tasarlanmış bir uygulamadır. Siz sadece bir emoji seçin, gerisini Mood
        Emoji'e bırakın. Her emojiye özel önerilen aktiviteler ve tavsiyeler ile
        anlık ruh halinizi daha iyi anlayacak ve olumlu bir deneyim
        yaşayacaksınız. Mood Emoji ile duygusal dünyanıza yolculuk yapın ve her
        gün daha iyi hissedin.
      </p>
      <p className="w-screen max-sm:text-[13px] flex items-center justify-center text-white p-3 bg-gradient-to-r from-violet-400 to-violet-600">
        <span className="font-normal mr-1">
          Mood Emoji made with 🍦 by Mustafa KARAÇUHA
        </span>
        <span className="mr-2">© {new Date().getFullYear()}</span> |
        <p className="ml-2 flex gap-3">
          <a href="https://github.com/mustafakaracuha">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              className="text-2xl text-white"
              height="22px"
              width="22px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/mustafakaracuha">
            {" "}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              className="text-2xl text-white"
              height="22px"
              width="22px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 1 0-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z"></path>
            </svg>
          </a>
        </p>
      </p>
    </footer>
  );
}

export default Footer;
