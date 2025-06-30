import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Features from './components/Features';
import Marketing from './components/Marketing';
import Footer from './components/Footer';

import * as Sentry from '@sentry/react';

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Features />
      <Marketing />
      <Footer />
    </main>
  )
}

export default Sentry.withProfiler(App);
