import React from 'react'

import { Blog, Features, Footer, Header, Possibility, FAQS, Subscription } from './containers';
import { FAQ, Navbar} from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div>
        <Navbar />
        <Header />
      </div>
      <Features />
      <Blog />
      <Possibility />
      <FAQ />
      <FAQS />
      <Subscription />
      <Footer />
    </div>
  )
}

export default App