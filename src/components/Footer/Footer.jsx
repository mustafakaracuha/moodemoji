import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

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
            <AiFillGithub size={21} className="text-white" />
          </a>
          <a href="https://www.linkedin.com/in/mustafakaracuha">
            {" "}
            <AiFillLinkedin size={21} className="text-white" />
          </a>
        </p>
      </p>
    </footer>
  );
}

export default Footer;
