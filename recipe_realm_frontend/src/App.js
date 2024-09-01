// import React, { useState } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import HomePage from './components/HomePage';
// import Chatbot from './components/Chatbot';

// const App = () => {
//   const [showChatbot, setShowChatbot] = useState(false);

//   const handleSearchClick = () => {
//     setShowChatbot(true);
//   };

//   return (
//     <Routes>
//       <Route path="/" element={<HomePage onSearchClick={handleSearchClick} />} />
//       <Route path="/chat" element={<Chatbot />} />
//     </Routes>
//   );
// };

// export default App;


// import React, { useState, useEffect } from 'react';
// import { Route, Routes, useLocation } from 'react-router-dom';
// import HomePage from './components/HomePage';
// import Chatbot from './components/Chatbot';

// const App = () => {
//   const [showChatbot, setShowChatbot] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     if (location.pathname === '/') {
//       document.title = 'Twin Chef - Home';
//     } else if (location.pathname === '/chat') {
//       document.title = 'Twin Chef - Chat';
//     }
//   }, [location]);

//   const handleSearchClick = () => {
//     setShowChatbot(true);
//   };
//   const handleHomeClick = () => {
//     console.log('Home button clicked');
//   };
  

//   return (
//     <Routes>
//       <Route path="/" element={<HomePage onSearchClick={handleSearchClick} />} />
//       <Route path="/chat" element={<Chatbot />} />
//     </Routes>
//   );
// };

// export default App;


import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './components/HomePage';
import Chatbot from './components/Chatbot';

const App = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      document.title = 'Twin Chef - Home';
    } else if (location.pathname === '/chat') {
      document.title = 'Twin Chef - Chat';
    }
  }, [location]);

  const handleSearchClick = () => {
    setShowChatbot(true);
  };

  const handleHomeClick = () => {
    console.log('Home button clicked');
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage onSearchClick={handleSearchClick} />} />
      <Route path="/chat" element={<Chatbot onHomeClick={handleHomeClick} />} />
    </Routes>
  );
};

export default App;
