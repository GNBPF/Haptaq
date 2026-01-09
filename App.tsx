import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import ProblemServices from './components/ProblemServices';
import SocialAndWork from './components/SocialAndWork';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <ProblemServices />
      <SocialAndWork />
      <Contact />
    </Layout>
  );
}

export default App;