import '../styles/globals.css'
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

function MyApp({ Component, pageProps }) {

  return <Component {...pageProps} />
  }

export default MyApp
