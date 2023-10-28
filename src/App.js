// import HomeHomePage from './pages/homePage.jsx'
// import EventPage from './pages/eventPage.jsx'
// import HelpPage from './pages/helpPage.jsx'
// import ContactPage from './pages/contactPage.jsx'
// import GalleryPage from './pages/galleryPage.jsx'
// import InternshipPage from './pages/internshipPage.jsx'
// import Header from './Components/Header/index.js'
// import { Route, Routes } from 'react-router-dom'


// function App() {
//   return (
//     <div >
//       <Header />
//       <Routes>

//         {/* <Route path='/' Component={HomeHomePage} />
//         <Route path='/EventPage' Component={EventPage} />
//         <Route path='/HelpPage' Component={HelpPage} />
//         <Route path='/ContactPage' Component={ContactPage} />
//         <Route path='/GalleryPage' Component={GalleryPage} />
//         <Route path='/InternshipPage' Component={InternshipPage} /> */}

//         <Route path='/' component={HomePage} />
//         <Route path='/EventPage' component={EventPage} />
//         <Route path='/HelpPage' component={HelpPage} />
//         <Route path='/ContactPage' component={ContactPage} />
//         <Route path='/GalleryPage' component={GalleryPage} />
//         <Route path='/InternshipPage' component={InternshipPage} />


//       </Routes>

//     </div>
//   );
// }

// export default App;



import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage.jsx';  // Updated import
import EventPage from './pages/eventPage.jsx';
import HelpPage from './pages/helpPage.jsx';
import ContactPage from './pages/contactPage.jsx';
import GalleryPage from './pages/galleryPage.jsx';
import InternshipPage from './pages/internshipPage.jsx';
import Header from './Components/Header/index.js';
import VideoPage from './pages/videoPage.jsx';
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/eventPage' element={<EventPage />} />
        <Route path='/contactPage' element={<ContactPage />} />
        <Route path='/galleryPage' element={<GalleryPage />} />
        <Route path='/helpPage' element={<HelpPage />} />
        <Route path='/internshipPage' element={<InternshipPage />} />
        <Route path="/videoPage" element={<VideoPage />} />
      </Routes>
    </div>
  );
}

export default App;

