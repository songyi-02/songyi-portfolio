import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Work from './sections/Work';
import Hobby from './components/Hobby';
import Contact from './sections/Contact';

function App() {
  React.useLayoutEffect(() => {
    // 브라우저 새로고침 시 스크롤 위치 복구 방지
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // 모든 컴포넌트 마운트 후 GSAP 위치 재계산
    const timer = setTimeout(() => {
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        ScrollTrigger.refresh();
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="main-content-wrapper">
        <Home />
        <About />
        <Work />
        <Hobby />
      </div>
      <Contact />
    </div>
  );
}

export default App;