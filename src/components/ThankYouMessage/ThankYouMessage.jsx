import React from "react";

function ThankYouMessage({ onClose }) {
  return (
    <div className="bg-white bg-opacity-20 p-4 rounded-xl mt-4 text-left animate-fade-in">
      <h2 className="text-xl font-semibold mb-2">Teşekkürler !</h2>
      <p className="opacity-100">
        Geri bildiriminiz bizim için değerlidir. <br />
        Sizden gelen her geri bildirim, uygulamamızı daha iyi hale getirmemize
        yardımcı oluyor. <br />
        İçsel dengeye ulaşmanıza ve pozitif bir deneyim yaşamanıza yardımcı
        olmak için buradayız. <br /> Size daha iyi hizmet verebilmek adına
        çalışmalarımızı sürdüreceğiz. <br />
      </p>
      <button
        className="bg-white bg-opacity-10 hover:bg-opacity-20 px-4 py-2 rounded-xl mt-4 transition-colors duration-300"
        onClick={onClose}
      >
        Kapat
      </button>
    </div>
  );
}

export default ThankYouMessage;
