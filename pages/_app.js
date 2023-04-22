import NextNProgress from 'nextjs-progressbar'
import { useReducer, useState } from 'react';
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import AppContext from '../context/AppContext';
import { initialState, reducer } from '../store/reducers';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <NextNProgress
        color="#2b3cff"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      /> 
      <AppContext.Provider value={[state, dispatch]}>
        <Navbar />
          <Component {...pageProps} />
        <Footer />
      </AppContext.Provider>
    </>
  )
}

export default MyApp