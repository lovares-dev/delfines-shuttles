import React from 'react';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';
import Header from './components/Header';
import UnderConstruction from './components/UnderConstruction';

// Feature flag to switch between construction and main site
const UNDER_CONSTRUCTION = true; // Set to false to show main site

const App = () => {
  if (UNDER_CONSTRUCTION) {
    return <UnderConstruction />;
  }

  // return (
  //   <div>
  //     <Header />
  //     <MainContainer />
  //     <Footer />
  //   </div>
  // );
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white text-4xl">
      Tailwind v4 funcionando 🚀
      <div className="test-tailwind">SI VEO ESTO ROJO, TAILWIND OK</div>
    </div>
  );
};

export default App; // Exporta el componente principal
