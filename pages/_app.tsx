import { AppProps } from 'next/app'
import Layout from 'components/Layout'
import { Helmet } from 'react-helmet'
import '../global.config.css'
import { CartProvider } from '@context/Cart/Provider'

//? FOR METRIC UNCOMMENT THIS FUNCTION
// export function reportWebVitals(metric) {
//   console.log(metric)
// }

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Layout>
        <Helmet>
          //? Fonts
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
            integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
            rel="stylesheet"
          />
          //? Favicon
          <link rel="icon" href="static/favicon.ico" />
          //? bootstrap
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
            integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
            crossOrigin="anonymous"
          ></link>
          <title>AvoStore</title>
        </Helmet>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  )
}

export default MyApp
