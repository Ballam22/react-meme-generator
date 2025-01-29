import { useState } from 'react';

export default function MemeGenerator() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [template, setTemplate] = useState('doge');

  const memeUrl = `https://api.memegen.link/images/${template}/${encodeURIComponent(topText)}/${encodeURIComponent(bottomText)}.png`;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = memeUrl;
    link.download = 'meme.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <label className="block">
        Top text
        <input
          className="border p-2 w-full"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
        />
      </label>
      <label className="block mt-2">
        Bottom text
        <input
          className="border p-2 w-full"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
        />
      </label>
      <label className="block mt-2">
        Meme template
        <input
          className="border p-2 w-full"
          value={template}
          onChange={(e) => setTemplate(e.target.value)}
        />
      </label>
      <div className="mt-4">
        <img
          src={memeUrl}
          alt="Generated Meme"
          data-test-id="meme-image"
          className="w-full border"
        />
      </div>
      <button
        onClick={handleDownload}
        className="mt-4 bg-blue-500 text-white p-2 w-full"
      >
        Download
      </button>
    </div>
  );
}
