import React, { useState } from 'react';

const EmojiSearch = ({ emojis }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedEmoji, setCopiedEmoji] = useState(null);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleEmojiClick = (emoji) => {
    navigator.clipboard.writeText(emoji);
    setCopiedEmoji(emoji);
  };

  const filteredEmojis = emojis.filter((emoji) =>
    emoji.keywords.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input 
        type="text"
        placeholder="Emoji ara..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      {copiedEmoji && <div>Kopyalanan emoji: {copiedEmoji}</div>}
      <ul>
        {filteredEmojis.map((emoji) => (
          <li
            key={emoji.unicode}
            onClick={() => handleEmojiClick(emoji.unicode)}
            style={{ cursor: 'pointer', marginBottom: '5px' }}
          >
            {emoji.unicode} - {emoji.keywords}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmojiSearch;
