import { Provider } from 'react-redux'
import { useStore } from '../store'
import Head from "next/head";
import "./card.css"

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <>

    <Head>
  <title>ramzi</title>
   <link rel="shortcut icon" href="" type="image/x-icon"/>
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

   </Head>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    </>
  )
}
