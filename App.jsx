import React from 'react';
import EmojiSearch from './EmojiSearch'; 

const App = () => {

  const emojis = [
    { unicode: '😀', keywords: 'mutlu gülümseme' },
    { unicode: '😂', keywords: 'kahkaha' },
    { unicode: '😊', keywords: 'gülümseme' },
    { unicode: '🥰', keywords: 'sevgi, hayranlık' },
    { unicode:'❤', keywords: 'kalp'},
    { unicode:'😜', keywords: 'dil çıkarma'},
    { unicode:'😘', keywords: 'öpücük'},
    { unicode:'😢', keywords: 'gözyaşı'},
    { unicode:'🎶', keywords: 'müzik'},
    { unicode:'🎂', keywords: 'pasta'},
    { unicode:'👏', keywords: 'alkış'},
    
  ];

  return (
    <div >
      <h1 >🐱‍🚀Emoji Arama Motoru🐱‍🚀</h1>
  
      <EmojiSearch emojis={emojis} />
    </div>
  );
};

export default App;


