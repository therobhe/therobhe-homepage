import Header from './components/areas/Header';
import Main from './components/areas/Main';
import Footer from './components/areas/Footer';

import { ModalProvider } from './context/ModalContext';

function App() {

  return (
    <ModalProvider>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        {/* Background Styling */}
        <div className="fixed top-0 -z-10 h-full w-full">
          <div
            className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>

        {/* Page Content */}
        <div className="container mx-auto px-8">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    </ModalProvider>
  )
}

export default App
